import { useState, useEffect } from "react"


const Banner = (props) => {
    const [dataBerita, setDataBerita] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/getDataBerita')
            .then(res => res.json())
            .then(data => {
                setDataBerita(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={`d-flex justify-content-center align-items-center w-100 ${props.bannerClassWrapper} `} style={{ height: props.bannerWrapHeight, marginTop: props.bannerMarginTop }}>

            <div id="carouselExampleAutoplaying" className={`carousel slide d-flex justify-content-between align-items-center container ${props.bannerClassWrapper}`} data-bs-ride="carousel" style={{
                width: props.bannerWidth,
                height: props.imageHeight
            }}>
                <div className="carousel-inner">
                    {dataBerita.map((data) => {
                        return (
                            <div className="carousel-item active">
                                <img src={`${data.fotoBerita}`} alt={`${data.judulBerita}`} className={`rounded-3 ${props.bannerClassWrapper}`} style={{ width: '100%', height: props.imageHeight }} />
                                <div className="carousel-caption d-md-block" style={{}}>
                                    <h3 className="fw-bolder">{data.kategori}</h3>
                                    <p className="fw-bolder">{data.judulBerita}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="buttonSlide">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Banner