import Footer from "./Footer"
import SideBar from "./SideBar"

const AdminUpload = () => {

    return (
        <div style={{
            paddingLeft: 280
        }}>
            <SideBar menuAct2='active' />

            <div className="titleWrap w-100 d-flex justify-content-center align-items-center" style={{
                height: '15vh'
            }}>
                <h2>Upload Content</h2>
            </div>
            <div className="wrapper mb-5">
                <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                    height: '55vh'
                }}>
                    <div className="my-2 w-100" style={{
                        height: '55vh',
                        border: '1px solid black',
                        borderRadius: 5
                    }}>
                        <div className="w-100 bg-primary-subtle d-flex align-items-center" style={{
                            height: '7vh',
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5
                        }}>
                            <h5 className="ms-2 fw-bolder">Gambar</h5>
                        </div>
                        <div className="container">
                            <form className="mt-3">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Link Gambar</label>
                                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Deskripsi gambar</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Kategori Kelas</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div className="w-100 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                    height: '55vh'
                }}>
                    <div className="my-2 w-100" style={{
                        height: '55vh',
                        border: '1px solid black',
                        borderRadius: 5
                    }}>
                        <div className="w-100 bg-primary-subtle d-flex align-items-center" style={{
                            height: '7vh',
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5
                        }}>
                            <h5 className="ms-2 fw-bolder">Video</h5>
                        </div>
                        <div className="container">
                            <form className="mt-3">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Link Video</label>
                                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Deskripsi Video</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Kategori Kelas</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div className="w-100 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                    height: '55vh'
                }}>
                    <div className="my-2 w-100" style={{
                        height: '55vh',
                        border: '1px solid black',
                        borderRadius: 5
                    }}>
                        <div className="w-100 bg-primary-subtle d-flex align-items-center" style={{
                            height: '7vh',
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5
                        }}>
                            <h5 className="ms-2 fw-bolder">Berita</h5>
                        </div>
                        <div className="container">
                            <form className="mt-3">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Isi Berita</label>
                                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Foto</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Kategori Berita</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div className="w-100 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default AdminUpload