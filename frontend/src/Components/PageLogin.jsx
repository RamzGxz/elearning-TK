import { useState } from "react"

const PageLogin = () => {
    const [username, setusername] = useState('');
    const [pass, setpass] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, pass }),
        })
            .then(res => {
                if (res.ok) {
                    console.log(res.status)
                    alert('login berhasil')
                    location.href = '/'
                } else if (res.status === 401) {
                    alert('Username atau password salah')
                } else {
                    console.log(res.status);
                    alert('Terjadi kesalahan pada server')
                }
            })
            .catch(error => {
                console.error('Terjadi kesalahan saat melakukan fetch:', error);
                alert('Terjadi kesalahan saat melakukan fetch');
            });
    }

    return (
        <div>
            <div className="">
                <div className="d-flex wrapperLogin">
                    <div className="quotes d-flex align-items-center justify-content-center" style={{
                        width: '50%'
                    }}>
                        <blockquote className="w-50 ">
                            <p className="fs-5 fw-bolder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cum fugiat odio dolor delectus ab illo ad quis rem quidem!</p>
                            <p className="fs-5">- Yoona Savirah Kholid</p>
                        </blockquote>
                    </div>
                    <div className="loginForm d-flex flex-column py-3 justify-content-center align-items-center" style={{
                        width: '50%',
                        height: '100vh'
                    }}>
                        <i className="fas fa-cubes fa-2x mb-4" style={{ color: '#ff6219', fontSize: 100 }} />
                        <form className=" w-50" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username" className="form-control py-3 mb-4 px-4" style={{
                                borderRadius: '30px'
                            }} id="usernameLogin" value={username} onChange={(e) => setusername(e.target.value)} />
                            <input type="password" placeholder="Password" className="form-control py-3 mb-4 px-4" style={{
                                borderRadius: '30px'
                            }} id="passLogin" value={pass} onChange={(e) => setpass(e.target.value)} />
                            <button className="btn btn-dark w-100 fs-3 fw-bolder" style={{
                                borderRadius: '30px'
                            }} type="submit">LOGIN</button>
                            <p className="fs-6 text-black-50 text-center mt-4">Lupa Password? <a href="">Hubungi Developer</a></p>
                        </form>

                        <div style={{
                            marginTop: '20%'
                        }} className="d-flex fle">
                            © 2020 Copyright:
                            <a className=" text-black text-decoration-underline mx-2" href="">Yoona</a>
                        </div>
                        <a href="/" className="btn btn-outline-primary btnBackLogin mt-4">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLogin