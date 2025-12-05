import styles from './BookCard.module.css';
import {useState} from 'react';

export default function BookCard({key, book, onClick}) {
  const [read, setRead] = useState(book.read);

  function handleToggle() {
    setRead(prev => !prev);
  }

  return (
    <div
      className={styles.cardframe}
    >
      <p className={styles.label}>Title:</p>
      <p>{book.title}</p>
      <p className={styles.label}>Author:</p>
      <p>{book.author}</p>
      <p className={styles.label}>Pages:</p>
      <p>{book.pages}</p>
      <p className={styles.label}>Read?:</p>
      {read ? (
        <p>Yes!</p>
      ) : (
        <p>Not yet...</p>
      )}
      <button 
        className={styles.button}
        type="button"
        onClick={handleToggle}
      >
        Read Status
      </button>
      <button 
        className={styles.button}
        type="button"
        onClick={onClick}
      >
        Remove Book
      </button>
    </div>
  )

}