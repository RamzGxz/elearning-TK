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
        const isiVal = req.body.isiBerita
        const fotoVal = req.body.fotoBerita
        const catVal = req.body.kategori
        const query = `update dataBerita set isiBerita='${isiVal}', fotoBerita='${fotoVal}', kategori='${catVal}' where id = ${id}`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send('data berhasil di update')
            console.log(data)
        })
    },
    postDataBerita: (req, res) =>{
        const isiBeritaVal = req.body.isiBerita
        const fotoBeritaVal = req.body.fotoBerita
        const kategoriVal = req.body.kategori
        const query = `insert into dataBerita(isiBerita, fotoBerita, kategori) values('${isiBeritaVal}', '${fotoBeritaVal}', '${kategoriVal}')`
        conn.query(query,(err,data)=>{
            if (err) throw err
            res.send('data berhasil di post')
        })
    }
}