const conn = require('../db/db')

module.exports = {
    getDataVideo: (req, res) => {
        const query = "select * from dataVideo"
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    deleteVideo: (req, res) => {
        const id = req.params.id
        const query = `delete from dataVideo where id=${id}`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(`data dengan id: ${id} berhasil di delete`)
        })
    },
    updateVideo: (req, res) => {
        const id = req.params.id
        const linkVal = req.body.linkVideo
        const descVal = req.body.descVideo
        const catVal = req.body.kategori
        const query = `update dataVideo set linkVideo='${linkVal}', descVideo='${descVal}', kategori='${catVal}' where id = ${id}`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send('data berhasil di update')
            console.log(data)
        })
    },
    postDataVideo: (req, res) => {
        const linkVal = req.body.linkVideo
        const descVal = req.body.descVideo
        const catVal = req.body.kategori
        const query = `insert into dataVideo(linkVideo, descVideo, kategori) values ('${linkVal}', '${descVal}', '${catVal}')`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send('data berhasil di post')
        })
    },
    getVideoById: (req, res) => {
        const id = req.params.id
        const query = `select * from dataVideo where id=${id}`
        conn.query(query, (err, data) => {
            if (err) throw err
            res.send(data)
        })
    },
    getVideoByCategory: (req, res) => {
        const cat = req.query.category
        const query = `select * from dataVideo where kategori='${cat}'`
        conn.query(query, (err, data)=>{
            if (err) throw err
            res.send(data)
        })
    }
}