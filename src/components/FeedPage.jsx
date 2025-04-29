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
    // Google
    { companyId: 1, companyName: "Google", title: "Hiring AI Engineers", category: "Jobs", summary: "We are expanding our AI division and looking for brilliant engineers to join our mission.", source: "LinkedIn" },
    { companyId: 1, companyName: "Google", title: "Pixel 9 Launch", category: "Events", summary: "Google will reveal its newest Pixel devices at the upcoming annual technology showcase event.", source: "Company Website" },
    { companyId: 1, companyName: "Google", title: "Sustainability Update", category: "News", summary: "Learn about Google's new environmental initiatives to achieve carbon neutrality across all offices.", source: "Newsroom" },
    { companyId: 1, companyName: "Google", title: "New Internship Openings", category: "Jobs", summary: "Applications are now open for Google's next internship program, spanning multiple tech disciplines.", source: "Careers Page" },
    { companyId: 1, companyName: "Google", title: "Q1 Financial Results", category: "Financial", summary: "Strong growth across global markets has led to record-breaking earnings this quarter for Google.", source: "Investor Relations" },
  
    // Tesla
    { companyId: 2, companyName: "Tesla", title: "5M Cars Produced", category: "News", summary: "Tesla has officially produced 5 million vehicles globally, setting a new industry record milestone.", source: "Tesla Blog" },
    { companyId: 2, companyName: "Tesla", title: "Berlin Gigafactory Tours", category: "Events", summary: "Visit Tesla's Gigafactory in Berlin for an exclusive look inside their production process.", source: "Events Page" },
    { companyId: 2, companyName: "Tesla", title: "Hiring Engineers", category: "Jobs", summary: "We are hiring mechanical, electrical, and software engineers for our next-generation EVs.", source: "LinkedIn" },
    { companyId: 2, companyName: "Tesla", title: "Social Impact Report", category: "Social", summary: "Tesla launches new social programs supporting education, sustainability, and local communities.", source: "Impact Report" },
    { companyId: 2, companyName: "Tesla", title: "Q1 Earnings Released", category: "Financial", summary: "Tesla's Q1 earnings beat expectations, driven by record production and new model launches.", source: "Investor Relations" },
  
    // Adidas
    { companyId: 3, companyName: "Adidas", title: "UltraBoost 2025", category: "Products", summary: "Experience the future of running comfort with the revolutionary UltraBoost 2025 edition.", source: "Product Page" },
    { companyId: 3, companyName: "Adidas", title: "Beyoncé Collaboration", category: "Social", summary: "Adidas partners with Beyoncé for the latest Ivy Park collection inspired by bold creativity.", source: "Instagram" },
    { companyId: 3, companyName: "Adidas", title: "Marathon Sponsorship", category: "Events", summary: "Proud sponsor of this year's Berlin Marathon, empowering athletes around the world.", source: "Newsroom" },
    { companyId: 3, companyName: "Adidas", title: "Hiring Designers", category: "Jobs", summary: "Join our global design team to innovate the future of athletic and streetwear fashion.", source: "Careers Page" },
    { companyId: 3, companyName: "Adidas", title: "Financial Update", category: "Financial", summary: "Adidas posts strong quarterly results, driven by growth in the lifestyle and performance sectors.", source: "Investor Relations" },
  
    // UBS
    { companyId: 4, companyName: "UBS", title: "Credit Suisse Merger", category: "News", summary: "UBS finalizes historic merger with Credit Suisse, strengthening its global banking footprint.", source: "Press Release" },
    { companyId: 4, companyName: "UBS", title: "Investor Conference", category: "Events", summary: "UBS hosts its annual Global Wealth Management Conference featuring top financial leaders.", source: "Events Page" },
    { companyId: 4, companyName: "UBS", title: "Hiring Analysts", category: "Jobs", summary: "UBS is seeking talented analysts to join its fast-growing global investment banking team.", source: "LinkedIn" },
    { companyId: 4, companyName: "UBS", title: "Charity Drive", category: "Social", summary: "Supporting local communities through UBS's new global philanthropic and volunteer initiatives.", source: "CSR Report" },
    { companyId: 4, companyName: "UBS", title: "Financial Outlook", category: "Financial", summary: "UBS projects steady growth through diversified investments and emerging market expansion.", source: "Investor Outlook" },
  
    // Netflix
    { companyId: 5, companyName: "Netflix", title: "Future Earth Release", category: "News", summary: "Netflix announces the launch of 'Future Earth,' a new documentary series about sustainability.", source: "Netflix Newsroom" },
    { companyId: 5, companyName: "Netflix", title: "Gaming Expansion", category: "Financial", summary: "Netflix invests heavily into mobile gaming, acquiring several indie studios this quarter.", source: "Investor Update" },
    { companyId: 5, companyName: "Netflix", title: "Hiring Creatives", category: "Jobs", summary: "We are hiring storytellers, producers, and designers for upcoming original Netflix productions.", source: "Careers Page" },
    { companyId: 5, companyName: "Netflix", title: "Social Impact Films", category: "Social", summary: "Netflix releases a series of impactful films highlighting global social and cultural issues.", source: "Company Blog" },
    { companyId: 5, companyName: "Netflix", title: "Netflix Festival", category: "Events", summary: "Join the world's first Netflix Festival, celebrating creativity, innovation, and storytelling.", source: "Events Page" },
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
