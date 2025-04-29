import { useState } from "react";

const companies = [
  { id: 1, name: "Google" },
  { id: 2, name: "Tesla" },
  { id: 3, name: "Adidas" },
  { id: 4, name: "UBS" },
  { id: 5, name: "Netflix" },
];

const categories = ["Jobs", "News", "Events", "Social", "Financial"];

function SelectionPage({ onComplete, onBack }) {
  const [selectedCompanyId, setSelectedCompanyId] = useState(companies[0].id);
  const [companyCategories, setCompanyCategories] = useState({});

  const toggleCategory = (companyId, category) => {
    const current = companyCategories[companyId] || [];
    if (current.includes(category)) {
      setCompanyCategories({
        ...companyCategories,
        [companyId]: current.filter((c) => c !== category),
      });
    } else {
      setCompanyCategories({
        ...companyCategories,
        [companyId]: [...current, category],
      });
    }
  };

  const handleFinish = () => {
    const selectedCompanies = Object.keys(companyCategories).map((id) => parseInt(id));
    onComplete({ selectedCompanies, companyCategories });
  };

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "20px",
        backgroundColor: "#D4E6F9",
        color: "#0B2F5D",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "20px", marginBottom: "1rem" }}>
        Select a Company
      </h2>

      <select
        value={selectedCompanyId}
        onChange={(e) => setSelectedCompanyId(parseInt(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "10px",
          marginBottom: "1.5rem",
          border: "1px solid #88B8ED",
        }}
      >
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>

      <h3 style={{ fontSize: "16px", marginBottom: "0.5rem" }}>
        Select Topics for {companies.find((c) => c.id === selectedCompanyId).name}:
      </h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "2rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(selectedCompanyId, cat)}
            style={{
              padding: "6px 12px",
              backgroundColor: (companyCategories[selectedCompanyId] || []).includes(cat)
                ? "#0B2F5D"
                : "white",
              color: (companyCategories[selectedCompanyId] || []).includes(cat)
                ? "white"
                : "#0B2F5D",
              border: "1px solid #0B2F5D",
              borderRadius: "20px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <h3 style={{ fontSize: "16px", marginBottom: "0.5rem" }}>Your Selections:</h3>
      <div style={{ fontSize: "14px", marginBottom: "1.5rem" }}>
        {Object.entries(companyCategories).length === 0 ? (
          <p>No selections yet.</p>
        ) : (
          Object.entries(companyCategories).map(([companyId, cats]) => (
            <div key={companyId} style={{ marginBottom: "0.5rem" }}>
              <strong>{companies.find((c) => c.id === parseInt(companyId)).name}</strong>:{" "}
              {cats.join(", ") || "(No topics selected)"}
            </div>
          ))
        )}
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={onBack}
          style={{
            flex: 1,
            padding: "12px",
            backgroundColor: "white",
            color: "#0B2F5D",
            border: "1px solid #0B2F5D",
            borderRadius: "12px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Back
        </button>
        <button
          onClick={handleFinish}
          style={{
            flex: 2,
            padding: "12px",
            backgroundColor: "#0B2F5D",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Let's see the News!
        </button>
      </div>
    </div>
  );
}

export default SelectionPage;
