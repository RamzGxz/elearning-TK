const Banner = (props) => {
    return (
        <div className={`d-flex justify-content-center align-items-center w-100 ${props.bannerClassWrapper} `} style={{ height: props.bannerWrapHeight, marginTop: props.bannerMarginTop }}>

            <div id="carouselExampleAutoplaying" className={`carousel slide d-flex justify-content-between align-items-center container ${props.bannerClassWrapper}`} data-bs-ride="carousel" style={{
                width: props.bannerWidth,
                height: props.imageHeight
            }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/src/Assets/wallpaper-kartun-tk.webp" className={`rounded-3 ${props.bannerClassWrapper}`} style={{ width: '100%', height: props.imageHeight }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn0-production-images-kly.akamaized.net/LnwORZA-w3TWaSf5m5vpdZH5WQU=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2975416/original/005140100_1574444390-ANAK_TK-Ridlo.jpg" className={`rounded-3 ${props.bannerClassWrapper}`} style={{ width: '100%', height: props.imageHeight }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.ibudanbalita.com/uploads/posts/pTGNHGaudX.jpg" className={`rounded-3 ${props.bannerClassWrapper}`} style={{ width: '100%', height: props.imageHeight }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <div className="buttonSlide">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Banner