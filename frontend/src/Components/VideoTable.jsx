import { useEffect, useState, useRef } from "react"

const Videotable = () => {
    const [getGambar, getDataGambar] = useState([])
    const linkRef = useRef(null)
    const descRef = useRef(null)
    const katRef = useRef(null)
    
    useEffect(() => {
        fetch('http://localhost:3000/getGambar')
            .then(res => res.json())
            .then(data => getDataGambar(data))
            .catch(err => console.log(err))
    }, [])

    const delFuncGambar = (id) => {
        fetch(`http://localhost:3000/deleteGambar/${id}`, {
            method: "DELETE"
        })
            .then(data => {
                alert('data berhasil di delete!')
                window.location.reload()
            })
            .catch(err => alert(err))
    }

    const updateFuncGambar = (id) => {
        const wrapperId = document.getElementById('updateFormGambar')
        const closeFormGambar = document.getElementById('closeFormGambar')
        const updateForm = document.getElementById('formUpdateGambar')
        console.log(id)
        wrapperId.style.top = '50%'
        closeFormGambar.addEventListener('click', () => {
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
            if (!linkVal || !descVal || !katVal) {
                alert('Semua field harus diisi!');
                return;
            }
            fetch(`http://localhost:3000/updateGambar/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({linkGambar: linkVal, descGambar: descVal, kategori: katVal})
            })
            .then(res => {
                if (res.ok){
                    alert('data has been updated')
                    e.target.reset()
                    wrapperId.style.top = '-50%'
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
                        }}>Table Video</h3>
                    </div>
                    <div className="" style={{
                        maxHeight: '50vh',
                        overflowY: 'auto',
                    }}>
                        <table className="table table-responsive text-center">
                            <thead>
                                <tr className="sticky-top bg-dark-subtle">
                                    <th scope="col">No</th>
                                    <th scope="col">Link Video</th>
                                    <th scope="col">Deskripsi Video</th>
                                    <th scope="col">Kategori Kelas</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getGambar.map(data => {
                                    return (
                                        <tr className="w-100" key={data.id}>
                                            <th scope="row" >{data.id}</th>
                                            <td className="w-25">{data.linkGambar}</td>
                                            <td>{data.descGambar}</td>
                                            <td>{data.kategori}</td>
                                            <td className="">
                                                <button className="btn btn-success p-1 me-1" onClick={() => updateFuncGambar(data.id)}>Update</button>
                                                <button className="btn btn-danger p-1 ms-1" onClick={() => delFuncGambar(data.id)}>Delete</button>
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
                                <input type="text" className="form-control" aria-describedby="emailHelp" ref={linkRef}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Deskirpsi Gambar</label>
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

export default Videotable