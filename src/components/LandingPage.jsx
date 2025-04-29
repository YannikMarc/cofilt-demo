function LandingPage({ onStart }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        fontFamily: "'Inter', sans-serif",
        color: "#0B2F5D",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img
        src="/hero.png"
        alt="CoFilt Welcome"
        style={{
          width: "60%",
          maxWidth: "240px",
          margin: "0 auto 1.5rem",
          display: "block",
        }}
      />
      <h1 style={{ fontSize: "28px", marginBottom: "1rem", fontWeight: "600" }}>
        👋 Welcome to <span style={{ color: "#4F46E5" }}>CoFilt</span>
      </h1>

      <p style={{ fontSize: "16px", marginBottom: "1rem", color: "#333", lineHeight: "1.5" }}>
        CoFilt is your personal feed for company updates. Stay informed about the companies you
        actually care about — without the noise.
      </p>

      <div
        style={{
          backgroundColor: "#ffffffcc",
          padding: "1rem",
          borderRadius: "12px",
          fontSize: "14px",
          color: "#444",
          marginBottom: "2rem",
          maxWidth: "320px",
        }}
      >
        <strong>Prototype note:</strong> We've preselected a few companies and topics for this demo.
        In the final version, CoFilt will automatically fetch and filter live content based on your
        personal interests — powered by AI.
      </div>

      <button
        onClick={onStart}
        style={{
          backgroundColor: "#0B2F5D",
          color: "white",
          padding: "12px 24px",
          borderRadius: "16px",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#142C59")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0B2F5D")}
      >
        🚀 Let's try it out!
      </button>
    </div>
  );
}

export default LandingPage;
