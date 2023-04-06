const conn = require('../db/db')

module.exports = {
    getUser : (req, res)=>{
        conn.query('select * from user',(err,data)=>{
            if (err) throw err
            res.send(data)
        })
    },
    getUserById: (req, res)=>{
        conn.query(`select * from user where userID=${req.params.id}`, (err, data)=>{
            if (err) throw err
            res.send(data)
        })
    },
    login: (req, res)=>{
        const {username, pass} = req.body
        const query = `select * from user where username = ? and pass = ?`
        conn.query(query, [username, pass], (err, result)=>{
            if (err){
                console.log('error query')
                res.status(500).json({
                    error: 'terjadi kesalahan'
                })
            } else if (result.length === 0){
                res.status(401).json({ error: 'Username atau password salah' });
            }
            res.json({username: result[0]})
        })
    }
}