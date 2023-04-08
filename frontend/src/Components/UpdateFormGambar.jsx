const UpdateFormGambar = (props) => {
    return (
        <div>
            <div className="updateForm d-flex justify-content-center align-items-center" id="updateFormGambar" style={{
                width: '100%',
                height: '100vh',
                backgroundColor: '#1d1d1d33',
                zIndex: 9999,
                position: 'fixed',
                top: '-50%',
                left: '50%',
                transition: '.5s',
                transform: 'translate(-50%, -50%)'
            }}>
                <div style={{
                    width: '50%',
                    height: '50vh',
                    backgroundColor: '#d4a373',
                    position: 'absolute'
                }} className="rounded-4 shadow-lg">
                    <i className="fa-solid fa-circle-xmark fs-3" id="closeFormGambar" style={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }} />

                    <h3 className="text-center mt-4">Update Form</h3>

                    <div className="container mt-3">
                        <form className="mt-3" id="formUpdateGambar">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Link Gambar</label>
                                <input type="text" className="form-control"  aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Deskirpsi Gambar</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Kategori</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="w-100 d-flex justify-content-end">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateFormGambar