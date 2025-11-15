export default function MarriageNode() {
  return (
    <div
      style={{
        position: "relative",
        width: "120px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "2px",
          background: "#4AA3F0",
          top: "50%",
        }}
      />
      <div
        style={{
          zIndex: 2,
          background: "#1e1e1e",
          padding: "2px 8px",
          borderRadius: "9999px",
          border: "2px solid #4AA3F0",
          color: "#4AA3F0",
          fontSize: "16px",
        }}
      >
        💍
      </div>
    </div>
  );
}
