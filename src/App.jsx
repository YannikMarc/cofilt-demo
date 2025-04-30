import { useState } from "react";
import LandingPage from "./components/LandingPage";
import SelectionPage from "./components/SelectionPage";
import FeedPage from "./components/FeedPage";
import PageDocs from "./components/PageDocs";

const devMode = true; // Set to false when you're done

// Capitalize page string and append "Page"
const capitalizePage = (name) => name.charAt(0).toUpperCase() + name.slice(1) + "Page";

function App() {
  const [page, setPage] = useState("landing");
  const [selections, setSelections] = useState({});

  const handleStart = () => setPage("select");
  const handleSelectionComplete = (selected) => {
    setSelections(selected);
    setPage("feed");
  };
  const handleBackToLanding = () => {
    setSelections({});
    setPage("landing");
  };
  const handleBackToSelection = () => {
    setPage("select");
  };

return (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#000",
      padding: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* Centered container with fixed width for layout */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2rem",
        maxWidth: "calc(390px + 280px + 2rem)", // phone + sidebar + spacing
        width: "100%",
      }}
    >
      {/* Phone UI */}
      <div
        style={{
          width: "600px",
          height: "720px",
         
          border: "16px solid #0B2F5D",
          borderRadius: "48px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {page === "landing" && <LandingPage onStart={handleStart} />}
        {page === "select" && (
          <SelectionPage
            onComplete={handleSelectionComplete}
            onBack={handleBackToLanding}
          />
        )}
        {page === "feed" && (
          <FeedPage selections={selections} onBack={handleBackToSelection} />
        )}
      </div>

      {/* Info Sidebar */}
      {devMode && <PageDocs page={page === "select" ? "SelectionPage" : capitalizePage(page)} />}

    </div>
  </div>
);

}

export default App;
