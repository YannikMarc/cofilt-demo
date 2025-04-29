import { useState } from "react";
import LandingPage from "./components/LandingPage";
import SelectionPage from "./components/SelectionPage";
import FeedPage from "./components/FeedPage";

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "390px",
          height: "844px",
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
    </div>
  );
}

export default App;
