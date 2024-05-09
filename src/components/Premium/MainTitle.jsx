import Book from '../WebsiteElements/Book.png';
import Heart from '../WebsiteElements/Heart.png';
import Flower from '../WebsiteElements/Flower.png';
import Cloud from '../WebsiteElements/Cloud.png';
import Choco from '../WebsiteElements/Choco.png';
import Hat from '../WebsiteElements/Hat.png';
import Naruto from '../WebsiteElements/Naruto.png';
import Katana from '../WebsiteElements/Katana.png';
import Totoro from '../WebsiteElements/Totoro.png';
import BlueBook from '../WebsiteElements/BlueBook.png';
import { Link } from 'react-router-dom';

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
            Indulge in the warmth of premium reading – where every page feels like
            a snug embrace. Our exclusive membership is your passport to a haven of
            stories, relaxation, and literary bliss. Unlock a realm where every
            page is an adventure waiting to unfold. Embark on a literary journey
            like never before!
        </p>
        <div className="main-buttons">
            <Link href="/authentication">
            <button>Start Reading</button>
            </Link>
            <Link to="/authentication">
            <button>Start Writing</button>
            </Link>
        </div>
        </div>
        <div className="animation-elements">
        <section className="red-elements">
          <div className="red-book">
            <img src={Book} alt="" />
          </div>
          <div className="left-heart">
            <img src={Heart} alt="" />
          </div>
          <div className="right-heart">
            <img src={Heart} alt="" />
          </div>
          <div className="left-flower">
            <img src={Flower} alt="" />
          </div>
          <div className="right-flower">
            <img src={Flower} alt="" />
          </div>
          <div className="left-cloud">
            <img src={Cloud} alt="" />
          </div>
          <div className="right-choco">
            <img src={Choco} alt="" />
          </div>
        </section>
        <section className="blue-elements">
          <div className="left-hat">
            <img src={Hat} alt="" />
          </div>
          <div className="left-naruto">
            <img src={Naruto} alt="" />
          </div>
          <div className="right-naruto">
            <img src={Naruto} alt="" />
          </div>
          <div className="left-katana">
            <img src={Katana} alt="" />
          </div>
          <div className="right-katana">
            <img src={Katana} alt="" />
          </div>
          <div className="right-totoro">
            <img src={Totoro} alt="" />
          </div>
          <div className="bluebook">
            <img src={BlueBook} alt="" />
          </div>
        </section>
      </div>
    </div>;
}
  