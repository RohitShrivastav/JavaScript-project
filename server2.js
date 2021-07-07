const express = require("express");

const app = express();

const paymentOption = [{
    id: 1, name: 'Credit Card',
    id: 2, name: 'Debit Card',
    id: 3, name: 'COD'

}];

app.get('/', (req, res) =>{
    res.send("This is the home page");
});

app.get('/api/paymentoptions', (req, res) =>{
    res.send(paymentOption);
});


app.get('/api/paymentoptions/:id', (req, res) =>{
    const paymentMethod = paymentOption.find(c => c.id === parseInt(req.params.id));
    if (!paymentMethod) {res.status(404).send("The response with the given Id was not found");}
    res.send(paymentMethod);
});



app.listen(1200, () =>{
    console.log("The server is running on port: 1200");
});