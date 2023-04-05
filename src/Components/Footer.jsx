const Footer = () => {

    return (
        <div className="mt-3">
            <div className="">
                <footer className="text-center text-black bg-primary-subtle">
                    <div className="container">
                        <section className="mt-5">
                            <div className="row text-center d-flex justify-content-center pt-5">

                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-black">About us</a>
                                    </h6>
                                </div>


                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-black">Products</a>
                                    </h6>
                                </div>


                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-black">Awards</a>
                                    </h6>
                                </div>


                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-black">Help</a>
                                    </h6>
                                </div>


                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <a href="#!" className="text-black">Contact</a>
                                    </h6>
                                </div>
                            </div>

                        </section>
                        <hr className="my-5" />
                        <section className="mb-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                        distinctio earum repellat quaerat voluptatibus placeat nam,
                                        commodi optio pariatur est quia magnam eum harum corrupti
                                        dicta, aliquam sequi voluptate quas.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="text-center mb-5">
                            <a href className="text-black me-4">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href className="text-black me-4">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href className="text-black me-4">
                                <i className="fab fa-google" />
                            </a>
                            <a href className="text-black me-4">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href className="text-black me-4">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href className="text-black me-4">
                                <i className="fab fa-github" />
                            </a>
                        </section>
                    </div>

                    <div className="text-center p-3 bg-dark-subtle text-white">
                        © 2020 Copyright:
                        <a className=" text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer