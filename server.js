import express from 'express'
import router from './route.js'

const app = express()

const port = 3007

//Define a simple route
app.get('/', (req,res)=>{
    res.send('hello, Express')

})

app.use('/user', router)


app.post('/users', express.json(), (req, res) => {
   const { name, email } = req.body;
   res.json({
      message: `user ${name} with email ${email} created successfully`
   });
});


app.put('/users/:id', (req,res)=>{
    const usersId = req.params.id
    const { name,email } = req.body
    res.json({
        message: `user ${usersId} updated successfully`
    });
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})