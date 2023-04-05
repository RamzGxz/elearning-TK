import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";



const Home = () => {
    return (
        <div>
            <Header act1="active" />

            <Banner bannerWrapHeight='80vh'
                bannerMarginTop='7%'
                bannerWidth='100%'
                imageHeight='75vh'
                bannerClassWrapper = 'bannerHome'
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

            <div className="container m-auto">
                <div className="row justify-content-center align-items-center" style={{ marginRight: 0 }}>
                    <div className="col-12 col-sm-6 mb-4 mb-sm-0">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item vidHome1" src="https://www.youtube.com/embed/YOQwelXGhZs" title="Tahapan Kegiatan Akhir/ Penutup Pembelajaran di PAUD dan TK 》 Dengan contoh penerapan di kelas" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={'100%'} style={{
                                height: 345
                            }}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YOQwelXGhZs" title="Tahapan Kegiatan Akhir/ Penutup Pembelajaran di PAUD dan TK 》 Dengan contoh penerapan di kelas" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={'100%'} height={170} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YOQwelXGhZs" title="Tahapan Kegiatan Akhir/ Penutup Pembelajaran di PAUD dan TK 》 Dengan contoh penerapan di kelas" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={'100%'} height={170} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YOQwelXGhZs" title="Tahapan Kegiatan Akhir/ Penutup Pembelajaran di PAUD dan TK 》 Dengan contoh penerapan di kelas" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={'100%'} height={170} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YOQwelXGhZs" title="Tahapan Kegiatan Akhir/ Penutup Pembelajaran di PAUD dan TK 》 Dengan contoh penerapan di kelas" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={'100%'} height={170} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>



            <Footer />
        </div>
    )
}

export default Home

