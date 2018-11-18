const express = require('express');
const { Member, Todo } = require('../models');
const { isAuthenticated } = require('../middlewares/auth');

const router = express.Router();

router.use(isAuthenticated);

router.get('/get/:id',  async (req, res, next)=>{
    try {
        const todo = await Todo.find({
            where: { id : req.params.id }
        });
        res.json(todo);
    } catch (error) {
        console.error(error);
        next();
    }
});

router.get('/list', async (req, res, next)=>{
    try {
        const todoList = await Todo.findAll(
            {order: [['regDate', 'DESC']]}
        );
        res.json(todoList);
    } catch (error) {
        console.error(error);
        next();
    }
});

router.post('/insert', async(req, res, next)=>{
    try {
        const result = await Todo.create({
            writer: req.body.writer,
            content: req.body.content
        })
        res.json(result);
    } catch (error) {
        console.error(error);
        next();
    }
});

router.delete('/delete/:id', async(req, res, next)=>{
    try {
        const result = await Todo.destroy({
            where: {
                id: req.params.id
            }
        });
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        next();
    }
});

router.put('/complate', async(req, res, next)=>{
    try {
        const result = await Todo.update(
            {isCompleted : req.body.isCompleted},
            {where: {id: req.body.id}}
        );
        res.json(result);
    } catch (error) {
        console.error(error);
        next();
    }
})

router.put('/update', async(req, res, next)=>{
    try {
        const result = await Todo.update(
            {content : req.body.content},
            {where: {id: req.body.id}}
        )
        res.json(result);
    } catch (error) {
        console.error(error);
        next();
    }
})

module.exports = router;