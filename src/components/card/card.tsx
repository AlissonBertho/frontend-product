import "./card.css"

interface CardProps {
    id: string,
    name: string
}

export function Card({ id, name } : CardProps) {
    return (
        <div className="card">
            <p><b>Id: </b>{id}</p>
            <p><b>Nome: </b>{name}</p>
            <hr></hr>
        </div>
    )
}