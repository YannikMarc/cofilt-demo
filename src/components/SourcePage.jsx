function SourcePage({ onBack }) {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#fff",
        color: "#0B2F5D",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // ✅ No scrolling
      }}
    >
      {/* Bot Image */}
      <img
        src="/bot-fly.png"
        alt="CoFilt Bot Flying"
        style={{ width: "250px", marginBottom: "2rem" }}
      />

      {/* Message */}
      <h3 style={{ textAlign: "center", fontSize: "18px", lineHeight: "1.5", marginBottom: "2rem" }}>
        You will be redirected to the original source.
      </h3>

      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0B2F5D",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        ← Back to Feed
      </button>
    </div>
  );
}

export default SourcePage;
