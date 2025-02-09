import './Card.css'

interface Props{
    title: string;
    users:number;
    
}

const Card = ({ title,users}:Props) => {
  return (
    <div className="card">
    <div className="card-header">
      <h3>{title}</h3>
      <button className="btn">Open</button>
    </div>
    <div className="card-body">
        <p>Date: 05-10-2024</p>
        <p>Users: {users}</p>
    </div>
  </div>
  )
}

export default Card
