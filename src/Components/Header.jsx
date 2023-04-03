import { useState, useEffect } from "react"

const Header = (props) => {

    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="fixed-top" style={{
            zIndex: 9999
        }}>
            <nav className={`navbar navbar-expand-lg bg-light ${isScrolled ? 'bg-dark navbar-dark text-white' : ''}`} aria-label="Offcanvas navbar large">
                <div className="d-flex justify-content-between align-items-center w-100 px-3">
                    <div className="logo justify-content-center d-flex align-items-center">
                        <img src="/src/Assets/BMW_logo_(gray).svg.png" alt="" style={{
                            width: 50,
                            height: 50
                        }} />
                        <h4 className="ps-3 pt-2">Elearning TK</h4>
                    </div>
                    <button className={`navbar-toggler ${isScrolled ? 'bg-light' : ''}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <i className={`fa-solid fa-bars ${isScrolled ? 'text-black': ''}`} />
                    </button>
                    <div className="offcanvas offcanvas-end text-white" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-black" id="offcanvasNavbar2Label">Menus</h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body" style={{ fontSize: 18 }}>
                            <ul className="navbar-nav flex-grow-1 justify-content-center text-black">
                                <li className="nav-item">
                                    <a className={`nav-link ${props.act1}`} aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${props.act2}`} href="#">Pembelajaran</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${props.act3}`} href="#">Info</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className={`nav-link dropdown-toggle ${props.act4}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin
                                    </a>
                                    <ul className="dropdown-menu mb-3">
                                        <li><a className="dropdown-item nav-underline" href="#">Dashboard</a></li>
                                        <li><a className="dropdown-item" href="#">Upload</a></li>
                                        <li><a className="dropdown-item" href="#">Update Data</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <div className="loginBtn">
                                <button className={`btn fw-bolder ${isScrolled ? 'btn-light ': 'btn-dark'}`}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="" style={{
                width: '100%',
                height: 2,
                backgroundColor: 'black'
            }}></div>
        </div>
    )
}

export default Header