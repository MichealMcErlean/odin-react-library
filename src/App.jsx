import { useEffect, useState } from 'react'
import './App.css'
import Book from './scripts/book';
import BookCard from './components/BookCard';
import Form from './components/Form';

function App() {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const book1 = new Book('Tester', 'Arthur Fake', 123, true);
    const book2 = new Book('Placeholder', 'Peter Mock', 456, false);
    const book3 = new Book('Very Long And Inconvenient Name', 'That Guy', 789, true);
    setBookList(prev => [...prev, book1, book2, book3]);
  }, []);

  function handleRemove(e, delBook) {
    const listcopy = [...bookList];
    const newlist = listcopy.filter(book => (
      (book.title != delBook.title) &&
      (book.author != delBook.author)
    ));
    setBookList(prev => newlist);
  }

  function handleAddBook(event) {
    event.preventDefault();

    const form = event.target;
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const pages = form.elements.pages.value;
    const read = form.elements.read.value;

    const newBook = new Book(title, author, pages, read);
    setBookList(prev => [...prev, newBook]);
  }

  return (
    <main>
      <header>
        <h1>Library</h1>
        <h2>An Odin Project exercise</h2>
        <h3>Powered by React</h3>
      </header>
      <aside>
        <Form 
          onSubmit={handleAddBook}
        />
      </aside>
      <article>
        {bookList.map((book, index) => (
          <BookCard 
            key={`${index}-${book.pages}`}
            book={book}
            onClick={(e) => handleRemove(e, book)}
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
