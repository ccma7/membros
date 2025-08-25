async function login() {
    const emailInput = document.getElementById('email').value.toLowerCase().trim();
    const membros = await buscarMembros();

    const membro = membros.find(m => m.email.toLowerCase().trim() === emailInput);

    if (membro) {
        localStorage.setItem('membroLogado', JSON.stringify(membro));
        window.location.href = "carteirinha.html";
    } else {
        document.getElementById('msg').innerText = "Email não encontrado!";
    }
}
