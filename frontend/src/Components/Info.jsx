import Header from "./Header";
import Footer from "./Footer";
// berdasarkan tutor digugel
import Calendar from 'react-calendar';

const Info = () => {
    return (

        <div>
            <Header act3="active" />

            <div className="atas">
                <h1>INFORMASI</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim in dolores eius officiis omnis est commodi optio quo deserunt inventore id harum adipisci eos similique minima quia nemo repellendus cum, sint consequuntur et rem fugiat! Nostrum, doloremque minima commodi a optio sint provident culpa alias, soluta cupiditate saepe modi. Corrupti officia aspernatur quae assumenda! Vel nisi nobis vero alias adipisci corrupti repellendus minima sed obcaecati distinctio in consequuntur architecto debitis, quod esse unde ut ipsum laborum! Sed consequuntur neque reprehenderit culpa accusantium id eaque officiis, quo non illo sint omnis voluptas! Labore corrupti corporis reprehenderit vitae vel quia mollitia!</p>
                </div>
            </div>
            <section>
                <h3>Galeri</h3>
                <div className="galeri">
                    <div>
                        <img src="https://unsplash.com/photos/OVDtgUhUPBY" alt="" />
                    </div>
                    <div>
                        <img src="tk2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="tk3.jpg" alt="" />
                    </div>
                    <div>
                        <img src="tk4.jpg" alt="" />
                    </div>
                </div>
            </section>

            <aside>
                <h3>Kalender</h3>
                {/* berdasarkan tutor gugel */}
                <Calendar />
            </aside>

            <Footer/>
        </div>
    )
}
export default Info