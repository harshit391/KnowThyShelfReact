
export function ModalTour() {
  return <div className="main-section" style={{
    color: 'black'
  }}>
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-5 py-md-5" tabIndex="-1" role="dialog" id="modalTour" style={{
      backgroundColor: '#60aaf4',
      fontFamily: "'Be Vietnam Pro', sans-serif"
    }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-body p-5">
              <h2 className="fw-bold mb-0">What's new</h2>
  
              <ul className="d-grid gap-5 my-5 list-unstyled small">
                <li className="d-flex gap-3">
                  <svg className="bi text-body-secondary flex-shrink-0" width="48" height="48">
                    <use xlinkHref="#grid-fill" />
                    <symbol id="grid-fill" viewBox="0 0 16 16">
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                    </symbol>
                  </svg>
                  <div>
                    <h5 className="mb-0">Grid view</h5>
                    Not into lists? Try the new grid view.
                  </div>
                </li>
                <li className="d-flex gap-3">
                  <svg className="bi text-warning flex-shrink-0" width="48" height="48">
                    <use xlinkHref="#bookmark-star" />
                    <symbol id="bookmark-star" viewBox="0 0 16 16">
                      <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </symbol>
                  </svg>
                  <div>
                    <h5 className="mb-0">Bookmarks</h5>
                    Save items you love for easy access later.
                  </div>
                </li>
                <li className="d-flex gap-3">
                  <svg className="bi text-primary flex-shrink-0" width="48" height="48">
                    <use xlinkHref="#film" />
                    <symbol id="film" viewBox="0 0 16 16">
                      <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                    </symbol>
                  </svg>
                  <div>
                    <h5 className="mb-0">Books embeds</h5>
                    Share Books wherever you go.
                  </div>
                </li>
              </ul>
              <button type="button" className="btn btn-lg btn-primary mt-3 w-100" style={{
              backgroundColor: '#60aaf4',
              border: 'none'
            }} data-bs-dismiss="modal">Discover More!</button>
            </div>
          </div>
        </div>
      </div>
      </div>;
}
  