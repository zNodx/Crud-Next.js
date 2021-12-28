interface BotaoProps{
    children:any
    className?: string
    cor?: 'blue'| 'yellow' | 'orange' | 'red'
}


export default function Botao(props:BotaoProps){

    const cor = props.cor ?? 'red'

    return(
        <button className={`
            bg-gradient-to-r from-${cor}-600 to-${cor}-400
            px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}