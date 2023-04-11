import Footer from "./Footer"
import SideBar from "./SideBar"

import { useRef } from "react"

const AdminUpload = () => {
    // userefFormGambar
    const linkRefGambar = useRef(null)
    const descRefGambar = useRef(null)
    const katRefGambar = useRef(null)

    // useRefFormVideo
    const linkVidRef = useRef(null)
    const descVidRef = useRef(null)
    const katVidRef = useRef(null)

    // useRefformBerita
    const judulBeritaRef = useRef(null)
    const isiBeritaRef = useRef(null)
    const fotoBeritaRef = useRef(null)
    const katBeritaRef = useRef(null)

    const handlePostGambar = (e) => {
        e.preventDefault()
        
        const linkVal = linkRefGambar.current.value
        const descVal = descRefGambar.current.value
        const katVal = katRefGambar.current.value

        if (!linkVal || !descVal || !katVal) {
            alert('please fill all field!!')
        } else {
            fetch('http://localhost:3000/postDataGambar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    linkGambar: linkVal,
                    descGambar: descVal,
                    kategori: katVal
                })
            })
                .then((res) => {
                    if (res.ok) {
                        res.json()
                        alert(`data has been posted!`)
                        window.location.reload()
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    const handlePostVideo = (e) => {
        e.preventDefault()
        const linkVidVal = linkVidRef.current.value
        const descVidVal = descVidRef.current.value
        const katVidVal = katVidRef.current.value

        if (!linkVidVal || !descVidVal || !katVidRef) {
            alert('please fill all field! ')
        } else {
            fetch('http://localhost:3000/postDataVideo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    linkVideo: linkVidVal,
                    descVideo: descVidVal,
                    kategori: katVidVal
                })
            })
                .then((res) => {
                    if (res.ok) {
                        res.json()
                        alert(`data has been posted!`)
                        window.location.reload()
                    }
                })
                .catch((err) => console.log(err))
        }

    }

    const handlePostBerita = (e) => {
        e.preventDefault()
        const judulBeritaVal = judulBeritaRef.current.value
        const isiBeritaVal = isiBeritaRef.current.value
        const fotoBeritaVal = fotoBeritaRef.current.value
        const katBeritaVal = katBeritaRef.current.value

        if (!isiBeritaVal || !fotoBeritaVal || !katBeritaVal) {
            alert('please fill all field!')
        } else {
            fetch('http://localhost:3000/postDataBerita', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    judulBerita: judulBeritaVal,
                    isiBerita: isiBeritaVal,
                    fotoBerita: fotoBeritaVal,
                    kategori: katBeritaVal
                })
            })
                .then((res) => {
                    if (res.ok) {
                        res.json()
                        alert(`data has been posted!`)
                        window.location.reload()
                    }
                })
                .catch((err) => console.log(err))
        }

    }

    return (
        <div style={{
            paddingLeft: 280
        }} className="contentAdmin">
            <SideBar menuAct2='active' />

            <div className="titleWrap w-100 d-flex justify-content-center align-items-center contentWrapper" style={{
                height: '15vh'
            }}>
                <h2>Upload Content</h2>
            </div>
            <div className="wrapper mb-5">
                <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                    height: 'auto'
                }}>
                    <div className="my-2 w-100 pb-2" style={{
                        height: 'auto',
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
                                    <input type="text" className="form-control" aria-describedby="emailHelp" ref={linkRefGambar} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Deskripsi gambar</label>
                                    <input type="text" className="form-control" ref={descRefGambar} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Kategori Kelas</label>
                                    <input type="text" className="form-control" ref={katRefGambar} />
                                </div>
                                <div className="w-100 d-flex justify-content-end">
                                    <button className="btn btn-dark" onClick={handlePostGambar}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                    height: 'auto'
                }}>
                    <div className="my-2 w-100 pb-2" style={{
                        height: 'auto',
                        border: '1px solid black',
                        borderRadius: 5
                    }}>
                        <div className="w-100 bg-primary-subtle d-flex align-items-center" style={{
                            height: '7vh',
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5
                        }}>
                            <h5 className="ms-2 fw-bolder" style={{marginBottom: 0}}>Video</h5>
                        </div>
                        <div className="container">
                            <form className="mt-3" onSubmit={handlePostVideo}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Link Video</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" ref={linkVidRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Deskripsi Video</label>
                                    <input type="text" className="form-control" ref={descVidRef} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Kategori</label>
                                    <input type="text" className="form-control" ref={katVidRef} />
                                </div>
                                <div className="w-100 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                    height: 'auto'
                }}>
                    <div className="w-100 pb-2" style={{
                        height: 'auto',
                        border: '1px solid black',
                        borderRadius: 5
                    }}>
                        <div className="w-100 bg-primary-subtle d-flex align-items-center" style={{
                            height: '7vh',
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5
                        }}>
                            <h5 className="ms-2 fw-bolder" style={{marginBottom: 0}}>Berita</h5>
                        </div>
                        <div className="container">
                            <form className="mt-3" onSubmit={handlePostBerita}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Judul Berita</label>
                                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" ref={judulBeritaRef}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Isi Berita</label>
                                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" ref={isiBeritaRef}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Foto</label>
                                    <input type="text" className="form-control" id="" ref={fotoBeritaRef}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Kategori Berita</label>
                                    <input type="text" className="form-control" id="" ref={katBeritaRef}/>
                                </div>
                                <div className="w-100 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AdminUpload