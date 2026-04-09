import { useState, useEffect } from 'react';

function BibleReader() {
  const [bibleData, setBibleData] = useState<any>(null);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [selectedChapter, setSelectedChapter] = useState<any>(null);

  useEffect(() => {
    fetch('/louis-segond-formatted.json')
      .then(res => res.json())
      .then(data => setBibleData(data))
      .catch(err => console.error(err));
  }, []);

  if (!bibleData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500 animate-pulse">Chargement de la Bible...</p>
      </div>
    );
  }

  // 1. Vue : LECTURE DES VERSETS
  if (selectedBook && selectedChapter) {
    return (
      <div className="max-w-3xl mx-auto p-4 md:p-8 pt-24 pb-32">
        <button 
          onClick={() => setSelectedChapter(null)}
          className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
        >
          ← Retour aux chapitres
        </button>
        
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">
          {selectedBook.Text} {selectedChapter.ID || 1}
        </h2>
        
        <div className="space-y-4">
          {selectedChapter.Verses.map((verse: any, index: number) => (
            <p key={index} className="text-lg text-gray-800 leading-relaxed">
              <sup className="font-bold text-gray-400 mr-2 text-sm">
                {verse.ID || 1}
              </sup> 
              {verse.Text}
            </p>
          ))}
        </div>
      </div>
    );
  }

  // 2. Vue : GRILLE DES CHAPITRES
  if (selectedBook && !selectedChapter) {
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-8 pt-24 pb-32">
        <button 
          onClick={() => setSelectedBook(null)}
          className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
        >
          ← Retour aux livres
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{selectedBook.Text}</h2>
        
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {selectedBook.Chapters.map((chapter: any, index: number) => (
            <button 
              key={index} 
              onClick={() => setSelectedChapter(chapter)}
              className="py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all font-semibold text-gray-700"
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 3. Vue : LISTE DES LIVRES (Vue par défaut)
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 pt-24 pb-32">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">La Sainte Bible</h1>
      
      {bibleData.Testaments.map((testament: any, tIndex: number) => (
        <div key={tIndex} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-600 border-b pb-2">
            {testament.Text || (tIndex === 0 ? "Ancien Testament" : "Nouveau Testament")}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {testament.Books.map((book: any, bIndex: number) => (
              <button 
                key={bIndex} 
                onClick={() => setSelectedBook(book)}
                className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-colors text-left font-medium text-gray-800 shadow-sm"
              >
                {book.Text || `Livre ${bIndex + 1}`} 
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BibleReader;
