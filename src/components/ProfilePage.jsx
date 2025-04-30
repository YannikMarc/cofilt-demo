function ProfilePage({ onBack }) {
  return (
    <div
      style={{
        padding: "2rem 1.5rem",
        fontFamily: "'Inter', sans-serif",
        color: "#0B2F5D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {/* Bot Image */}
      <img
        src="/bot-tipping.png"
        alt="CoFilt Bot Tipping"
        style={{
          width: "90%",
          maxWidth: "240px",
          marginBottom: "1.5rem",
          borderRadius: "12px",
        }}
      />

      <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "1.5rem" }}>
        Your Profile
      </h2>

      {/* Section Headings */}
      <div style={{ width: "100%", maxWidth: "320px" }}>
        {[
          "Account Information",
          "Followed Companies",
          "Feed Customization",
          "Notification Settings",
          "Language & Region",
          "Analytics",
          "Beta Features",
          "Feedback & Support",
        ].map((title, index) => (
          <div key={index} style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #ccc",
                paddingBottom: "0.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{title}</span>
              <span style={{ fontSize: "14px", color: "#666" }}>▼</span>
            </h3>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={onBack}
        style={{
          padding: "12px 24px",
          backgroundColor: "#0B2F5D",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontSize: "15px",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        ← Back to Feed
      </button>
    </div>
  );
}

export default ProfilePage;
