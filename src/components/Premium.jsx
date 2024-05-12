import React from 'react';

import "../assets/css/Premium.css";
import { Link } from 'react-router-dom';

const Premium = () => {

  
    return (
        <div className='premium'>
          <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css"/>

        <div className="main-section">
    <div className="join-us main-buttons">
        <Link to="/authentication"><button type="button">Join Us</button></Link>
        <a href="/" style={{textDecoration: "none"}}><button type="button" style={{marginTop: "0"}}>Go Back</button></a>
    </div>
    <div className="main-title">
        <h1 style={{fontSize: "2em ", marginTop: "22px", fontWeight: "bold"}}>Know Thy Shelf</h1>
        <h3>Premium</h3>
        <p style={{fontSize:"16px", marginTop: "25px"}}>Indulge in the warmth of premium reading - where every page feels like a snug embrace. Our exclusive membership is your passport to a haven of stories, relaxation, and literary bliss..
          Unlock a realm where every page is an adventure waiting to unfold. Embark on a literary journey like never before!</p>
        <div className="main-buttons">
            <a href="#"><button style={{fontSize: "1rem"}}>Start Reading</button></a>
            <a href="#"><button style={{fontSize: "1rem"}}>Start Writing</button></a>
        </div>
        
    </div>
    <div className="animation-elementsab">
        <section className="red-elements">
            <div className="book12">
                <img src="/WebsiteElements/Book.png" alt=""/>
            </div>
            <div className="left-heart">
                <img src="/WebsiteElements/Heart.png" alt=""/>
            </div>
            <div className="right-heart">
                <img src="/WebsiteElements/Heart.png" alt=""/>
            </div>
            <div className="left-flower">
                <img src="/WebsiteElements/Flower.png" alt=""/>
            </div>
            <div className="right-flower">
                <img src="/WebsiteElements/Flower.png" alt=""/>
            </div>
            <div className="left-cloud">
                <img src="/WebsiteElements/Cloud.png" alt=""/>
            </div>
            <div className="right-choco">
                <img src="/WebsiteElements/Choco.png" alt=""/>
            </div>
        </section>
    </div>
  </div>

  <div className="modal modal-sheet position-static d-block p-5 py-md-5" tabIndex="-1" role="dialog" id="modalTour" style={{backgroundColor: "#60aaf4"}}>
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow">
        <div className="modal-body p-5">
          <h2 className="fw-bold mb-0">What's new</h2>
  
          <ul className="d-grid gap-5 my-5 list-unstyled small">
            <li className="d-flex gap-3">
              <svg className="bi text-body-secondary flex-shrink-0" width="48" height="48"><use xlinkHref="#grid-fill">
                <symbol id="grid-fill" viewBox="0 0 16 16">
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                </symbol>
              </use></svg>
              <div>
                <h5 className="mb-0">Grid view</h5>
                Not into lists? Try the new grid view.
              </div>
            </li>
            <li className="d-flex gap-3">
              <svg className="bi text-warning flex-shrink-0" width="48" height="48"><use xlinkHref="#bookmark-star">
                <symbol id="bookmark-star" viewBox="0 0 16 16">
                  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"></path>
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                </symbol>
              </use></svg>
              <div>
                <h5 className="mb-0">Bookmarks</h5>
                Save items you love for easy access later.
              </div>
            </li>
            <li className="d-flex gap-3">
              <svg className="bi text-primary flex-shrink-0" width="48" height="48"><use xlinkHref="#film">
                <symbol id="film" viewBox="0 0 16 16">
                  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"></path>
                </symbol>
              </use></svg>
              <div>
                <h5 className="mb-0">Books embeds</h5>
                Share Books wherever you go.
              </div>
            </li>
          </ul>
          <button type="button" className="btn btn-lg btn-primary mt-3 w-100" style={{backgroundColor: "#60aaf4", border: "none"}} data-bs-dismiss="modal">Discover More!</button>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid py-5" style={{background: "linear-gradient(135deg, #f46060, #f24848)"}}>
    <div className="container p-5 ">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card h-100 shadow-lg">
            <div className="card-body">
              <div className="text-center p-3">
                <h5 className="card-title">Basic</h5>
                <small>Individual</small>
                <br/><br/>
                <span className="h2">FREE</span>
                <br/><br/>
              </div>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Cras justo odio</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Dapibus ac facilisis in</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Vestibulum at eros</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-outline-primary btn-lg" style={{borderRadius:"30px"}}>Select</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card h-100 shadow-lg">
            <div className="card-body">
              <div className="text-center p-3">
                <h5 className="card-title">Standard</h5>
                <small>Small Business</small>
                <br/><br/>
                <span className="h2">$20</span>/month 
                <br/><br/>
              </div>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Cras justo odio</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Dapibus ac facilisis in</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Vestibulum at eros</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-outline-primary btn-lg" style={{borderRadius:"30px"}}>Select</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card h-100 shadow-lg">
            <div className="card-body">
              <div className="text-center p-3">
                <h5 className="card-title">Premium</h5>
                <small>Large Companies</small>
                <br/><br/>
                <span className="h2">$40</span>/month
                <br/><br/>
              </div>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Cras justo odio</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Dapibus ac facilisis in</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Vestibulum at eros</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-outline-primary btn-lg" style={{borderRadius:"30px"}}>Select</button>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>

  <div className="signupcont" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "120vh", width: "100%", backgroundColor: "#f48560"}}>
    <div id="main-wrapper" className="container py-5" style={{fontFamily: "'Be Vietnam Pro', sans-serif"}}>
      <div className="row justify-content-center">
          <div className="col-10">
              <div className="card border-0">
                  <div className="card-body p-0">
                      <div className="row no-gutters">
                          <div className="col-lg-6">
                              <div className="p-5">
                                  <div className="mb-5">
                                      <h3 className="h4 font-weight-bold" style={{color:" #f46060"}}>Sign-Up To Upgrade</h3>
                                  </div>
  
                                  <h6 className="h5 mb-0">Welcome</h6>
                                  <p className="text-muted mt-2 mb-5">To the premium world of limitless reading!</p>
  
                                  <form>
                                      <div className="form-group mb-3">
                                          <label htmlFor="exampleInputEmail1" className="pb-3">Email address</label>
                                          <input type="email" className="form-control" id="exampleInputEmail1"/>
                                      </div>
                                      <div className="form-group mb-5">
                                          <label htmlFor="exampleInputPassword1" className="pb-3">Password</label>
                                          <input type="password" className="form-control" id="exampleInputPassword1"/>
                                      </div>
                                      <button type="submit" className="btn btn-theme" style={{backgroundColor: "#f46060", border: "none"}}>Sign-up</button>
                                  </form>
                              </div>
                          </div>
  
                          <div className="col-lg-6 d-none d-lg-inline-block">
                              <div className="account-block rounded-right">
                                  <div className="overlay rounded-right"></div>
                                  <div className="account-testimonial">
                                  </div>
                              </div>
                          </div>
                      </div>
  
                  </div>

              </div>
          </div>

      </div>

    </div>
  </div>


<section className="py-3 py-md-5" style={{backgroundColor: "#60aaf4", fontFamily: "'Be Vietnam Pro', sans-serif "}}>
  <div className="container mb-5">
    <div className="row gy-5 align-items-lg-center justify-content-center">
      <div className="col-12 col-lg-6">
        <div className="row justify-content-xl-end">
          <div className="col-12 col-xl-11 mb-5">
            <h2 className="h1 mb-3 pb-3 pt-5" style={{color: "#fff"}}>How can we help you?</h2>
            <p className="fs-5 text-secondary mb-5" style={{color: "#fff "}}>We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How Do I Change My Billing Information?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>To change your billing information, please follow these steps:</p>
                    <ul>
                      <li>Go to our website and sign in to your account.</li>
                      <li>Click on your profile picture in the top right corner of the page and select "Account Settings."</li>
                      <li>Under the "Billing Information" section, click on "Edit."</li>
                      <li>Make your changes and click on "Save."</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How Does Payment System Work?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A payment system is a way to transfer money from one person or organization to another. It is a complex process that involves many different parties, including banks, credit card companies, and merchants.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How Do I Cancel My Account?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>To cancel your account, please follow these steps:</p>
                    <ul>
                      <li>Go to our website and sign in to your account.</li>
                      <li>Click on your profile picture in the top right corner of the page and select "Account Settings."</li>
                      <li>Scroll to the bottom of the page and click on "Cancel Account."</li>
                      <li>Enter your password and click on "Cancel Account."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
}

export default Premium;