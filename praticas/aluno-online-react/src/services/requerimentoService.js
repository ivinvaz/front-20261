const url = "http://localhost:3000/requerimentos";

async function listar(){
    try{
        const resposta = await fetch(url, {
            method:"GET",
        });
        const dados = await resposta.json();
        return dados;
    }catch(error){ 
        return console.log("Deu ruim!",error.message)
    }
}

async function cadastrar(produto){
    try{
        const resposta = await fetch(url, {
            method:"POST",
            body:JSON.stringify(produto),
            headers: {"content-type":"application/json"}
        });
        const dados = await resposta.json();
        return dados;
    }catch(error){ 
        return console.log("Deu ruim!",error.message)
    }
}

export { listar, cadastrar };
