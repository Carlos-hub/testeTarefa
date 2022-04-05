const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(cors())
const items = []
app.post('/tarefa', (req,res) =>{
    const tarefa = req.body;
    console.log(req.body)
    items.push(tarefa)
    return res.json(items)
});
app.get('/',(req,res) =>{
    return res.json(items)
})

app.listen(3000,() => console.log('Servidor rodando'))

