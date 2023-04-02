import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <Header act1="active" />

            <div className="d-flex justify-content-center align-items-center bg-dark-subtle w-100 mt-5" style={{ height: '80vh' }}>

                <div id="carouselExampleAutoplaying" className="carousel slide d-flex justify-content-between align-items-center container" data-bs-ride="carousel" style={{
                    width: '100%',
                    height: '75vh'
                }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/src/Assets/wallpaper-kartun-tk.webp" className="rounded-3" style={{ width: '100%', height: '75vh' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn0-production-images-kly.akamaized.net/LnwORZA-w3TWaSf5m5vpdZH5WQU=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2975416/original/005140100_1574444390-ANAK_TK-Ridlo.jpg" className="rounded-3" style={{ width: '100%', height: '75vh' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.ibudanbalita.com/uploads/posts/pTGNHGaudX.jpg" className="rounded-3" style={{ width: '100%', height: '75vh' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div>
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
                        }}/>
                    </a>
                </div>
            </div>

            <div className="mb-5">
                <div className="d-flex w-100 container h-100 gap-5">
                    <div className="vid1 w-50">
                        <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/JKH_iUiMWSk" title="Anak Paud Belajar di Kelas PG dan TK ✿ Daily Playgroup School Learning Indonesia - Hana Family" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>

                    <div className="vidWrapperSamping w-50 flex-column">
                        <div className="w-100 d-flex gap-5 mb-3">
                            <div className="vid2 w-50">
                                <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/83BDo8-1hQs" title="Senam Sehat Gembira, Paud Anggrek." frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>

                            <div className="vid3 w-50">
                                <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/3OP0Qa2agtM" title="DiAJAKIN PAPS AQILLA BERMAIN SEPUASNYA. WAJIB KESINI KALO MAIN KE PINRANG" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>
                        </div>

                        <div className=" w-100 d-flex gap-5 mt-3">
                            <div className="vid4 w-50">
                                <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/3OP0Qa2agtM" title="DiAJAKIN PAPS AQILLA BERMAIN SEPUASNYA. WAJIB KESINI KALO MAIN KE PINRANG" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>

                            <div className="vid5 w-50">
                                <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/3OP0Qa2agtM" title="DiAJAKIN PAPS AQILLA BERMAIN SEPUASNYA. WAJIB KESINI KALO MAIN KE PINRANG" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home