import { useEffect, useState, useRef } from "react"

const BeritaTable = () => {
    const [getBerita, getDataBerita] = useState([])
    const linkRef = useRef(null)
    const descRef = useRef(null)
    const katRef = useRef(null)
    
    useEffect(() => {
        fetch('http://localhost:3000/getDataBerita')
            .then(res => res.json())
            .then(data => getDataBerita(data))
            .catch(err => console.log(err))
    }, [])

    const delFuncBerita = (id) => {
        fetch(`http://localhost:3000/deleteBerita/${id}`, {
            method: "DELETE"
        })
            .then(data => {
                alert('data berhasil di delete!')
                window.location.reload()
            })
            .catch(err => alert(err))
    }

    const updateFuncBerita = (id) => {
        const wrapperId = document.getElementById('updateFormBerita')
        const closeFormBerita = document.getElementById('closeFormBerita')
        const updateForm = document.getElementById('formUpdateBerita')
        console.log(id)
        wrapperId.style.top = '50%'
        closeFormBerita.addEventListener('click', () => {
            wrapperId.style.top = '-50%'
        })

        // fetch(`http://localhost:3000/getGambarById/${id}`)
        // .then(res =>res.json())
        // .then(data =>{
        //     linkRef.current.value = data.linkGambar
        //     descRef.current.value = data.descGambar
        //     katRef.current.value = data.kategori
        // })

        updateForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            const linkVal = linkRef.current.value
            const descVal = descRef.current.value
            const katVal = katRef.current.value
            
            fetch(`http://localhost:3000/updateBerita/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({linkBerita: linkVal, descBerita: descVal, kategori: katVal})
            })
            .then(res => {
                if (res.ok){
                    alert('data has been updated')
                    e.target.reset()
                    wrapperId.style.top = '-50%'
                    window.location.reload()
                } else if(res.status === 404){
                    alert('error! data not found')
                }
            })
        })

    }

    return (
        <div>
            <div className="tableWrapper my-3 container">
                <div className="tableGambar rounded-3" style={{
                    border: '1px solid black',
                }}>
                    <div className=" rounded-top-3 bg-success-subtle">
                        <h3 className="text-center pt-1 pb-1" style={{
                            marginBottom: 0,
                            borderBottom: '1px solid black'
                        }}>Table Berita</h3>
                    </div>
                    <div className="" style={{
                        maxHeight: '50vh',
                        overflowY: 'auto',
                    }}>
                        <table className="table table-responsive text-center">
                            <thead>
                                <tr className="sticky-top bg-dark-subtle">
                                    <th scope="col">No</th>
                                    <th scope="col">Link Berita</th>
                                    <th scope="col">Deskripsi Berita</th>
                                    <th scope="col">Kategori Kelas</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getBerita.map(data => {
                                    return (
                                        <tr className="w-100" key={data.id}>
                                            <th scope="row" >{data.id}</th>
                                            <td className="w-25">{data.linkBerita}</td>
                                            <td>{data.descBerita}</td>
                                            <td>{data.kategori}</td>
                                            <td className="">
                                                <button className="btn btn-success p-1 me-1" onClick={() => updateFuncBerita(data.id)}>Update</button>
                                                <button className="btn btn-danger p-1 ms-1" onClick={() => delFuncBerita(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* form Update Gambar */}
            <div className="updateForm d-flex justify-content-center align-items-center" id="updateFormBerita" style={{
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
                    <i className="fa-solid fa-circle-xmark fs-3" id="closeFormBerita" style={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }} />

                    <h3 className="text-center mt-4">Update Form</h3>

                    <div className="container mt-3">
                        <form className="mt-3" id="formUpdateBerita">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Link Berita</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" ref={linkRef}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Deskirpsi Berita</label>
                                <input type="text" className="form-control" ref={descRef}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Kategori</label>
                                <input type="text" className="form-control" ref={katRef}/>
                            </div>
                            <div className="w-100 d-flex justify-content-end">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* end form update gambar */}

        </div>
    )
}

export default BeritaTable