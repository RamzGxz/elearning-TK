

const SideBar = (props) => {
    return (
        <div style={{
            position: 'fixed',
            left: 0
        }}>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: '100vh' }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className="fas fa-cubes fa-2x me-2" style={{ color: '#ff6219' }} />
                    <span className="fs-4">Menus</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="my-1">
                        <a href="#" className={`nav-link  text-white d-flex ${props.menuAct1} align-items-center w-100`}>
                            <i className="fa-solid fa-gauge-high mb-0 fs-3" />
                            <p className="ps-3 mb-0 fs-5">Dashboard</p>
                        </a>
                    </li>
                    <li className="my-1">
                        <a href="#" className={`nav-link  text-white d-flex ${props.menuAct2} align-items-center w-100`}>
                            <i className="fa-solid fa-file-arrow-up fs-2" />
                            <p className="ps-3 mb-0 fs-5">Upload Content</p>
                        </a>
                    </li>
                    <li className="my-1">
                        <a href="#" className={`nav-link  text-white d-flex ${props.menuAct3} align-items-center w-100`}>
                            <i className="fa-solid fa-pen-to-square fs-3" />
                            <p className="ps-3 mb-0 fs-5">Update Data</p>
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt width={32} height={32} className="rounded-circle me-2" />
                        <strong>Account</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                        <li><a className="dropdown-item" href="#">Back to Home Page</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar