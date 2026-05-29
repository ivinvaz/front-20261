import { criar, obter, listar, modificar, remover } from "./client.js"

async function main(){
    let resposta = await criar({ nome: "banana", preco: 12.50, unidade: "kg"});
    console.log("Produto criado...", resposta);
    resposta = await listar();
    console.log("Produtos listados...", resposta);
    resposta = await obter(resposta[0]);
    console.log("Produtos consultado...", resposta);
    resposta = await modificar({id:resposta.id, nome:"banana nanica", preco:19.90, unidade: "kg" });
    console.log("Produtos atualizado...", resposta);
    resposta = await remover(resposta.id);
    resposta = await listar();
    console.log("Produto removido...", resposta);
}

main();