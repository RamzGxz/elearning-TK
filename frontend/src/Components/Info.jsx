import Header from "./Header";
import Footer from "./Footer";
// berdasarkan tutor digugel
import Calendar from 'react-calendar';
import { useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css'
import axios from "axios";

const Info = ({isLoggin, setIsloggin}) => {
    const handleClick = () => {
        const isiBerita = document.querySelectorAll('.card-text')
        isiBerita.forEach(el => {
            el.style.maxHeight = el.style.maxHeight === '100%' ? '30vh' : '100%'
            el.style.overflow = el.style.maxHeight === '100%' ? 'visible' : 'hidden'
        });

        const button = document.querySelectorAll('.buttonSembunyi')
        button.forEach(el => {
            console.log(el.textContent)
            if (el.textContent === 'Lanjutkan Membaca') {
                el.textContent = 'Sembunyikan'
            } else {
                el.textContent = 'Lanjutkan Membaca'
            }

        })
    }

    const [dataBerita, setDataBerita] = useState([])
    const getBerita = async()=>{
        try {
            const res = await axios('http://localhost:3000/getDataBerita')
            const data = res.data
            setDataBerita(data)
        } catch (error) {
            console.log(error)
        }
    }

    const [dataGambar, setDataGambar] = useState([])
    const getGambarFunc = async () =>{
        try {
            const res = await axios('http://localhost:3000/getGambar')
            const data = res.data
            setDataGambar(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getBerita()
        getGambarFunc()
    }, [])
    return (

        <div>
            <Header act3="active" isLoggin={isLoggin} setIsloggin={setIsloggin}/>

            <section className="pt-5 text-center container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bolder">INFORMASI</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    </div>
                </div>
            </section>

            <div className="d-flex  justify-content-center align-items-center container beritaWrap flex-column" style={{ marginTop: '3%' }}>
                <section className="w-100 d-flex flex-column justify-content-center">
                    <h3 className="text-center mb-4">Galeri</h3>
                    <div className="galeri row w-100 d-flex justify-content-center">
                        {dataGambar.map((item) => {
                            return (
                                <div className="col-lg-3 col-sm-12" key={item._id}>
                                    <img src={`${item.link}`} className="img-thumbnail mx-2" alt={`${item.description}`} style={{
                                        width: '100%',
                                        height: '300px'
                                    }} />
                                </div>
                            )
                        })}

                    </div>
                </section>

                <aside className="d-flex justify-content-start align-items-center flex-column calendar mt-5">
                    <h3 className="text-center mb-4">Kalender</h3>
                    <Calendar className={`w-100 p-5 fs-4`} />
                </aside>
            </div>


            <section className="pt-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bolder">BERITA</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    </div>
                </div>
            </section>

            <section className="card-berita container mb-5 py-2">
                <div className="row">
                    {dataBerita.map((item => {
                        return (
                            <div className="col-sm-12 my-2">
                                <div className="card d-flex flex-row justify-content-between cardWrap" style={{
                                    width: '100%'
                                }}>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold font-monospace">{item.judul}</h5>
                                        <hr />
                                        <p className="card-text" style={{
                                            maxHeight: '30vh',
                                            overflow: 'hidden'
                                        }}>{item.isi}</p>
                                        <button href="#" className="btn btn-dark buttonSembunyi" onClick={handleClick}>Lanjutkan Membaca</button>
                                    </div>

                                    <img src={`${item.foto}`} className="img-thumbnail m-2" alt="Ruang Kelas" width={500} />

                                </div>
                            </div>
                        )
                    }))}

                </div>
            </section>

            <Footer isLogin={isLoggin}/>
        </div>
    )
}
export default Info