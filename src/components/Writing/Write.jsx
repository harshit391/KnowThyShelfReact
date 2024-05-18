import React, { useState } from 'react';
import './Write.css';

const Write = () => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [bookTitle, setBookTitle] = useState('');
  const [bookImage, setBookImage] = useState('');
  const [bookDesc, setBookDesc] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setBookTitle(e.target.value); // Update book title
  };

  const handleStoryChange = (e) => {
    setStory(e.target.value);
    setBookDesc(e.target.value); // Update book description
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  // const insertBulletPoint = (inputField) => {
  //   const startPos = inputField.selectionStart;
  //   const endPos = inputField.selectionEnd;
  //   let text = inputField.value;

  //   // Formatting based on current state
  //   const italicTag = isItalic ? '*' : '';
  //   const boldTag = isBold ? '**' : '';

  //   const newText =
  //     text.substring(0, startPos) +
  //     '-' +
  //     boldTag + italicTag +
  //     text.substring(startPos, endPos) +
  //     italicTag + boldTag +
  //     text.substring(endPos);

  //   setStory(newText);
  //   setBookDesc(newText); // Update book description with bullet points
  // };

  const handleImageChange = (e) => {
    setBookImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className='write-body'>
      <h1 className='write-head'>Writing, <span className='reimagined'>Reimagined</span></h1>
      <h4 className='write-head2'>With every stroke of the pen, worlds unfurl, characters breathe life, and stories weave themselves effortlessly into existence, born from the depths of imagination and the flow of inspired words.</h4>

      <div className="input-form">
        <form action="">
          <div className="input-data">
            <div className="title-input">
              <input type="text" placeholder='Enter Book Title' className='enterTitle' value={title} onChange={handleTitleChange} />
              <textarea className='story-input' placeholder='Cook your Story' value={story} onChange={handleStoryChange} style={{ fontStyle: isItalic ? 'italic' : 'normal', fontWeight: isBold ? 'bold' : 'normal' }} />
              <div className="write-buttons">
                <button type="button" className='write-italic' onClick={toggleItalic}>Italic</button>
                <button type="button" className='write-bold' onClick={toggleBold}>Bold</button>
                {/* <button type="button" onClick={() => insertBulletPoint(document.querySelector('.story-input'))}>Add Bullet Point</button> */}
                <label htmlFor="file-input" className='custom-file'>Upload Image</label>
                <input id="file-input" type="file" onChange={handleImageChange} style={{display: "none"}}/>
                <button type='submit' className='submit-btn'>Publish</button>
              </div>
              
            </div>
            <div className="book-cover">
              <div className="book-title">
                <h2>{bookTitle}</h2> {/* Display book title */}
              </div>
              <div className="book-image">
                <img src={bookImage} alt="Book Cover"/> {/* Display book image */}
              </div>
              <div className="book-desc">
                <p>{bookDesc}</p> {/* Display book description */}
              </div>
            </div>
            
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Write;
