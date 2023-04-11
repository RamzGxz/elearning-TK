const conn = require('../db/db')

module.exports = {
    getDataGambar: (req, res) => {
        const query = "select * from dataGambar"
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    delDataGambar: (req, res) => {
        const id = req.params.id
        const query = `delete from dataGambar where id=${id}`
        conn.query(query, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Terjadi kesalahan pada server.' })
            } else if (result.affectedRows === 0) {
                res.status(404).send({ message: 'Data tidak ditemukan.' })
            } else {
                res.send({ message: 'Data berhasil dihapus.' })
            }
        })
    },
    updateGambar: (req, res)=>{
        const id = req.params.id
        const linkVal = req.body.linkGambar
        const descVal = req.body.descGambar
        const catVal = req.body.kategori
        const query = `update dataGambar set linkGambar='${linkVal}', descGambar='${descVal}', kategori='${catVal}' where id = ${id}`
        console.log(query)
        conn.query(query, (err, data)=>{
            if (err) throw err
            res.send('data berhasil di update')
            console.log(data)
        })
    },
    getDataGambarId: (req, res)=>{
        const id = req.params.id
        const query = `select * from dataGambar where id=${id}`
        conn.query(query, (err, data)=>{
            if (err) throw err
            res.send(data)
        })
    },
    postDataGambar: (req, res)=>{
        const linkVal = req.body.linkGambar
        const descVal = req.body.descGambar
        const catVal = req.body.kategori
        const query = `insert into dataGambar(linkGambar, descGambar, kategori) values('${linkVal}', '${descVal}', '${catVal}')`
        console.log(query)
        conn.query(query, (err, data)=>{
            if (err) throw err
            res.send(`data has been posted, data: ${data}`)
        })
    }
}