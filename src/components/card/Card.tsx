import './Card.css'
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props{
    title: string;
    users:number;
    deleteCard:(e:React.MouseEvent)=>void;
}

const Card = ({ title,users,deleteCard}:Props) => {
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
    <div onClick={deleteCard} className="card-footer"><RiDeleteBin6Line size={20} /></div>
  </div>
  )
}

export default Card
