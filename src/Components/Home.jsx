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

            <div className="mb-5 flex-sm-column">
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

