async function login() {
    const emailInput = document.getElementById('email').value;
    const membros = await buscarMembros();

    const membro = membros.find(m => m.email === emailInput);

    if (membro) {
        // Salvar dados no localStorage para usar na carteirinha
        localStorage.setItem('membroLogado', JSON.stringify(membro));
        window.location.href = "carteirinha.html";
    } else {
        document.getElementById('msg').innerText = "Email não encontrado!";
    }
}
