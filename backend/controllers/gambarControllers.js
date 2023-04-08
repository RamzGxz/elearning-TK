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
                // Mengirim respon error jika terjadi kesalahan
                res.status(500).send({ message: 'Terjadi kesalahan pada server.' })
                console.log('terjadi kesalahan pada server')
            } else if (result.affectedRows === 0) {
                // Mengirim respon jika data tidak ditemukan
                res.status(404).send({ message: 'Data tidak ditemukan.' })
                console.log('data tidak ditemukan')
            } else {
                // Mengirim respon berhasil
                res.send({ message: 'Data berhasil dihapus.' })
                console.log('data berhasil di delete')
            }
        })
        conn.commit()
    },

    updateGambar: (req, res)=>{
        const id = req.params.id
        const query = `select * from dataGambar where id=${id}`
        conn.query(query, (err, data)=>{
            if (err) throw err
            res.send(data)
        })
    }
}