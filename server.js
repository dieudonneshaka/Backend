import express from 'express'


const app = express()

const port = 3007

//Define a simple route
app.get('/', (req,res)=>{
    res.send('hello, Express')

})

// /users/nameid


app.get('/things/:name/:id([0-9]{5})',(req,res)=>{
    const {name,id} = req.params
    res.json({
        id,
        name
    })
})


app.get('*',(req,res)=>{
    res.send('sorry, this is invalid URL.')
})

app.use((req,res,next)=>{
    console.log('A new request received at'+Date.now())
    next()
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})