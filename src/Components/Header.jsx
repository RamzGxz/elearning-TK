
const Header = (props) => {
    
    return (
        <div>   
            <nav className="navbar navbar-expand-lg navbar-light text-black" aria-label="Offcanvas navbar large">
                <div className="container">
                    <div className="logo justify-content-center d-flex align-items-center">
                        <img src="/src/Assets/BMW_logo_(gray).svg.png" alt="" style={{
                            width: 50,
                            height: 50
                        }}/>
                        <h4 className="ps-3 pt-2">Elearning TK</h4>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end text-white" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-black" id="offcanvasNavbar2Label">Menus</h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body" style={{fontSize: 18}}>
                            <ul className="navbar-nav flex-grow-1 justify-content-center">
                                <li className="nav-item">
                                    <a className={`nav-link ${props}`} aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pembelajaran</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Info</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item nav-underline" href="#">Dashboard</a></li>
                                        <li><a className="dropdown-item" href="#">Upload</a></li>
                                        <li><a className="dropdown-item" href="#">Update Data</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <div className="loginBtn">
                                <button className="btn btn-dark">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mt-0" style={{
                width: '100%',
                height: 2,
                backgroundColor: 'black'
            }}></div>
            <div>
                <h1>okekkokok</h1>
            </div>
        </div>
    )
}

export default Header