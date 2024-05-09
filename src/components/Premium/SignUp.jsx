
export function SignUp() {
  return <div className="signupcont" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120vh',
    width: '100%',
    backgroundColor: '#f48560'
  }}>
        <div id="main-wrapper" className="container py-5" style={{
      fontFamily: "Be Vietnam Pro', sans-serif"
    }}>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card border-0">
                <div className="card-body p-0">
                  <div className="row no-gutters">
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="mb-5">
                          <h3 className="h4 font-weight-bold text-theme" style={{
                        color: '#f46060 !important'
                      }}>Sign-Up To Upgrade</h3>
                        </div>
  
                        <h6 className="h5 mb-0">Welcome</h6>
                        <p className="text-muted mt-2 mb-5">To the premium world of limitless reading!</p>
  
                        <form>
                          <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1" className="pb-3">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" />
                          </div>
                          <div className="form-group mb-5">
                            <label htmlFor="exampleInputPassword1" className="pb-3">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                          </div>
                          <button type="submit" className="btn btn-theme" style={{
                        backgroundColor: '#f46060 !important',
                        border: 'none'
                      }}>Sign-up</button>
                        </form>
                      </div>
                    </div>
  
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right">
                        <div className="overlay rounded-right"></div>
                        <div className="account-testimonial">
                          {
                        /* <h4 className="text-white mb-4">This  beautiful theme yours!</h4>
                        <p className="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                        <p>- Admin User</p> */
                      }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {
              /* end card-body */
            }
              </div>
            </div>
            {
          /* end col */
        }
          </div>
          {
        /* Row */
      }
        </div>
      </div>;
}
  