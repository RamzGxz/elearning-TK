import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import FormUpdate from "./FormUpdate"
const GambarTable = () => {
    const [getGambar, getDataGambar] = useState([])
    const [updated, setUpdated] = useState(false)

    const getGambarFunc = async () => {
        try {
            const res = await axios.get('http://localhost:3000/getGambar')
            const data = res.data
            getDataGambar(data)
            setUpdated(!updated)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getGambarFunc()
    }, [updated])

    const delFuncGambar = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/deleteGambar/${id}`)
            alert(`data dengan id: ${id} berhasil di delete`)
            setUpdated(!updated)
        } catch (error) {
            console.log(error)
        }
    }

    // state untuk update
    const [linkGet, setLinkget] = useState('')
    const [desc, setDesc] = useState('')
    const [cat, setCat] = useState('')
    const [idData, setIdData] = useState('')

    const updateFuncGambar = (_id, link, description, category) => {
        setLinkget(link)
        setDesc(description)
        setCat(category)
        setIdData(_id)

        const wrapperId = document.getElementById('updateFormGambar')
        const closeFormGambar = document.getElementById('closeFormGambar')
        wrapperId.style.top = '50%'
        closeFormGambar.addEventListener('click', () => {
            wrapperId.style.top = '-50%'
            setLinkget('')
            setDesc('')
            setCat('')
            setIdData('')
        })
    }

    return (
        <div>
            <div className="tableWrapper container my-3">
                <div className="tableGambar rounded-3" style={{
                    border: '1px solid black',
                }}>
                    <div className=" rounded-top-3 bg-primary-subtle">
                        <h3 className="text-center pt-1 pb-1" style={{
                            marginBottom: 0,
                            borderBottom: '1px solid black'
                        }}>Table Gambar</h3>
                    </div>
                    <div className="" style={{
                        maxHeight: '50vh',
                        overflowY: 'auto',
                    }}>
                        <table className="table table-responsive table-sm">
                            <thead>
                                <tr className="sticky-top bg-dark-subtle text-center">
                                    <th scope="col">No</th>
                                    <th scope="col" className="linkTable">Link Gambar</th>
                                    <th scope="col" className="text-center">Deskripsi Gambar</th>
                                    <th scope="col">Kategori Kelas</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getGambar.map((item, data) => {

                                    return (
                                        <tr className="w-100" key={item._id}>
                                            <th scope="row" className="text-center">{data + 1}</th>
                                            <td className="linkTable">{item.link}</td>
                                            <td className="text-center">{item.description}</td>
                                            <td className="text-center">{item.category}</td>
                                            <td className=" text-center">
                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button className="btn btn-outline-success btn-sm rounded-0 rounded-start" onClick={() => updateFuncGambar(item._id, item.link, item.description, item.category)}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm rounded-0 rounded-end" onClick={() => delFuncGambar(item._id)}>
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <FormUpdate _id={idData} catGet={cat} descGet={desc} linkGet={linkGet} idForm={'updateFormGambar'} updateFunc={setUpdated} routes={'updateGambar'} wrapperId={'updateFormGambar'} closeButtonId={'closeFormGambar'} updated={updated} />
        </div>
    )
}

export default GambarTable