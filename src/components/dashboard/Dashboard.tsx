import '../pages/login/Login.css'
import './Dashboard.css'
import '../../App.css'
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

        <div className="grid-cards"></div>
      </div>
    </>
  );
};

export default Dashboard;
