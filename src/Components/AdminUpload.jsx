import SideBar from "./SideBar"

const AdminUpload = () =>{
    return(
        <div style={{
            paddingLeft: 285
        }}>
            <SideBar menuAct2 = 'active'/>
            
            <div className="titleWrap w-100 d-flex justify-content-center align-items-center" style={{
                height: '15vh'
            }}>
                <h2>Upload Content</h2>
            </div>
        </div>
    )
}

export default AdminUpload