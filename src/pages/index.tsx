import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana',34,'1'),
    new Cliente('Bia',24,'2'),
    new Cliente('Carlos',14,'3'),
    new Cliente('Daniel',44,'4'), 

  ]

  function clienteSelecionado(clientes:Cliente){
      console.log(clientes.nome)
  }
  function clienteExcluido (clientes:Cliente){
    console.log(`Excluir:${clientes.nome}`)
}

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-red-500 to-yellow-500
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor='orange' className="mb-4" >Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}/>
        <Formulario clientes={clientes[1]}/>
      </Layout>
    </div>
  )
}
