import express from 'express'
import multer from 'multer'

const app = express()
const upload = multer()
const port = 3007

app.use(express.urlencoded({extended:true}))
app.use(upload.single('image'))


app.get('/', (req, res) => {
    res.send('hello Express')
 
});
app.post('/form',(req,res)=>{
    console.log(req.body)
    res.send('form Received')
})




app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})