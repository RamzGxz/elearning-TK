import Header from "./Header";
import Footer from "./Footer";
// berdasarkan tutor digugel
import Calendar from 'react-calendar';

const Info = () => {
    return (

        <div>
            <Header act3="active" />

            <div className="justify-content-center align-items-center container wrapperInfo bg-blue" style={{marginTop: '10%'}}>
                <h1 className="text-center pb-5">INFORMASI</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim in dolores eius officiis omnis est commodi optio quo deserunt inventore id harum adipisci eos similique minima quia nemo repellendus cum, sint consequuntur et rem fugiat! Nostrum, doloremque minima commodi a optio sint provident culpa alias, soluta cupiditate saepe modi. Corrupti officia aspernatur quae assumenda! Vel nisi nobis vero alias adipisci corrupti repellendus minima sed obcaecati distinctio in consequuntur architecto debitis, quod esse unde ut ipsum laborum! Sed consequuntur neque reprehenderit culpa accusantium id eaque officiis, quo non illo sint omnis voluptas! Labore corrupti corporis reprehenderit vitae vel quia mollitia!</p>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center container wrapperKegiatan" style={{marginTop: '5%'}}>
                <section className="w-70">
                    <h3 className="text-center p-3">Galeri</h3>
                    <div className="galeri container">
                        <div>
                            <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail" alt="Ruang Kelas" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1564429238817-393bd4286b2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="img-thumbnail" alt="Balok Angka dan Huruf" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail" alt="Anak - Anak Sedang Rekreasi" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1588072432686-b2bc721308cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" className="img-thumbnail" alt="Anak - Anak Sedang Melakukan Kegiatan Menggambar" />
                        </div>
                    </div>
                </section>

                <aside className="w-25">
                    <h3 className="text-center pb-3">Kalender</h3>
                    {/* berdasarkan tutor gugel */}
                    <Calendar className="justify-content-center align-items-center" />
                </aside>
            </div>

            <Footer/>
        </div>
    )
}
export default Info