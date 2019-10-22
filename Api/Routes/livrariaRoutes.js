const express = require('express');
const router = express.Router();
const livrariaModel = require('../Models/livrariaModel');

router.get('/', (req, res) => { //Buscar todos
    livrariaModel.find({}, (err, data) => {
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    });
});

router.get('/:_id', (req, res) => { // Busca com parametros;
    let _id = req.params._id;

    livrariaModel.findOne({_id}, (err, data) => {
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    });

});

router.post('/', (req, res) => { // Adicionar Novo;
    let livros = req.body;

    livrariaModel.create(livros, (err, data) => {
        if(err) return res.status(500).json(err)
        return res.status(201).json(data)
    });

});

router.put('/:_id', (req, res) => { // Autalizar;
    let _id = req.params._id;
    let livros = req.body;
    delete livros._id;

    livrariaModel.update({_id}, livros, (err, data) => {
        if(err) return res.status(500).json(err)
        return res.status(201).json(data)
    });

});

router.delete('/:_id', (req, res) => {
    let _id = req.params._id;

    livrariaModel.deleteOne({_id}, (err, data) => {
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    });
});

module.exports = router;