import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [text, setText] = useState();
  const [words, setWords] = useState(0);
  const [alphabet, setAlphabet] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setWords(wordCount(newText));
    setAlphabet(alphbetCount(newText));
  };

  const convertTotext = () => {
    setText((prev) => prev.toUpperCase());
  };

  const convertToSmall = () => {
    setText((prev) => prev.toLowerCase());
  };

  const convertToCaptalize = () => {
    setText(
      (prev) => prev.charAt(0).toUpperCase() + prev.slice(1).toLowerCase()
    );
  };

  const removeText = () => {
    setText(' ');
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const wordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const alphbetCount = (text) => {
    return text.length;
  };

  return (
    <>
      <div className="textbox">
        <textarea
          style={{ width: '800px', height: '100px' }}
          value={text}
          onChange={handleTextChange}
        />
        <br />
        <button onClick={convertTotext}>Convert in captial</button>{' '}
        <button onClick={convertToSmall}>Convert in small</button>{' '}
        <button onClick={convertToCaptalize}>Convert in captalize</button>{' '}
        <button onClick={removeText}>Remove your text</button>{' '}
        <button onClick={copyToClipboard}>Copy to clipboard</button> <br />
        <br />
        Alphabet : {alphabet}
        <br />
        Word: {words}
      </div>
    </>
  );
}

export default App;
