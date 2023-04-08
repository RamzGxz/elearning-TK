import Header from "./Header";
import Footer from "./Footer";
// berdasarkan tutor digugel
import Calendar from 'react-calendar';

const Info = () => {
    return (

        <div>
            <Header act3="active" />

            <div className="justify-content-center align-items-center container" style={{ marginTop: '10%' }}>
                <h1 className="text-center pb-5">INFORMASI</h1>
                <div>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim in dolores eius officiis omnis est commodi optio quo deserunt inventore id harum adipisci eos similique minima quia nemo repellendus cum, sint consequuntur et rem fugiat! Nostrum, doloremque minima commodi a optio sint provident culpa alias, soluta cupiditate saepe modi. Corrupti officia aspernatur quae assumenda! Vel nisi nobis vero alias adipisci corrupti repellendus minima sed obcaecati distinctio in consequuntur architecto debitis, quod esse unde ut ipsum laborum! Sed consequuntur neque reprehenderit culpa accusantium id eaque officiis, quo non illo sint omnis voluptas! Labore corrupti corporis reprehenderit vitae vel quia mollitia!</p>
                </div>
            </div>

            <div className="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center align-items-center container" style={{ marginTop: '5%' }}>
                <section className="w-100 mx-3">
                    <h3 className="text-center mb-4">Galeri</h3>
                    <div className="galeri row">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-6">
                                <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail" alt="Ruang Kelas" />
                            </div>
                            <div className="col-lg-6 col-sm-12 col-md-6">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6 col-md-6">
                                        <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail" alt="Ruang Kelas" />
                                    </div>
                                    <div className="col-sm-12 col-lg-6 col-md-6">
                                        <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail" alt="Ruang Kelas" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6 col-md-6">
                                        <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail" alt="Ruang Kelas" />
                                    </div>
                                    <div className="col-sm-12 col-lg-6 col-md-6">
                                        <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail" alt="Ruang Kelas" />
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </section>

                <aside className="d-flex justify-content-center flex-column">
                    <h3 className="text-center mb-4">Kalender</h3>
                    {/* berdasarkan tutor gugel */}
                    <Calendar className="justify-content-center align-items-center" />
                </aside>
            </div>

            <Footer />
        </div>
    )
}
export default Info