import { con } from './connection.js';

export async function pet ( nome ){
    const comando = 
    `insert into tb_pet( nm_pet)
	             value(?);
    `
    const [ resposta ] = await con.query(comando, [nome.pet]);
    console.log(resposta)
    return resposta;
}
