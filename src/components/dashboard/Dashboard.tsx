import "../pages/login/Login.css";
import "./Dashboard.css";
import "../../App.css";
import Card from "../card/Card";
const Dashboard = () => {
  return (
    <>
      <div className="container">
        <h1>Dashboard</h1>
        <div className="add-lists-container">
          <input
            autoFocus
            type="text"
            id="list-name"
            placeholder="Add new list name"
            required
          />
          <button className="btn input-lists">Add List</button>
        </div>
        <div className="grid-cards">
          <Card title="Jailbug" users={2} ></Card>
          <Card title="IndoorCourt" users={5} ></Card>
          <Card title="RoadMap AI" users={3} ></Card>
          <Card title="Jailbug" users={2} ></Card>
          <Card title="IndoorCourt" users={5} ></Card>
          <Card title="RoadMap AI" users={3} ></Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
