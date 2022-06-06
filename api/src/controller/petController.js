import { pet } from '../repository/petRepository.js';

import { Router } from 'express'

const server = Router();

server.post('/pet', async (req,resp)=> {
    try {
        const adicionarPet = req.body;

        const petAdicionado = await pet(adicionarPet)

        resp.send(petAdicionado)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})



export default server;