import { pet,consultarPet } from '../repository/petRepository.js';

import { Router } from 'express'

const server = Router();

server.post('/pet', async (req,resp)=> {
    try {
        const adicionarPet = req.body;

        const petAdicionado = await pet(adicionarPet)

        resp.send( adicionarPet)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/pet/consultar' , async (req,resp)=>{
    try {
    
    } catch (err) {
        
    }
})



export default server;