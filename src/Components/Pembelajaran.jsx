import Header from "./Header";
import Footer from "./Footer";
const Pembelajaran = () =>{
    return(
        
        <div>
             <Header act1="active" />

              <div className="pg_pembelajaran justify-content-center align-items-center ">
                 <h1 className="text-center m-3">video Pembelajaran</h1>
                <div className="history">
                    <div className="d-flex justify-content-between m-3">
                        <h2>History </h2>
                        <h2>more</h2>
                    </div>
                    <div className="d-flex row row-cols-3 ">
                        <div className="gap-5">
                            <div className="histor  gap-4 m-3">
                            <iframe width={'100%'} height={'100%'}src="https://www.youtube.com/embed/rbIT554Hc7w" title="Omar &amp; Hana | Koleksi Lagu-Lagu Omar &amp; Hana | Tolong Mama Papa &amp; Lain-Lain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="gap-5">
                            <div className="histor  gap-4 m-3">
                            <iframe width={'100%'} height={'100%'}src="https://www.youtube.com/embed/rbIT554Hc7w" title="Omar &amp; Hana | Koleksi Lagu-Lagu Omar &amp; Hana | Tolong Mama Papa &amp; Lain-Lain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="gap-5">
                            <div className="histor  gap-4 m-3">
                            <iframe width={'100%'} height={'100%'}src="https://www.youtube.com/embed/rbIT554Hc7w" title="Omar &amp; Hana | Koleksi Lagu-Lagu Omar &amp; Hana | Tolong Mama Papa &amp; Lain-Lain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vpopuler">
                    <div className="d-flex justify-content-between m-3">
                        <h2>vidio populer </h2>
                        <h2>more</h2>
                    </div>
                    <div className="d-flex row row-cols-3 ">
                        <div className="gap-5">
                            <div className="histor  gap-4 m-3">
                            <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/U_cc8aCkEwk" title="Video Pembelajaran Tema Tanaman - Sub Tema Tanaman Buah untuk PAUD / TK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="gap-5">
                            <div className="histor  gap-4 m-3">
                            <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/U_cc8aCkEwk" title="Video Pembelajaran Tema Tanaman - Sub Tema Tanaman Buah untuk PAUD / TK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="gap-5">
                            <div className="histor  gap-4 m-3">
                            <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/U_cc8aCkEwk" title="Video Pembelajaran Tema Tanaman - Sub Tema Tanaman Buah untuk PAUD / TK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
     </div>   
    )
}
export default Pembelajaran