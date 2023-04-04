import Banner from "./Banner"
import Header from "./Header"
import SideBar from "./SideBar"

const AdminDasboard = () => {
    return (
        <div>
            <SideBar menuAct1='active' />
            <div style={{ paddingLeft: 285 }} className="content">
                <Banner bannerWrapHeight='75vh'
                    bannerMarginTop='0%'
                    bannerWidth='97%'
                    imageHeight='70vh'
                />

                <div className="body-admin w-100 my-3 container d-grid">
                    <div className="row g-3" style={{

                    }}>
                        <div className="col col-lg-6 col-sm-12 " style={{ height: '80vh' }}>
                            <div className="rounded-3 d-flex align-items-center flex-column text-capitalize" style={{ height: '80vh', backgroundColor: '#f08080' }}>
                                <div className="pict rounded-circle shadow-lg mt-4" style={{
                                    width: 150,
                                    height: 150,
                                    backgroundImage: 'url(https://imgsrv2.voi.id/qrcII-WiGXBglYBS8X8f5x2v2aohHRLzI760ONcbKRM/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81NTI2Mi8yMDIxMDUzMTA4NDYtbWFpbi5jcm9wcGVkXzE2MjI0MjU2MDIuanBn.jpg)',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}></div>

                                <div className="name mt-3 d-flex justify-content-center align-items-center rounded-5" style={{
                                    height: '4vh',
                                    backgroundColor: '#ffdab9',
                                    width: '70%'
                                }}>
                                    <h5 style={{
                                        marginBottom: 0
                                    }} className="fw-bolder">Yoona Savirah Kholid</h5>
                                </div>

                                <div className="address mt-3 d-flex justify-content-center align-items-center rounded-5" style={{
                                    height: '4vh',
                                    backgroundColor: '#ffdab9',
                                    width: '70%'
                                }}>
                                    <h5 style={{
                                        marginBottom: 0
                                    }} className="fw-bolder">Seoul, South Korea</h5>
                                </div>

                                <div className="age mt-3 d-flex justify-content-center align-items-center rounded-5" style={{
                                    height: '4vh',
                                    backgroundColor: '#ffdab9',
                                    width: '70%'
                                }}>
                                    <h5 style={{
                                        marginBottom: 0
                                    }} className="fw-bolder">27</h5>
                                </div>

                                <div className="division mt-3 d-flex justify-content-center align-items-center rounded-5" style={{
                                    height: '4vh',
                                    backgroundColor: '#ffdab9',
                                    width: '70%'
                                }}>
                                    <h5 style={{
                                        marginBottom: 0
                                    }} className="fw-bolder">Teacher</h5>
                                </div>

                                <div className="class mt-3 d-flex justify-content-center align-items-center rounded-5" style={{
                                    height: '4vh',
                                    backgroundColor: '#ffdab9',
                                    width: '70%'
                                }}>
                                    <h5 style={{
                                        marginBottom: 0
                                    }} className="fw-bolder">TK-A TK-B</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-sm-12" style={{ height: '80vh' }}>
                            <div className="rounded-3 d-flex align-items-center flex-column" style={{ height: '80vh', backgroundColor: '#ffdab9' }}>
                                <div className="title mt-5 rounded-5 d-flex justify-content-center align-items-center" style={{
                                    height: '5vh',
                                    backgroundColor: '#f08080',
                                    width: '70%'
                                }}>
                                    <h4 style={{
                                        marginBottom: 0
                                    }} className="fw-bolder">STATUS</h4>
                                </div>

                                <div className="body mt-5 rounded-3" style={{
                                    height: '60vh',
                                    backgroundColor: '#f08080',
                                    width: '70%'
                                }}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="traffic container my-5">
                    <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/GBP-USD%20(1).png" alt="" style={{
                        width: '100%',
                        height: '70vh'
                    }} />
                </div>
            </div>
        </div>
    )
}

export default AdminDasboard