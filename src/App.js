import React, { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <center>
    <div >
      <h1>Responsice Paragraph Word Counter</h1>
      <textarea
        rows="5"
        cols="50"
        placeholder="Hi All"
        value={text}
        onChange={handleChange}
      />
      <p>Word Count: {wordCount}</p>
    </div></center>
  );
}

export default App;