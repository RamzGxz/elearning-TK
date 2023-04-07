const conn = require('../db/db')

module.exports = {
    getUser: (req, res) => {
        conn.query('select * from user', (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    getUserById: (req, res) => {
        conn.query(`select * from user where userID=${req.params.id}`, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    loginValidate: (req, res) => {
        const username = req.body.username
        const pass = req.body.pass
        const query = `select * from user where username = "${username}" and pass = "${pass}"`
        conn.query(query, (err, data) => {
            if (err) return res.send(err)
            if (data.length > 0) {
                res.status(200).json({ message: 'Login berhasil' });
            } else {
                res.status(401).json({ message: 'Username atau password salah' });
            }
        })
        console.log(username)
        console.log(pass)
    }
}