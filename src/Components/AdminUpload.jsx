import SideBar from "./SideBar"

const AdminUpload = () =>{
    return(
        <div style={{
            paddingLeft: 280
        }}>
            <SideBar menuAct2 = 'active'/>
            
            <div className="titleWrap w-100 d-flex justify-content-center align-items-center" style={{
                height: '15vh'
            }}>
                <h2>Upload Content</h2>
            </div>

            <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                height: '55vh'
            }}>
                <div className="my-2 w-100" style={{
                    height: '55vh',
                    border: '1px solid black',
                    borderRadius: 5
                }}>
                    <div className="w-100 bg-primary-subtle d-flex align-items-center" style={{
                        height: '7vh',
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5
                    }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUpload