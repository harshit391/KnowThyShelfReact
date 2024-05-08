import Book from '../WebsiteElements/Book.png';
import Heart from '../WebsiteElements/Heart.png';
import Flower from '../WebsiteElements/Flower.png';
import Cloud from '../WebsiteElements/Cloud.png';
import Choco from '../WebsiteElements/Choco.png';

export function MainTitle() {
  return <div className="main-section">
        <div className="main-title">
        <h1 style={{
        fontSize: '2em',
        marginTop: '22px',
        fontWeight: 'bold'
      }}>
            Know Thy Shelf
        </h1>
        <h3>Premium</h3>
        <p style={{
        fontSize: '16px',
        marginTop: '25px'
      }}>
            Indulge in the warmth of premium reading - where every page feels like
            a snug embrace. Our exclusive membership is your passport to a haven of
            stories, relaxation, and literary bliss. Unlock a realm where every
            page is an adventure waiting to unfold. Embark on a literary journey
            like never before!
        </p>
        <div className="main-buttons">
            <a href="./LoginSignup/KTS_LoginSignup.html">
            <button>Start Reading</button>
            </a>
            <a href="./LoginSignup/KTS_LoginSignup.html">
            <button>Start Writing</button>
            </a>
        </div>
        </div>
        <div class="animation-elements">
        <section class="red-elements">
            <div class="book">
                <img src={Book} alt=""/>
            </div>
            <div class="left-heart">
                <img src={Heart} alt=""/>
            </div>
            <div class="right-heart">
                <img src={Heart} alt=""/>
            </div>
            <div class="left-flower">
                <img src={Flower} alt=""/>
            </div>
            <div class="right-flower">
                <img src={Flower} alt=""/>
            </div>
            <div class="left-cloud">
                <img src={Cloud} alt=""/>
            </div>
            <div class="right-choco">
                <img src={Choco} alt=""/>
            </div>
        </section>
    </div>
    </div>;
}
  