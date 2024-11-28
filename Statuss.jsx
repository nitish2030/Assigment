import React from "react";
import Clmn from "./Clmn";

const Statuss = ({ tickets, users, groupBy }) => {
  // Helper function to group tickets by a field
  const groupByField = (field) => {
    const groups = {};
    tickets.forEach((ticket) => {
      const key = ticket[field]?.toString() || "Unassigned";
      if (!groups[key]) groups[key] = [];
      groups[key].push(ticket);
    });
    return groups;
  };

  // Dynamically group tickets based on dropdown selection
  const groupedTickets =
    groupBy === "Status"
      ? groupByField("status")
      : groupBy === "User"
      ? groupByField("userId")
      : groupByField("priority");

  // Ensure a "Done" and "Cancelled" column are always present when grouping by status
  if (groupBy === "Status") {
    if (!groupedTickets["Done"]) groupedTickets["Done"] = [];
    if (!groupedTickets["Cancelled"]) groupedTickets["Cancelled"] = [];
  }

  // If grouping by user, map userId to the user's name
  const getColumnTitle = (key) => {
    const count = groupedTickets[key]?.length || 0;
    if (groupBy === "User") {
      const user = users.find((user) => user.id === key);
      return `${user ? user.name : "Unassigned"} (${count})`;
    }
    if (groupBy === "Priority") {
      return key === "0"
        ? `High priority: ${count}`
        : key === "1"
        ? `Medium priority: ${count}`
        : key === "2"
        ? `Low priority: ${count}`
        : key === "3"
        ? `No priority: ${count}`
        : `Urgent: ${count}`;
    }
    return `${key} (${count})`; // Default (Status)
  };

  const renderColumns = () => {
    return Object.keys(groupedTickets).map((key) => (
      <div className="status-column" style={{width:"20%",
        }} key={key}>
        <Clmn
          title={getColumnTitle(key)} // Add count to column title
          tickets={groupedTickets[key]}
          users={users}
          status={key}
        />
      </div>
    ));
  };

  return (
    <div className="status-container">
      {renderColumns()}
    </div>
  );
};

export default Statuss;
