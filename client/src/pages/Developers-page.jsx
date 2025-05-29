import React from "react";

const developers = [
    { name: "Aarthi Vishakha", rollno: "22BECSE002" },
    { name: "Abi Raina K", rollno: "22BECSE003" },
    { name: "Dharani S", rollno:"22BECSE018" },
];

const containerStyle = {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "24px",
    background: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const titleStyle = {
    textAlign: "center",
    marginBottom: "24px",
    color: "#333",
    fontSize: "2rem",
    fontWeight: "bold",
};

const listStyle = {
    listStyle: "none",
    padding: 0,
};

const itemStyle = {
    background: "#fff",
    marginBottom: "16px",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
};

const nameStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#1976d2",
};

const roleStyle = {
    fontSize: "0.95rem",
    color: "#555",
};

export default function DevelopersPage() {
    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Meet Our Developers</h2>
            <ul style={listStyle}>
                {developers.map((dev, idx) => (
                    <li key={idx} style={itemStyle}>
                        <span style={nameStyle}>{dev.name}</span>
                        <span style={roleStyle}>{dev.rollno}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}