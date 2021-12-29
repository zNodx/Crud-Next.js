import { useState } from 'react'
import Cliente from '../core/Cliente'
import Botao from './Botao'
import Entrada from './Entrada'
interface FormularioProps{
    clientes: Cliente
    cancelado?: () => void
    clienteMudou?: (clientes:Cliente) => void
}
export default function Formulario(props:FormularioProps){
    const id = props.clientes?.id 
    const [nome, setNome] = useState(props.clientes?.nome ?? '')
    const [idade, setIdade] = useState(props.clientes?.idade ?? 0)

    return(

        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className='mb-3'/>
            ): false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className='mb-3'/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>

        <div className=' flex justify-end mt-7'>
            <Botao className=' bg-orange-500 mr-2'
                onClick={() => props.clienteMudou?.(new Cliente(nome,+idade,id))}
            >
                {id ? 'Alterar' : 'Salvar' }
            </Botao>
            <Botao className='bg-blue-700' 
                onClick={props.cancelado}
            >
                Cancelar
            </Botao>
        </div>
        </div>

    )

}