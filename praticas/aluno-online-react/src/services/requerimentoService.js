const url = "http://localhost:3000/requerimentos";

async function listar() {
    const token = localStorage.getItem("app.token");

    if (!token) throw new Error("401");

    const resposta = await fetch(url, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });

    if (resposta.status === 401) throw new Error("401");

    return resposta.json();
}

async function cadastrar(produto) {
    const token = localStorage.getItem("app.token");

    if (!token) throw new Error("401");

    const resposta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(produto),
        headers: { "Authorization": `Bearer ${token}` }
    });

    if (resposta.status === 401) throw new Error("401");

    return resposta.json();
}

export { listar, cadastrar };
