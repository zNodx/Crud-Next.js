import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";

export default function Home() {
  
  const {
        selecionarCliente,
        excluirCliente, 
        novoCliente,
        cliente,
        clientes,
        exibirTabela,
        salvarCliente,
        tabelaVisivel,
      } = useClientes()

  return (
   
    <div className={`
    bg-gradient-to-r from-red-600 via-orange-500 to-yellow-600
    flex h-screen justify-center items-center
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
        <>
        <div className="flex justify-end">
          <Botao onClick={novoCliente} className="mb-4 bg-gradient-to-r from-red-400 to-red-800">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={selecionarCliente}
        clienteExcluido={excluirCliente}/>
        </>

        ): (
          <Formulario 
              clientes={cliente}
              clienteMudou={salvarCliente}
              cancelado={() => exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
