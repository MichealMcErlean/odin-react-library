import { useEffect, useState } from 'react'
import './App.css'
import Book from './scripts/book';
import BookCard from './components/BookCard';

function App() {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const book1 = new Book('Tester', 'Arthur Fake', 123, true);
    const book2 = new Book('Placeholder', 'Peter Mock', 456, false);
    const book3 = new Book('Very Long And Inconvenient Name', 'That Guy', 789, true);
    setBookList(prev => [...prev, book1, book2, book3]);
  }, []);

  function handleRemove(e, delBook) {
    console.log(delBook);
  }

  return (
    <main>
      <header>
        <h1>Library</h1>
        <h2>An Odin Project exercise</h2>
        <h3>Powered by React</h3>
      </header>
      <aside>
        <p>Here's where the form goes</p>
      </aside>
      <article>
        {bookList.map((book, index) => (
          <BookCard 
            key={`${index}-${book.pages}`}
            book={book}
            onClick={(e) => handleRemove(book)}
          />
        ))}
      </article>
      <footer>
        <p>&copy; Micheal McErlean 2025.</p>
      </footer>
    </main>
  )
}

export default App
