const PageLogin = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 quote-section">
                        <blockquote className="blockquote">
                            <p className="blockquote-text">Faith is not belief without proof, but trust without reservation</p>
                            <footer className="blockquote-footer">D. Elton Trueblood</footer>
                        </blockquote>
                    </div>
                    <div className="col-sm-6 form-section">
                        <div className="login-wrapper text-center">
                            <img src="assets/images/profile-img.jpg" alt className="login-img" />
                            <form action="#!">
                                <div className="form-group">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Email address" fdprocessedid="4ut9mu" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="*************" fdprocessedid="2aolnm" />
                                </div>
                                <input name="login" id="login" className="btn btn-block login-btn" type="button" defaultValue="LOGIN" fdprocessedid="lrgkcm" />
                            </form>
                            <a href="#!" className="forgot-password-link">Forgot Your Password?</a>
                            <p className="login-wrapper-footer-text">Need an account? <a href="#!" className="text-reset">Signup here</a></p>
                        </div>
                        <footer>
                            <nav className="footer-nav">
                                <a href="#!">Terms of use.</a>
                                <a href="#!">Privacy policy</a>
                            </nav>
                        </footer>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PageLogin