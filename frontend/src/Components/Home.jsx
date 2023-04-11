import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { useEffect, useState } from "react";



const Home = () => {

    const [dataVideo, setDataVideo] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/getVideo')
            .then(res => res.json())
            .then(data => setDataVideo(data))
            .catch((err) => console.log(err))
    })

    return (
        <div>
            <Header act1="active" />

            <Banner bannerWrapHeight='80vh'
                bannerMarginTop='7%'
                bannerWidth='100%'
                imageHeight='75vh'
                bannerClassWrapper='bannerHome'
            />

            <div className="icon w-100 bg-dark d-flex justify-content-center align-items-center mt-5 mb-5" style={{
                height: '10vh'
            }}>
                <div className="i1 d-flex justify-content-center align-items-center" style={{
                    width: '25%'
                }}> <a href="">
                        <i className="fa-brands fa-youtube text-white" style={{
                            fontSize: 60
                        }} />
                    </a>
                </div>
                <div className="i2 d-flex justify-content-center align-items-center" style={{
                    width: '25%'
                }}>
                    <a href="">
                        <i className="fa-solid fa-image text-white" style={{
                            fontSize: 60
                        }} />
                    </a>
                </div>
                <div className="i3 d-flex justify-content-center align-items-center" style={{
                    width: '25%'
                }}>
                    <a href="">
                        <i className="fa-solid fa-circle-info text-white" style={{
                            fontSize: 60
                        }} />
                    </a>
                </div>
            </div>
            <section className="text-center container py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bolder">VIDEOS</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ marginRight: 0 }}>
                    {dataVideo.map((data) => {
                        return (
                            <div className="col-sm-12 col-lg-6 pe-0">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={`${data.linkVideo}`} title={`${data.descVideo}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={'100%'} height={300} style={{
                                        borderRadius: 10
                                    }} />
                                </div>
                            </div>
                        )
                    })}
                </div></div>



            <Footer />
        </div>
    )
}

export default Home

