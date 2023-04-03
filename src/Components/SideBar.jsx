const SideBar = (props) => {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary navbar-dark" style={{ width: '12%', position: 'fixed', bottom: 0, height:'91vh', zIndex: 9999}}>
                
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <li className="nav-item">
                        <a href="#" className={`nav-link ${props.sideact1} py-3 border-bottom rounded-0 d-flex align-items-center w-100`} aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
                            <i className="fa-solid fa-gauge-high fs-3" />
                            <h5 className="px-2" style={{
                                marginBottom: '0%'
                            }}>Dashboard</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`nav-link ${props.sideact2} py-3 border-bottom rounded-0 d-flex align-items-center w-100`} data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
                            <i className="fa-solid fa-cloud-arrow-up fs-3" />
                            <h5 className="px-2" style={{
                                marginBottom: '0%'
                            }}>Upload</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`nav-link ${props.sideact3} py-3 border-bottom rounded-0 d-flex align-items-center`} data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
                            <i className="fa-sharp fa-solid fa-pen-to-square fs-3" />
                            <h5 className="px-2" style={{
                                marginBottom: '0%'
                            }}>Update</h5>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SideBar