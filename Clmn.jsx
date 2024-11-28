import React from "react";
import Card from "./Card";
import { RiProgress2Line } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { RiLoaderLine } from "react-icons/ri";
import { FaEllipsisH } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
const Clmn = ({ title, tickets, users, status }) => {
  return (
    <div
      style={{
        
        flex: 1,
        direction: "row",
        backgroundColor: "#F8F8F8",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {console.log(status)}
          {status === "Backlog" && <RiLoaderLine />}
          {status === "Cancelled" && <MdCancel />}
          {status === "Todo" && <FaRegCircle />}
          {status === "Done" && <IoCheckmarkDoneCircle />}
          {status === "In progress" && <RiProgress2Line />}
          <h3 style={{ color: "#333" }}>{title}</h3>
        </div>
        <div >
          <FaEllipsisH style={{marginRight:"5px"}} />
          <FaPlus />
        </div>
      </div>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} users={users} />
      ))}
    </div>
  );
};

export default Clmn;
