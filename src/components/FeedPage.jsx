import { useState } from "react";
import { allPosts } from "./Posts"; // Adjust path if needed

function FeedPage({ selections, onBack, onGoToProfile, onReload, onPostClick }) {
  const { selectedCompanies, companyCategories } = selections;
  const [showNotice, setShowNotice] = useState(false);

  const categoryColors = {
    Jobs: "#E0F2FF",
    News: "#E6F9E0",
    Events: "#FFE0E6",
    Social: "#F0E0FF",
    Financial: "#FFF9E0",
  };

  // ✅ Format date for display
  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  // ✅ Filter + sort posts
  const filteredPosts = allPosts
    .filter(
      (post) =>
        selectedCompanies.includes(post.companyId) &&
        (companyCategories[post.companyId] || []).includes(post.category)
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest first

  const handleBellClick = () => {
    setShowNotice(true);
    setTimeout(() => setShowNotice(false), 3000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid #eee",
          fontWeight: "600",
          fontSize: "16px",
          color: "#0B2F5D",
          backgroundColor: "#fff",
        }}
      >
        <span>CoFilt</span>
        <span
          role="img"
          aria-label="notifications"
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={handleBellClick}
        >
          🔔
        </span>
      </div>

      {/* Reload Message */}
      {showNotice && (
        <div
          style={{
            backgroundColor: "#FFF8C4",
            color: "#333",
            padding: "0.5rem 1rem",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          🔔 There are no open notifications.
        </div>
      )}

      {/* Feed Content */}
      <div
  style={{
    flex: 1,
    overflowY: "scroll",
    padding: "1rem",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE 10+
  }}
>
  <style>{`div::-webkit-scrollbar { display: none; }`}</style> {/* Chrome/Safari */}

  {filteredPosts.length === 0 ? (
  <div style={{ textAlign: "center", color: "#999" }}>
    <img
      src="/bot-thinking.png"
      alt="Thinking Bot"
      style={{
        width: "250px",
        marginBottom: "1rem",
      }}
    />
    <p>No posts match your selection. 🚀</p>
  </div>
) : (

          filteredPosts.map((post, idx) => (
            <div
              key={idx}
              onClick={() => onPostClick(post)}
              style={{
                backgroundColor: categoryColors[post.category] || "#fff",
                borderRadius: "12px",
                padding: "1rem",
                marginBottom: "1rem",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    marginRight: "8px",
                    color: "#0B2F5D",
                  }}
                >
                  {post.companyName}
                </span>
                <span
                  style={{
                    backgroundColor: "#0B2F5D",
                    color: "white",
                    borderRadius: "8px",
                    padding: "2px 8px",
                    fontSize: "12px",
                  }}
                >
                  {post.category}
                </span>
              </div>
              <h3
                style={{ fontSize: "17px", marginBottom: "0.5rem", color: "#0B2F5D" }}
              >
                {post.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
                {post.summary}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#999",
                  marginTop: "0.25rem",
                }}
              >
                📅 {formatDate(post.date)}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#777",
                  marginTop: "0.5rem",
                }}
              >
                🔗 Source: {post.source}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0.75rem 0",
          borderTop: "1px solid #eee",
          backgroundColor: "#fff",
        }}
      >

        {/* Back to selection */}
        <div
          style={{ textAlign: "center", fontSize: "20px", cursor: "pointer" }}
          role="img"
          aria-label="explore"
          onClick={onBack}
        >
          🔍
        </div>

        {/* Go to profile */}
        <div
          style={{ textAlign: "center", fontSize: "20px", cursor: "pointer" }}
          role="img"
          aria-label="profile"
          onClick={onGoToProfile}
        >
          👤
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
