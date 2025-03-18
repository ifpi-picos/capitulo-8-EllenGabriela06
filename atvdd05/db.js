let usuarios = [];

function adicionarUsuario(nome, email, senha) {
    usuarios.push({ nome, email, senha });
}

function removerUsuario(email) {
    usuarios = usuarios.filter(usuario => usuario.email !== email);
}

function atualizarUsuario(email, novoNome, novaSenha) {
    let usuario = usuarios.find(u => u.email === email);
    if (usuario) {
        usuario.nome = novoNome;
        usuario.senha = novaSenha;
    }
}

function listarUsuarios() {
    return usuarios;
}

module.exports = { adicionarUsuario, removerUsuario, atualizarUsuario, listarUsuarios };
