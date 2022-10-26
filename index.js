const express = require("express");

const app = express();

(async () => {

    const database = require('./model/services/dborm')
    const Cliente = require('./model/entities/cliente')
    console.log(' Criar tabela =====================================================');

    const resultado = await database.sequelize.sync();
    console.log(resultado);
    console.log(' Criar um registro =================================================');

    const inserirCliente = await Cliente.create({
        nome: 'João da Silva',
        idade: 10,
        endereco: 'Rua Paulista, n 10000'
    })

    console.log(inserirCliente);
    console.log('Buscar um registro ================================================');
    const cliente = await Cliente.findByPk(1);
    console.log(cliente);

    console.log('Alterar um registro ===============================================');
    const clienteAlterar = await Cliente.findByPk(1);
    clienteAlterar.nome = "Atlas Alighieri";
    const resultadoSave = await clienteAlterar.save();
    console.log(resultadoSave);

    console.log('Buscar todos os registros ==========================================');
    const clientes = await Cliente.findAll();
    console.log(clientes);

    console.log('Deletar o registro ===============================================');
    const clienteDelete = await Cliente.findByPk(1);
    clienteDelete.destroy();

})();
app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081")
});

