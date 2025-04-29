import { useState } from "react";

const companies = [
  {
    id: 1,
    name: "Züritech AG",
    categories: ["Jobs", "News", "Products"],
    posts: [
      {
        title: "We're hiring a Frontend Developer!",
        category: "Jobs",
        summary: "Join our growing team and help us shape the digital future.",
      },
      {
        title: "Züritech wins 2025 Innovation Award",
        category: "News",
        summary: "Our team was recognized for outstanding progress in AI applications.",
      },
    ],
  },
  {
    id: 2,
    name: "AlpConnect",
    categories: ["Events", "Social"],
    posts: [
      {
        title: "Meet us at Startup Day Zurich!",
        category: "Events",
        summary: "We're showcasing our latest connectivity solution for smart homes.",
      },
    ],
  },
];

const categories = ["Jobs", "News", "Products", "Events", "Social"];

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [followedCompanies, setFollowedCompanies] = useState([]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleCompanyFollow = (id) => {
    setFollowedCompanies((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const visiblePosts = companies
    .filter((c) => followedCompanies.includes(c.id))
    .flatMap((c) =>
      c.posts.filter((p) => selectedCategories.includes(p.category)).map((p) => ({ ...p, company: c.name }))
    );

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>CoFilt App Preview</h1>
      <p style={{ textAlign: "center", fontSize: "14px", marginBottom: "1rem" }}>
        Choose your interests and follow companies to see personalized updates.
      </p>

      <h2>Select Categories:</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            style={{
              border: "1px solid gray",
              padding: "5px 10px",
              borderRadius: "8px",
              backgroundColor: selectedCategories.includes(cat) ? "#4CAF50" : "white",
              color: selectedCategories.includes(cat) ? "white" : "black",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2>Follow Companies:</h2>
      <div style={{ marginBottom: "24px" }}>
        {companies.map((c) => (
          <div
            key={c.id}
            onClick={() => toggleCompanyFollow(c.id)}
            style={{
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "8px",
              backgroundColor: followedCompanies.includes(c.id) ? "#DFF2BF" : "white",
              cursor: "pointer",
            }}
          >
            {c.name}
          </div>
        ))}
      </div>

      <h2>Your Feed:</h2>
      {visiblePosts.length === 0 ? (
        <p>No posts match your selection.</p>
      ) : (
        <div>
          {visiblePosts.map((post, idx) => (
            <div
              key={idx}
              style={{
                border: "1px solid gray",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "12px",
              }}
            >
              <h3>{post.title}</h3>
              <p style={{ fontSize: "12px", color: "gray" }}>
                {post.company} \u2022 {post.category}
              </p>
              <p>{post.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
