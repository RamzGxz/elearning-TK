import Banner from "./Banner"
import Header from "./Header"
import SideBar from "./SideBar"

const AdminDasboard = () => {
    return (
        <div>
            <SideBar menuAct1='active' />
            <div style={{ marginLeft: 280 }}>
                <Banner bannerWrapHeight='75vh'
                    bannerMarginTop='0%'
                    bannerWidth='97%'
                    imageHeight='70vh'
                />

                <div className="body-admin w-100 vh-100 mt-2">
                    <div className="mx-2 bg-danger" style={{
                        width: '50%',
                        height: '100vh'
                    }}></div>
                                 
                    <div className="mx-2 bg-danger" style={{
                        width: '50%',
                        height: '100vh'
                    }}></div>                    
                </div>
            </div>
        </div>
    )
}

export default AdminDasboard