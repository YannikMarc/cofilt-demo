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
    justifyContent: "flex-start",
    alignItems: "center",
    overflowY: "scroll",
    scrollbarWidth: "none",       // Firefox
    msOverflowStyle: "none",      // IE
  }}
>
  <style>{`div::-webkit-scrollbar { display: none; }`}</style> {/* Chrome, Safari */}

      {/* Hero Image */}
      <img
        src="/bot-all.png"
        alt="CoFilt Bot"
        style={{
          width: "90%",
          maxWidth: "240px",
          margin: "0 auto 1.5rem",
          display: "block",
        }}
      />

      {/* Tagline */}
      <div style={{ marginBottom: "2rem" }}>
  <h1 style={{ fontSize: "24px", fontWeight: "700", margin: 0, color: "#0B2F5D" }}>
    CoFilt
  </h1>
  <p style={{ fontSize: "18px", color: "#444", marginTop: "0.25rem" }}>
    Skip the noise. Follow what matters.
  </p>
</div>

      {/* Mock Login Form */}
      <div
        style={{
          width: "100%",
          maxWidth: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          value="Just.Click@Login.com"
          disabled
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: "#f0f0f0",
            color: "#666",
            fontSize: "14px",
            cursor: "not-allowed",
          }}
        />
        <input
          type="password"
          value="***********"
          disabled
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: "#f0f0f0",
            color: "#666",
            fontSize: "14px",
            cursor: "not-allowed",
          }}
        />

        <button
          onClick={onStart}
          style={{
            backgroundColor: "#0B2F5D",
            color: "white",
            padding: "12px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#142C59")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0B2F5D")}
        >
          Login
        </button>

        <span
          style={{
            marginTop: "0.5rem",
            fontSize: "13px",
            color: "#888",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Forgotten password?
        </span>
      </div>
    </div>
  );
}

export default LandingPage;
