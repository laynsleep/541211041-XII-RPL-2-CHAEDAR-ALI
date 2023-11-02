let users = [
    {id: 1, nama:"Chaedar", email:"chaed.ar08@gmail.com"},
    {id: 2, nama:"Ali", email:"whawedaw@gmail.com"},
    {id: 3, nama:"Amrulloh", email:"papedaaa@gmail.com"}
]

module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
        }else {
            res.json({
                status:false,
                message: "Data masih "
            })
        }
    },
    store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil di+++"
        })
    },
    update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil dirUbaH"
        })
    },
    delete: (req, res) => {
        const id = req.params.id    
        users = users.filter(user => user.id != id)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil di-"
        })
    }
}