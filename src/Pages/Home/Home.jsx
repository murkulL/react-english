import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
// const { MongoClient, ServerApiVersion } = require('mongodb');

function Home() {
  const [words, setWords] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getWords = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setWords(data);
      } catch (error) {
        console.error('Error', error);
      }
    };
    getWords();
  }, []);

  function filterWords() {
    return words.filter((item) => item.name.includes(searchText));
  }

  return (
    <div className={styles.home}>
      <h2>Home</h2>
      <form>
        <input type="text" onChange={(event) => setSearchText(event.target.value)} />
        <p className={styles.InputText}>Find word</p>
        <input type="text" placeholder="Write word" />
        <button>Add word</button>
      </form>

      <ul>
        {filterWords().map((word, index) => (
          <li key={index}>{word.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
