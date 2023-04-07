import { useEffect, useState } from "react"
import UpdateGambarForm from "./UpdateFormGambar"

const TableGambar = () => {
    const [getGambar, getDataGambar] = useState([])
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
        console.log(wrapperId)
        wrapperId.style.top = '50%'
        closeFormGambar.addEventListener('click', ()=>{
            wrapperId.style.top = '-50%'
        })

        updateForm.addEventListener('submit', ()=>{
            fetch(`http://localhost:3000/updateGambar/${id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        })

    }

    return (
        <div>
            <div className="tableWrapper container">
                <div className="tableGambar rounded-3" style={{
                    border: '1px solid black',
                }}>
                    <div className=" rounded-top-3 bg-primary-subtle">
                        <h3 className="text-center pt-1 pb-1" style={{
                            marginBottom: 0,
                            borderBottom: '1px solid black'
                        }}>Table Gambar</h3>
                    </div>
                    <div className="p-1" style={{
                        maxHeight: '50vh',
                        overflowY: 'auto',
                    }}>
                        <table className="table table-responsive text-center">
                            <thead>
                                <tr className="sticky-top bg-dark-subtle">
                                    <th scope="col">No</th>
                                    <th scope="col">Link Gambar</th>
                                    <th scope="col">Deskripsi Gambar</th>
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
            <UpdateGambarForm/>
        </div>
    )
}

export default TableGambar