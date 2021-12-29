import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente();

    const { tabelaVisivel, fomularioVisivel, exibirFormulario,exibirTabela} = useTabelaOuForm();
    const [visivel, setVisivel] = useState<'tabela' | 'form' >('tabela')

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

    function obterTodos(){
    
    repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
        })
    }


    function selecionarCliente(cliente:Cliente){
    setCliente(cliente)
    exibirFormulario()
    }
    async function excluirCliente (cliente:Cliente){
    await repo.excluir(cliente)
    obterTodos()
    }

    async function salvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos()
    }

    function novoCliente(){
    setCliente(Cliente.vazio())
    exibirFormulario()
    }

    return {
        selecionarCliente,
        novoCliente,
        excluirCliente,
        salvarCliente,
        exibirTabela,
        obterTodos,
        tabelaVisivel,
        cliente,
        fomularioVisivel,
        clientes
    }

}