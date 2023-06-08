import SideBar from "./SideBar"


const AdminEditProfile = () => {
    return (
        <div style={{
            paddingLeft: 280
        }} className="contentAdmin">
            <SideBar menuAct3='active' />
            <div className="container py-3">
                <div className="w-100 d-flex align-items-center flex-column rounded-3" style={{
                    height: 'vh',
                    border: '1px solid black',
                }}>
                    <div className="w-100 rounded-top-3" style={{
                        height: '3vh',
                        borderBottom: '1px solid black',
                        backgroundColor: '#0d6efd'
                    }}>
                    </div>

                    <div className="bg-light p-2 mt-4 mb-2 rounded-circle" style={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                    }}>
                        <div className="pictDasboard rounded-circle" style={{
                            width: 150,
                            height: 150,
                            backgroundImage: 'url(https://imgsrv2.voi.id/qrcII-WiGXBglYBS8X8f5x2v2aohHRLzI760ONcbKRM/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81NTI2Mi8yMDIxMDUzMTA4NDYtbWFpbi5jcm9wcGVkXzE2MjI0MjU2MDIuanBn.jpg)',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}></div>
                    </div>

                    <h5 style={{
                        marginBottom: 0
                    }} className="fw-bolder mt-2 text-capitalize">Yoona Savirah Kholid</h5>

                    <div className="d-flex justify-content-center container align-items-center w-100 mt-3 mb-3">
                        <i className="fa-solid fa-map-location-dot fs-5 " />
                        <h5 className="fw-bolder ms-2" style={{ marginBottom: 0 }}>Seoul, South Korea</h5>
                    </div>

                    <div className="w-100 d-flex justify-content-center align-items-center" style={{
                        height: '7vh',
                        borderTop: '1px solid black'
                    }}>
                        <a href="" className="text-black mx-2">
                            <i className="fa-brands fa-square-instagram fs-1 sosLink" />
                        </a>
                        <a href="" className="text-black mx-2">
                            <i className="fa-brands fa-square-twitter fs-1 sosLink" />
                        </a>
                        <a href="" className="text-black mx-2">
                            <i className="fa-brands fa-square-facebook fs-1 sosLink" />
                        </a>
                        <a href="" className="text-black mx-2">
                            <i className="fa-brands fa-square-snapchat fs-1 sosLink" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container pb-3">
                <div className="w-100 d-flex align-items-center flex-column rounded-3" style={{
                    height: 'auto',
                    border: '1px solid black',
                }}>
                    <div className="w-100 rounded-top-3" style={{
                        height: '3vh',
                        borderBottom: '1px solid black',
                        backgroundColor: '#0d6efd'
                    }}>
                    </div>

                    <div className="container py-3 d-flex align-items-center flex-column">
                        <div className="w-100" style={{ backgroundColor: '#f72585' }}></div>
                        <div className=" w-100 rounded-3" style={{
                            height: 'auto',
                            border: '1px solid black',
                            backgroundColor: '#cfe2ff'
                        }}>
                            <div className="w-100 rounded-top-3 d-flex align-items-center titleUpdate" style={{
                                height: '4vh',
                                backgroundColor: '#efb8e0',
                                borderBottom: '1px solid black'
                            }}>
                                <div className="px-1 mx-1 p-0" style={{
                                    borderRight: '1px solid black'
                                }}>
                                    <h5 style={{ marginBottom: 0, fontWeight: 700 }} className="Thover active">Personal Details</h5>
                                </div>

                                <h5 style={{
                                    marginBottom: 0
                                }} className="px-2 Thover">Change Picture</h5>
                            </div>

                            <div className="container">
                                <div className="w-100 d-flex py-3 formUpdate">
                                    <div className="d-flex align-items-Center pe-2 updateCol" style={{ width: '50%' }}>
                                        <form className="w-100" action="">
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" id="" placeholder="example: razi" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Age</label>
                                                <input type="number" className="form-control" id="" placeholder="example: 21" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Address</label>
                                                <input type="text" className="form-control" id="" placeholder="example: Jln. Kedungwungu No.xx " />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email address</label>
                                                <input type="text" className="form-control" id="" placeholder="example: razi@xxx.xxx" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Phone Number</label>
                                                <input type="number" className="form-control" id="" placeholder="example: 08xxxxxxxxx" />
                                            </div>
                                            <div className="d-flex w-100 justify-content-end align-items-center">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="align-items-Center ps-2 d-flex updateCol" style={{ width: '50%' }}>
                                        <form className="w-100" action="">
                                            <h3>Change Password</h3>
                                            <div className="mb-3">
                                                <label className="form-label">Old Password</label>
                                                <input type="password" className="form-control" id="" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">New Password</label>
                                                <input type="password" className="form-control" id="" />
                                            </div>
                                            <div className="d-flex w-100 justify-content-end align-items-center">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEditProfile