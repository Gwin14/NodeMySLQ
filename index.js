const dotenv = require("dotenv");

dotenv.config();

(async () => {
  const db = require("./db");
  console.log("Inserir novo cliente");
  const nom = "jon";
  const ida = 68;
  await db.insereCliente({ nome: nom, idade: ida });

  console.log("Obter todos os clientes");
  const clientes = await db.todosClientes();
  console.log(clientes);
})();
