import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (clientes: Cliente) => void
    clienteExcluido?: (clientes: Cliente) => void

}
export default function Tabela(props:TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ?<th className="text p-4">Ações</th> : false}
            </tr>            
        )

    }

    function renderizarDados(){
        return props.clientes?.map((clientes,i)=>{
            return (
                <tr key={clientes.id}
                    className={`
                        ${i % 2  === 0 ? 'bg-gray-200' : 'bg-gray-300' }
                    `}
                >
                    <td className="text-left p-4">{clientes.id}</td>
                    <td className="text-left p-4">{clientes.nome}</td>
                    <td className="text-left p-4">{clientes.idade}</td>
                    {exibirAcoes ? renderizarAcoes(clientes): false}
                </tr>
            )   
        })
    }

    function renderizarAcoes(clientes:Cliente){
        return(
            <td className="flex justify-center pt-4">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado ?.(clientes)} className={`
                    flex justify-center items-center text-yellow-500 rounded-full p4 m1 hover:bg-gray-100
                    `}
                    >{IconeEdicao}
                    </button>
                ): false}
                  {props.clienteExcluido ? (
                    <button  onClick={() => props.clienteExcluido ?.(clientes)} className={`
                    flex justify-center items-center text-red-500 rounded-full p4 m1 hover:bg-gray-100
                    `}
                    >{IconeLixo
                    }</button>
                ): false}
                
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-red-500 to-yellow-300
            `}>
            {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )

    
}