const db = require('./db');

db.adicionarUsuario('Alice', 'alice@example.com', 'senha123');
db.adicionarUsuario('Bob', 'bob@example.com', 'senha456');
console.log(db.listarUsuarios());

db.atualizarUsuario('alice@example.com', 'Alice Wonderland', 'novaSenha123');
console.log(db.listarUsuarios());

db.removerUsuario('bob@example.com');
console.log(db.listarUsuarios());
