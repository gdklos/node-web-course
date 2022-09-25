import express from 'express'

const app = express()

app.get('/', (req, res) => { 
   res.send('<h1>Bienvenido</h1>')
})

app.get('/about', (req, res) => { 
   res.send('<h1>About</h1>')
})
const port = process.env.PORT || 3000
app.listen(port)
console.log(`server up on port ${port}`)