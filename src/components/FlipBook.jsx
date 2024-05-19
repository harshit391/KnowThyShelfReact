import { useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import "../assets/css/FlipBook.css"
import { doc } from 'firebase/firestore';

function MyBook() {
    const book = useRef();

    useEffect(() => {
        const prev = document.querySelector('.prevBtn');
        const next = document.querySelector('.nextBtn');

        prev.addEventListener('click', () => {
            book.current.pageFlip().flipPrev();
        });


        next.addEventListener('click', () => {
            book.current.pageFlip().flipNext();
        });

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            book.current.pageFlip().flipPrev();
        } else if (event.key === 'ArrowRight') {
            book.current.pageFlip().flipNext();
        }
    };


    return (
        <div className='flip-book'>
            <button className='prevBtn'>{"<"}</button>
            <HTMLFlipBook width={350} height={500} ref={book}>
                <div className="demoPage1"><img src="/pages/1-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/2-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/3-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/4-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/5-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/6-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/7-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/8-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/9-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/10-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/11-large.jpg"></img></div>
                <div className="demoPage"><img src="/pages/12-large.jpg"></img></div>
            </HTMLFlipBook>
            <button className='nextBtn'>{">"}</button>
        </div>
    );
}

export default MyBook;