import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

const Pembelajaran = () => {
    const [dataVideoHistory, setDataVideoHistory] = useState([])
    const [dataVideoPopuler, setDataVideoPopuler] = useState([])
    const history = 'history'
    const populer = 'populer'

    useEffect(() => {
        fetch(`http://localhost:3000/getVideoByCategory?category=${history}`)
            .then(res => res.json())
            .then(data => setDataVideoHistory(data))
            .catch((err) => console.log(err))
    }, [])


    useEffect(() => {
        fetch(`http://localhost:3000/getVideoByCategory?category=${populer}`)
            .then(res => res.json())
            .then(data => setDataVideoPopuler(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <Header act2="active" />

            <div className="justify-content-center align-items-center container wrapperPembelajaran" style={{
                marginTop: '5%'
            }}>
                <div className="title d-flex justify-content-between align-items-center">
                    <div>
                        <h4>History :</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <h4>More</h4>
                        <i className="fa-sharp fa-solid fa-forward px-2"></i>
                    </div>
                </div>

                <div className="row mt-4">
                    {dataVideoHistory.map(data => {
                        return (
                            <div className="col-sm-4">
                                <iframe width={'100%'} height={230} src={`${data.linkVideo}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="" style={{
                                    borderRadius: 10
                                }}/>
                            </div>
                        )
                    })}

                </div>

                <div className="p-3 bg-dark-subtle my-4" style={{
                    borderRadius: 10
                }}>
                    <div className="title d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <h4>Video Populer</h4>
                            <i className="fa-sharp fa-solid fa-forward px-2"></i>
                        </div>
                    </div>

                    <div className="row mt-3">
                        {dataVideoPopuler.map((data) => {
                            return (
                                <div className="col-sm-4">
                                    <iframe width={'100%'} height={230} src={`${data.linkVideo}`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{
                                        borderRadius: 10
                                    }}/>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
export default Pembelajaran