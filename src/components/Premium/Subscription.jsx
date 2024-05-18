import React from "react";

const Subscription = () => {
    return (
  <div className="container-fluid py-5" style={{background: "linear-gradient(135deg, #f46060, #f24848)"}}>
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="text-center p-3">
                <h5 className="card-title">Basic</h5>
                <small>Individual</small>
                <br/><br/>
                <span className="h2">FREE</span>
                <br/><br/>
              </div>
              <p className="card-text">This is our Standard model.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Write 1 Book /Month</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg>Read 150 Books /Month</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> No AudioBooks</li>
            </ul>
            <div className="card-body text-center">
            <a href="/authentication"><button className="btn btn-outline-primary btn-lg" style={{borderRadius:"30px"}}>Select</button></a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="text-center p-3">
                <h5 className="card-title">Standard</h5>
                <small>Small Business</small>
                <br/><br/>
                <span className="h2">₹99.00</span>/month 
                <br/><br/>
              </div>
              <p className="card-text">Get the KnowThyShelf Premium Subscription!!</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Write Unlimited Books</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Read Unlimited Books</li>
              <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg> Listen to Audio Books</li>
            </ul>
            <div className="card-body text-center">
              <a href="https://buy.stripe.com/test_bIYg1X4ae32SfcY7ss"><button className="btn btn-outline-primary btn-lg" style={{borderRadius:"30px"}}>Select</button></a>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>
    )
}

export default Subscription;