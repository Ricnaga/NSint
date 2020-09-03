require('express')()
.get("/", (req, res) =>{
    return res.send("Hello world")
})
.listen(5500)
