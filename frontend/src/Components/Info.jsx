import Header from "./Header";
import Footer from "./Footer";
// berdasarkan tutor digugel
import Calendar from 'react-calendar';

const Info = () => {
    const handleClick = () => {
        const isiBerita = document.querySelectorAll('.card-text')
        isiBerita.forEach(el => {
            el.style.maxHeight = el.style.maxHeight === '100%' ? '30vh' : '100%'
            el.style.overflow = el.style.maxHeight === '100%' ? 'visible' : 'hidden'
        });

        const button = document.querySelectorAll('.buttonSembunyi')
        button.forEach(el =>{
            console.log(el.textContent)
            if (el.textContent === 'Lanjutkan Membaca'){
                el.textContent = 'Sembunyikan'
            } else {
                el.textContent = 'Lanjutkan Membaca'
            }

        })
    };

    return (

        <div>
            <Header act3="active" />

            <section className="pt-5 text-center container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bolder">INFORMASI</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    </div>
                </div>
            </section>

            <div className="d-flex  justify-content-center align-items-center container beritaWrap" style={{ marginTop: '3%' }}>
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

                <aside className="d-flex justify-content-center flex-column calendar">
                    <h3 className="text-center mb-4">Kalender</h3>
                    {/* berdasarkan tutor gugel */}
                    <Calendar className="justify-content-center align-items-center" />
                </aside>
            </div>


            <section className="pt-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bolder">BERITA</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    </div>
                </div>
            </section>

            <section className="card-berita container mb-5 py-2">
                <div className="row">
                    <div className="col-sm-12 my-2">
                        <div className="card d-flex flex-row justify-content-between cardWrap" style={{
                            width: '100%'
                        }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold font-monospace">Special title treatment</h5>
                                <hr />
                                <p className="card-text" style={{
                                    maxHeight: '30vh',
                                    overflow: 'hidden'
                                }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non amet qui omnis ipsum eveniet nesciunt consectetur ea beatae, corrupti expedita placeat voluptatum vero rem? Quo molestiae excepturi eaque cupiditate sed odit, vero laborum nam corporis perspiciatis, quos perferendis ad quae, hic error! Facere praesentium doloremque fugit temporibus officiis id dolorum, aliquam eius nesciunt distinctio, incidunt necessitatibus labore ipsum pariatur expedita qui sint, sed quidem aperiam quae reiciendis dicta harum ad suscipit? Quae velit illo, ex nihil temporibus quo est architecto voluptatibus. Non sapiente iure cupiditate ratione cum exercitationem ab reprehenderit perferendis, autem nulla dolorum dignissimos! Velit ratione quod deserunt dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veritatis! Atque neque, veritatis alias reprehenderit nam ratione eveniet accusamus doloremque, ipsa aperiam, illum repellendus! Libero dolore animi a est consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem dolorem consequatur, sint quae commodi excepturi animi sed ducimus recusandae repellendus itaque, ab ipsa quos est odit quo! Voluptatem, sunt?</p>
                                <button href="#" className="btn btn-dark buttonSembunyi" onClick={handleClick}>Lanjutkan Membaca</button>
                            </div>

                            <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail m-2" alt="Ruang Kelas" width={500} />

                        </div>

                    </div>
                    <div className="col-sm-12 my-2">
                        <div className="card d-flex flex-row justify-content-between cardWrap" style={{
                            width: '100%'
                        }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold font-monospace">Special title treatment</h5>
                                <hr />
                                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non amet qui omnis ipsum eveniet nesciunt consectetur ea beatae, corrupti expedita placeat voluptatum vero rem? Quo molestiae excepturi eaque cupiditate sed odit, vero laborum nam corporis perspiciatis, quos perferendis ad quae, hic error! Facere praesentium doloremque fugit temporibus officiis id dolorum, aliquam eius nesciunt distinctio, incidunt necessitatibus labore ipsum pariatur expedita qui sint, sed quidem aperiam quae reiciendis dicta harum ad suscipit? Quae velit illo, ex nihil temporibus quo est architecto voluptatibus. Non sapiente iure cupiditate ratione cum exercitationem ab reprehenderit perferendis, autem nulla dolorum dignissimos! Velit ratione quod deserunt dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error quia eos accusamus autem sit accusantium earum esse doloremque quis rem animi minima fugiat provident porro itaque libero incidunt explicabo, minus dignissimos soluta. Est ullam temporibus dolorem, non voluptatem at corrupti doloremque tempore assumenda saepe voluptas, voluptate fuga ducimus omnis!</p>
                                <button href="#" className="btn btn-dark buttonSembunyi" onClick={handleClick}>Lanjutkan Membaca</button>
                            </div>

                            <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail m-2" alt="Ruang Kelas" width={500} />

                        </div>

                    </div>
                    <div className="col-sm-12 my-2">
                        <div className="card d-flex flex-row justify-content-between cardWrap" style={{
                            width: '100%'
                        }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold font-monospace">Special title treatment</h5>
                                <hr />
                                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non amet qui omnis ipsum eveniet nesciunt consectetur ea beatae, corrupti expedita placeat voluptatum vero rem? Quo molestiae excepturi eaque cupiditate sed odit, vero laborum nam corporis perspiciatis, quos perferendis ad quae, hic error! Facere praesentium doloremque fugit temporibus officiis id dolorum, aliquam eius nesciunt distinctio, incidunt necessitatibus labore ipsum pariatur expedita qui sint, sed quidem aperiam quae reiciendis dicta harum ad suscipit? Quae velit illo, ex nihil temporibus quo est architecto voluptatibus. Non sapiente iure cupiditate ratione cum exercitationem ab reprehenderit perferendis, autem nulla dolorum dignissimos! Velit ratione quod deserunt dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque commodi excepturi temporibus, voluptatum, facilis omnis aliquid adipisci tempore sint expedita voluptatem officia rem! Laboriosam eius recusandae distinctio praesentium ab architecto!</p>
                                <button href="#" className="btn btn-dark buttonSembunyi" onClick={handleClick}>Lanjutkan Membaca</button>
                            </div>

                            <img src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-thumbnail m-2" alt="Ruang Kelas" width={500} />

                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
export default Info