export default function PersonCard({ node }) {
  return (
    <div
      style={{
        background: "#1e1e1e",
        padding: "6px 10px",
        borderRadius: "8px",
        border: "1px solid #555",
        color: "white",
        minWidth: 140,
      }}
    >
      <div style={{ fontWeight: 600 }}>
        {node.firstName} {node.lastName}
      </div>
      <div style={{ fontSize: "12px", opacity: 0.7 }}>
        {node.birthday}
      </div>
    </div>
  );
}
