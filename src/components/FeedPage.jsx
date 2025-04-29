function FeedPage({ selections, onBack }) {
  const { selectedCompanies, companyCategories } = selections;

  const categoryColors = {
    Jobs: "#E0F2FF",
    News: "#E6F9E0",
    Events: "#FFE0E6",
    Social: "#F0E0FF",
    Financial: "#FFF9E0",
  };

  const allPosts = [
    { companyId: 1, companyName: "Google", title: "Hiring AI Engineers", category: "Jobs", summary: "We are expanding our AI division and looking for brilliant engineers to join our mission.", source: "LinkedIn" },
    { companyId: 1, companyName: "Google", title: "Pixel 9 Launch", category: "Events", summary: "Google will reveal its newest Pixel devices at the upcoming annual technology showcase event.", source: "Company Website" },
    { companyId: 1, companyName: "Google", title: "Sustainability Update", category: "News", summary: "Learn about Google's new environmental initiatives to achieve carbon neutrality across all offices.", source: "Newsroom" },
    { companyId: 1, companyName: "Google", title: "New Internship Openings", category: "Jobs", summary: "Applications are now open for Google's next internship program, spanning multiple tech disciplines.", source: "Careers Page" },
    { companyId: 1, companyName: "Google", title: "Q1 Financial Results", category: "Financial", summary: "Strong growth across global markets has led to record-breaking earnings this quarter for Google.", source: "Investor Relations" },
    // ... other posts with "source" added (Tesla, Adidas, UBS, Netflix)
  ];

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
      <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
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
              <p style={{ fontSize: "12px", color: "#777", marginTop: "0.75rem" }}>
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
        <div style={{ textAlign: "center", fontSize: "20px" }} role="img" aria-label="explore">
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
