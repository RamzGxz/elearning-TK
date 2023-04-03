import Header from "./Header"
import SideBar from "./SideBar"

const AdminDasboard = () => {
    return (
        <div>
            <Header act4='active'/>
            <SideBar sideact1= 'active'/>
            <div className="overflow-auto" style={{
                position: 'fixed',
                top: 69,
                right: 0,
                width: '88%',
                maxHeight: '91vh',
                backgroundColor: 'grey'
            }}>
                <div className="banner w-100 container" style={{
                    height: '20vh'
                }}>
                    
                </div>
            </div>
        </div>
    )
}

export default AdminDasboard