import React, { useEffect, useState } from "react";
import axios from "axios";
import Statuss from "./componets/Statuss";
import Dropdown from "./componets/Dropdown";
import "./App.css"; 

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("Status");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleGroupChange = (value) => {
    setGroupBy(value);
  };

  return (
    <div className="app-container">
      <div className="dropdown-container" style={{height:"50px"} }>
        <Dropdown
          options={["Status", "User", "Priority"]}
          onChange={handleGroupChange}
        />
      </div>
      <div style={{padding:"20px", backgroundColor:"#F8F8F8"}}>
      <Statuss tickets={tickets} users={users} groupBy={groupBy} />
      </div>
    </div>
  );
};

export default App;
