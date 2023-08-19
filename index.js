const dotenv = require("dotenv");

dotenv.config();

(async () => {
  const db = require("./db");

  //console.log("Novo cliente inserido");
  //const nom = "jon";
  //const ida = 68;
  //await db.insereCliente({ nome: nom, idade: ida });

  //const id = 4;
  //const nom = "jubileio";
  //const ida = 678;
  //await db.atualizaCliente(id, { nome: nom, idade: ida });
  //console.log(`Cliente ${id} atualizado`);

  const id = 2;
  await db.deletaCliente(id);
  console.log(`Cliente ${id} deletado`);

  console.log("Obter todos os clientes");
  const clientes = await db.todosClientes();
  console.log(clientes);
})();
