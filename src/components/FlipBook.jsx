import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import "../assets/css/FlipBook.css"

function MyBook() {
    const book = useRef();

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            book.current.pageFlip().flipPrev();
        } else if (event.key === 'ArrowRight') {
            book.current.pageFlip().flipNext();
        }
    };

    const handlePrev = () => {
        book.current.pageFlip().flipPrev();
    };

    const handleNext = () => {
        book.current.pageFlip().flipNext();
    };

    return (
        <div className='flip-book' onKeyDown={handleKeyDown} tabIndex={0}>
            <button className='prevBtn' onClick={handlePrev}>{"<"}</button>
            <HTMLFlipBook width={350} height={500} ref={book}>
                <div className="demoPage1"><img src="/pages/1-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/2-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/3-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/4-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/5-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/6-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/7-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/8-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/9-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/10-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/11-large.jpg" /></div>
                <div className="demoPage"><img src="/pages/12-large.jpg" /></div>
            </HTMLFlipBook>
            <button className='nextBtn' onClick={handleNext}>{">"}</button>
        </div>
    );
}

export default MyBook;
