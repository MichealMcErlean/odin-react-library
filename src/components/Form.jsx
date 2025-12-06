import styles from './Form.module.css';
import {useState} from 'react'

export default function Form({onSubmit}) {

  const [hasRead, setHasRead] = useState('true');

  function handleClearFields() {
    const titleField = document.getElementById('formTitle');
    const authorField = document.getElementById('formAuthor');
    const pagesField = document.getElementById('formPages');

    titleField.value = '';
    authorField.value = '';
    pagesField.value = '';
  }

  const handleReadChange = (event) => {
    setHasRead(event.target.value);
  }

  return (
    <form 
      action="/"
      method='post'
      name='addBookForm' 
      className={styles.form}
      onSubmit={onSubmit}
    >
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" id="formTitle" required />
      <label htmlFor="author">Author: </label>
      <input type="text" name="author" id="formAuthor" required />
      <label htmlFor="pages">Pages: </label>
      <input type="number" name="pages" id="formPages" required />
      <fieldset className={styles.fieldset}>
        <legend>Have you read it?</legend>
        <input 
          type="radio" 
          name="readBool" 
          value="true" 
          id='readYes'
          checked={hasRead === 'true'}
          onChange={handleReadChange} 
        />
        <label htmlFor="readYes">Yes</label>
        <input 
          type="radio" 
          name="readBool" 
          id="readNo" 
          value='false' 
          checked={hasRead === 'false'}
          onChange={handleReadChange}
        />
        <label htmlFor="readNo">No</label>
      </fieldset>
      <button 
        type="button"
        onClick={handleClearFields}
      >
        Clear Fields
      </button>
      <button type="submit">Add Book</button>
    </form>
  )
}