import { useState } from "react";
import LandingPage from "./components/LandingPage";
import SelectionPage from "./components/SelectionPage";
import FeedPage from "./components/FeedPage";
import PageDocs from "./components/PageDocs";
import ProfilePage from "./components/ProfilePage"; // ← placeholder
import SourcePage from "./components/SourcePage";   // ← placeholder

const devMode = true;

// Capitalize page string and append "Page"
const capitalizePage = (name) => name.charAt(0).toUpperCase() + name.slice(1) + "Page";

function App() {
  const [page, setPage] = useState("landing");
  const [selections, setSelections] = useState({});
  const [selectedPost, setSelectedPost] = useState(null); // for SourcePage

  // Navigation handlers
  const handleStart = () => setPage("select");
  const handleSelectionComplete = (selected) => {
    setSelections(selected);
    setPage("feed");
  };
  const handleBackToLanding = () => {
    setSelections({});
    setPage("landing");
  };
  const handleBackToSelection = () => setPage("select");
  const handleGoToProfile = () => setPage("profile");
  const handleReloadFeed = () => setPage("feed");
  const handlePostClick = (post) => {
    setSelectedPost(post);
    setPage("source");
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2rem",
          maxWidth: "calc(400px + 400px + 2rem)", // phone + docs + spacing
          width: "100%",
        }}
      >
        {/* Mobile Frame */}
        <div
          style={{
            width: "400px",
            height: "800px",
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
            <SelectionPage initialSelections={selections} onComplete={handleSelectionComplete} onBack={handleBackToLanding} />
          )}
          {page === "feed" && (
            <FeedPage
              selections={selections}
              onBack={handleBackToSelection}
              onGoToProfile={handleGoToProfile}
              onReload={handleReloadFeed}
              onPostClick={handlePostClick}
            />
          )}
          {page === "profile" && <ProfilePage onBack={() => setPage("feed")} />}
          {page === "source" && <SourcePage post={selectedPost} onBack={handleReloadFeed} />}
        </div>

        {/* Right Sidebar (Docs) */}
        {devMode && (
          <PageDocs page={page === "select" ? "SelectionPage" : capitalizePage(page)} />
        )}
      </div>
    </div>
  );
}

export default App;
