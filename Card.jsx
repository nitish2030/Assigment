import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { FaFirstOrderAlt } from "react-icons/fa";

const Card = ({ ticket, users }) => {
  //const assignedUser = users.find((user) => user.id === ticket.userId);
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius:"8px",
        
        marginBottom: "10px",
      }}
    >
      <p>{ticket.id}</p>
      <h4 style={{ marginBottom: "5px" }}>{ticket.title}</h4>
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          gap:"5px",
        }}
      >
        {" "}
        <div style={{border:"solid black 0.1px" }}>
          <FaEllipsisH />
        </div>
        <div style={{display:"flex",direction:"row",alignItems:"center",justifyItems:"center" ,border:"solid black 1px",padding:"2px"}}>
          <FaFirstOrderAlt />
          <p style={{ fontSize: "12px", color: "#666" }}>
            {ticket.tag.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
