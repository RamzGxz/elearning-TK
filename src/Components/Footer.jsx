const Footer = () => {

    return (
        <div className="mt-3">
            <footer className="d-flex justify-content-center align-items-center flex-column" style={{
                height: '30vh'
            }}>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pembelajaran</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Info</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Admin</a></li>
                </ul>
                <p className="text-center text-body-secondary">© 2023 Elearning anak-TK</p>
            </footer>
        </div>
    )
}

export default Footer