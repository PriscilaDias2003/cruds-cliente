console.log('SELECT * FROM usuario');
const usuarios = await db.selectUsuario();
console.log(usuarios);

console.log('INSERT INTO usuario');
const result = await db.insertUsuario({nome: "Zé", senha: "oi12345"});
console.log(result);

console.log('DELETE FROM usuario');
const result3 = await db.deleteUsuario(2);
console.log(result3);

console.log('UPDATE usuario');
const result2 = await db.updateUsuario(3, {nome: "Zé José", senha: "oi12345"});
console.log(result2);