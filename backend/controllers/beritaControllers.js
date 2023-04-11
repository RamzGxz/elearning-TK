const conn = require('../db/db')

module.exports = {
    getDataBerita: (req, res) => {
        const query = "select * from dataBerita"
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    deleteBerita: (req, res) => {
        const id = req.params.id
        const query = `delete from dataBerita where id=${id}`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(`data dengan id: ${id} berhasil di delete`)
        })
    },
    updateBerita: (req, res) => {
        const id = req.params.id
        const judulVal = req.body.judulBerita
        const isiVal = req.body.isiBerita
        const fotoVal = req.body.fotoBerita
        const catVal = req.body.kategori
        const query = `update dataBerita set judulBerita='${judulVal}', isiBerita='${isiVal}', fotoBerita='${fotoVal}', kategori='${catVal}' where id = ${id}`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send('data berhasil di update')
            console.log(data)
        })
    },
    postDataBerita: (req, res) =>{
        const judulBeritaVal = req.body.judulBerita
        const isiBeritaVal = req.body.isiBerita
        const fotoBeritaVal = req.body.fotoBerita
        const kategoriVal = req.body.kategori
        const query = `insert into dataBerita(judulBerita, isiBerita, fotoBerita, kategori) values('${judulBeritaVal}','${isiBeritaVal}', '${fotoBeritaVal}', '${kategoriVal}')`
        conn.query(query,(err,data)=>{
            if (err) throw err
            res.send('data berhasil di post')
        })
    },
    getBeritaById: (req, res)=>{
        const id = req.params.id
        const query = `select * from dataBerita where id=${id}`
        conn.query(query, (err, data)=>{
            if (err) throw err
            res.send(data)
        })
    }
}