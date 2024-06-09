import React, { useState } from 'react';
import './Write.css';
import { Link, useSearchParams } from 'react-router-dom';

import { useFirebase } from '../../context/Firebase';


const Write = () => {
  const firebase = useFirebase();
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [author, setAuthor] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookCover, setBookCover] = useState(null);
  const [bookImg, setBookImg] = useState('/images/sungjinwoo.jpg');
  const [bookFile, setBookFile] = useState('');
  const [uploadPdf, setuploadPdf] = useState(false);
  const [uploadImg, setuploadImg] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('Upload PDF File');
  const [bookDesc, setBookDesc] = useState('');
  const [genre, setGenre] = useState('');

  const [searchParams] = useSearchParams();
  let goback = searchParams.get('prev');
  if (goback === null) {
    goback = '';
  }

  const handleStoryChange = (e) => {
    setStory(e.target.value);
    setBookDesc(e.target.value); // Update book description
  };

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
    setBookTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    if (!e.target.files[0].type.startsWith('image/')) {
      alert("Please upload a Valid Image file");
      return;
    } else if (e.target.files[0] === undefined || e.target.files[0] === null) {
      alert("Please upload a file");
      return;
    } 
    setuploadImg(true);
    setBookCover(e.target.files[0]);
    setBookImg(URL.createObjectURL(e.target.files[0]));
    alert("Image Uploaded Successfully");
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files[0].type !== 'application/pdf') {
      alert("Please upload a PDF file");
      return;
    } else if (e.target.files[0] === undefined || e.target.files[0] === null) {
      alert("Please upload a file");
      return;
    }
    setuploadPdf(true);
    setBookFile(e.target.files[0]);
    setUploadStatus("PDF File Uploaded");
    alert("Pdf File Uploaded Successfully");
  }

  const handleGenreChange = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === '') {
      alert("Please enter the title of the book");
      return;
    }
    else if (uploadPdf) {
      if (author === '') {
        setAuthor('Anonymous');
      }
      if (genre === '') {
        setGenre('Undefined');
      }
      await firebase.handleCreateNewListing(title, author, bookCover, bookFile, bookDesc, genre);
      alert("Book Published successfully!");
      window.location.reload();
      return;
    } else {
      alert("Please upload the PDF file");
      return;
    }
  }


  return (
    <div className='write-body'>
      <div className="join-us main-buttons">
        <Link to="/authentication" className="joinbtn"><button type="button">Go to Profile</button></Link>
        <Link to={"/" + goback} className="joinbtn"><button type="button">Go Back</button></Link>
      </div>
      <h1 className='write-head'>Writing, <span className='reimagined'>Reimagined</span></h1>
      <h4 className='write-head2'>With every stroke of the pen, worlds unfurl, characters breathe life, and stories weave themselves effortlessly into existence, born from the depths of imagination and the flow of inspired words.</h4>

      <div className="input-form">
        <form onSubmit={handleSubmit}>
          <div className="input-data">
            <div className="title-input">
              <input type="text" placeholder='Enter Book Title' className='enterTitle' value={title} onChange={handleTitleChange} />
              <textarea className='story-input' placeholder='Book Description' value={story} onChange={handleStoryChange} />
              <div className="extra-things">
              <input type="text" placeholder='Enter Author Name' className='enterAuthor' value={author} onChange={handleAuthorChange} />
              <input type="text" placeholder='Enter Genre Name' className='enterAuthor' value={genre} onChange={handleGenreChange} />
              </div>
              <div className="write-buttons">
                <label htmlFor="file-input" className='custom-file'>Upload Image</label>
                <input id="file-input" type="file" onChange={handleImageChange} style={{display: "none"}}/>
                <div className="pdfFile" style={{display: "flex", flexDirection: "column"}}>
                  <label htmlFor="file-input2" className='custom-file'>Upload PDF File</label>
                  <input id="file-input2" type="file" onChange={handleFileChange} style={{display: "none"}}/>
                  <h4>{uploadStatus}</h4>
                </div>
                <button type='submit' className='submit-btn'>Publish</button>
              </div>
            </div>
            <div className="book-cover">
              <div className="book-title">
                <h2>{bookTitle}</h2> {/* Display book title */}
              </div>
              <div className="book-image">
                <img src={bookImg} alt="Book Cover"/> {/* Display book image */}
              </div>
              <div className="book-author">
                <h3>{author}</h3>   {/* Display book author */}
              </div>
            </div>
            
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Write;
