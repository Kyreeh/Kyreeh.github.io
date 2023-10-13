import React, { useState } from 'react';
import styles from './StyleSheet.module.css';
import imageUrl from '../assets/Kherron.jpeg';

function Home() {
  const [textList, setTextList] = useState([
    'Welcome to KyreeHerron.Com',
    'Stay tuned for updates!'
  ]); 

  const handleTextClick = (text) => {
    // Handle the click event on a text item (you can add your custom logic here)
    console.log(`Clicked on: ${text}`);
  };

  return (
  
    <div style={{ display: 'flex'}} className={styles.home}>
     <div style={{ flex: 1 }}>
      <img src={imageUrl} alt="Kyree H" style={{ width: '75%', height: 'auto', objectFit: 'cover'  }} />
     </div>  
     <div
        style={{
          flex: 1,
          overflowY: 'auto', // Enable vertical scrolling
          padding: '20px',
          
        }}
      >
        <ul  style={{ listStyle: 'none' }}>
          {textList.map((text, index) => (
            <li key={index}
            style={{
            color: 'white', // Change text color
            fontSize: '18px', // Change text font size
            fontStyle: 'italic', // Change text style
            marginBottom: '10px', // Add spacing between text items
            border: '100px solid white', // Add an outline
            padding: '10px', // Add padding inside the text box\
            borderBottom: '1px ', // Add a border between list items
            cursor: 'pointer', // Change cursor style to pointer
            height: '100%', // Make each item the height of the page
          }} 
          onClick={() => handleTextClick(text)}
          >{text}</li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default Home;