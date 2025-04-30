import { allPosts } from "./Posts";

function FeedPage({ selections, onBack }) {
  const { selectedCompanies, companyCategories } = selections;

  const categoryColors = {
    Jobs: "#E0F2FF",
    News: "#E6F9E0",
    Events: "#FFE0E6",
    Social: "#F0E0FF",
    Financial: "#FFF9E0",
  };


  const filteredPosts = allPosts.filter((post) => {
    return (
      selectedCompanies.includes(post.companyId) &&
      (companyCategories[post.companyId] || []).includes(post.category)
    );
  });

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
        <span role="img" aria-label="notifications" style={{ fontSize: "20px" }}>
          🔔
        </span>
      </div>

      {/* Feed Content */}
      <div
  style={{
    flex: 1,
    overflowY: "scroll",
    padding: "1rem",
    scrollbarWidth: "none",       // Firefox
    msOverflowStyle: "none",      // IE & Edge
  }}
>
  <style>
    {`div::-webkit-scrollbar { display: none; }`} {/* Chrome, Safari */}
  </style>

        {filteredPosts.length === 0 ? (
          <p style={{ textAlign: "center", color: "#999" }}>No posts match your selection. 🚀</p>
        ) : (
          filteredPosts.map((post, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: categoryColors[post.category] || "#fff",
                borderRadius: "12px",
                padding: "1rem",
                marginBottom: "1rem",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: "600", fontSize: "15px", marginRight: "8px", color: "#0B2F5D" }}>
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
              <h3 style={{ fontSize: "17px", marginBottom: "0.5rem", color: "#0B2F5D" }}>
                {post.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5" }}>
                {post.summary}
              </p>
              <p style={{ fontSize: "12px", color: "#777" }}>
                📅 {new Date(post.date).toLocaleString()}
                </p>
<p style={{ fontSize: "12px", color: "#777", marginTop: "0.25rem" }}>
  🔗 Source: {post.source}
</p>

            </div>
          ))
        )}
      </div>

      {/* Bottom Tab Bar */}
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
        <div style={{ textAlign: "center", fontSize: "20px" }} role="img" aria-label="home">
          🏠
        </div>
        <div
  onClick={onBack}
  style={{ textAlign: "center", fontSize: "20px", cursor: "pointer" }}
  role="img"
  aria-label="explore"
>
  🔍
</div>

        <div style={{ textAlign: "center", fontSize: "20px" }} role="img" aria-label="profile">
          👤
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
