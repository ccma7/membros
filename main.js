async function login() {
    const emailInput = document.getElementById('email').value.toLowerCase().trim();

    if(!emailInput) {
        document.getElementById('msg').innerText = "Digite seu email!";
        return;
    }

    const membros = await buscarMembros();

    // Procurar pelo email digitado
    const membro = membros.find(m => m.email.toLowerCase().trim() === emailInput);

    if (membro) {
        localStorage.setItem('membroLogado', JSON.stringify(membro));
        window.location.href = "carteirinha.html";
    } else {
        document.getElementById('msg').innerText = "Email não encontrado!";
    }
}
