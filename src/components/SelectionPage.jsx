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
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [companyCategories, setCompanyCategories] = useState({});

  const toggleCompany = (companyId) => {
    const isSelected = selectedCompanies.includes(companyId);
    const updated = isSelected
      ? selectedCompanies.filter((id) => id !== companyId)
      : [...selectedCompanies, companyId];
    setSelectedCompanies(updated);

    if (!isSelected && !companyCategories[companyId]) {
      setCompanyCategories({ ...companyCategories, [companyId]: [] });
    }
    if (isSelected) {
      const newCats = { ...companyCategories };
      delete newCats[companyId];
      setCompanyCategories(newCats);
    }
  };

  const toggleCategory = (companyId, category) => {
    const current = companyCategories[companyId] || [];
    const updated = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    setCompanyCategories({ ...companyCategories, [companyId]: updated });
  };

  const handleFinish = () => {
    onComplete({ selectedCompanies, companyCategories });
  };

  return (
    <div
      style={{
        padding: "2rem 1.5rem",
        fontFamily: "'Inter', sans-serif",
        color: "#0B2F5D",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      <img
        src="/bot-main.png"
        alt="CoFilt Bot Main"
        style={{
          width: "100%",
          maxWidth: "240px",
          margin: "0 auto 1.5rem",
          display: "block",
        }}
      />

      <h2 style={{ textAlign: "center", fontSize: "20px", marginBottom: "1.5rem" }}>
        Company & Topic Selection
      </h2>

      {/* Company List */}
      <div style={{ marginBottom: "2rem" }}>
        {companies.map((company) => {
          const isSelected = selectedCompanies.includes(company.id);
          const topics = companyCategories[company.id] || [];

          return (
            <div
              key={company.id}
              style={{
                border: "1px solid #dce6f5",
                borderRadius: "10px",
                marginBottom: "1rem",
                padding: "1rem",
                backgroundColor: isSelected ? "#f3f8ff" : "#fff",
              }}
            >
              <label style={{ fontSize: "15px", display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleCompany(company.id)}
                  style={{ marginRight: "10px" }}
                />
                {company.name}
              </label>

              {isSelected && (
                <div style={{ marginTop: "1rem", paddingLeft: "0.5rem" }}>
                  <h4 style={{ fontSize: "14px", marginBottom: "0.5rem" }}>
                    Topics you're interested in:
                  </h4>
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      style={{
                        display: "inline-block",
                        marginRight: "12px",
                        marginBottom: "8px",
                        fontSize: "14px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={topics.includes(cat)}
                        onChange={() => toggleCategory(company.id, cat)}
                        style={{ marginRight: "6px" }}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <h3 style={{ fontSize: "15px", marginBottom: "0.5rem" }}>🧾 Your Selections</h3>
      <div style={{ fontSize: "14px", marginBottom: "2rem" }}>
        {selectedCompanies.length === 0 ? (
          <p style={{ color: "#999" }}>No companies selected yet.</p>
        ) : (
          selectedCompanies.map((id) => (
            <div key={id} style={{ marginBottom: "0.5rem" }}>
              <strong>{companies.find((c) => c.id === id)?.name}</strong>:{" "}
              {(companyCategories[id] || []).join(", ") || "(No topics selected)"}
            </div>
          ))
        )}
      </div>

      {/* Main Button */}
      <button
        onClick={handleFinish}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#0B2F5D",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Let’s see the News!
      </button>

      {/* Back text link */}
      <p
        onClick={onBack}
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "13px",
          color: "#888",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Back
      </p>
    </div>
  );
}

export default SelectionPage;
