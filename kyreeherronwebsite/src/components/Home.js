import React from 'react';
import styles from './StyleSheet.module.css';

// ImageHeader component
function ImageHeader() {
  // You can replace the 'imageUrl' with the actual URL of your image.
  const imageUrl = 'https://example.com/your-image.jpg';

  return (
    <header>
      <img src={imageUrl} alt="Kyree H" style={{ width: '100%', height: 'auto' }} />
    </header>
  );
}

// NameSection component
function NameSection() {
  const yourName = 'Kyree Herron';

  return (
    <section>
      <h1 style={{ textAlign: 'center' }}>{yourName}</h1>
    </section>
  );
}
function Home() {
  return (
    <div  className={styles.home}>
      <ImageHeader />
      <NameSection />
    </div>
  );
}

export default Home;