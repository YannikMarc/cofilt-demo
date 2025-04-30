import { useState } from "react";

function PageDocs({ page }) {
  const [step, setStep] = useState(0);

  const isLanding = page === "LandingPage";
  const isSelection = page === "SelectionPage";
  const isFeedPage = page === "FeedPage";
  const isProfilPage = page === "ProfilePage";
  const isSourcePage = page === "SourcePage";

  const steps = isLanding
    ? [
        {
          title: "Welcome",
          content: (
            <>
              Hello! It's so nice that you're taking a moment out of your busy life to check out this
              little project. Go through this mock-up and play around — it’s meant to be fun and super simple.
              <br /><br />
              But first let's get started with a little introduction.
            </>
          ),
        },
        {
          title: "What is CoFilt?",
          content: (
            <>
              CoFilt is your personal feed for company updates. It’s a focused space where you only 
              see what truly matters to you — no endless scrolling, no irrelevant posts, and especially no noise.
              <br /><br />
              Whether it's job offers, financial updates, events, or news, CoFilt filters it all
              based on your interests and delivers a clean, focused stream of updates.
            </>
          ),
        },
        {
          title: "A look into the future",
          content: (
            <>
              In the real version of CoFilt, you’ll be able to create an account using your personal email
              and securely log in to access your customized feed.
              <br /><br />
              This mock-up shows you what that could feel like — everything here is pre-filled just
              to give you a taste of the real experience.
              <br /><br />
              I would say it's time to hit the Login button to see the next page.
            </>
          ),
        },
      ]
    : isSelection
    ? [
        {
          title: "Select Companies",
          content: (
            <>
              This is where your personalized feed begins. You choose which companies you want to follow from a handpicked list — companies like Google, Tesla, Netflix, and more.
              <br /><br />
              For each company, you can select the type of content you're interested in: Jobs, News, Events, Social, or Financial. It's all in your hands.
            </>
          ),
        },
        {
          title: "Why it matters",
          content: (
            <>
              This page is the heart of CoFilt. Every selection you make here shapes your feed. Nothing irrelevant, nothing you didn’t ask for — just the updates you care about.
              <br /><br />
              Your time is valuable, and your feed should respect that. CoFilt makes sure you only see what actually matters to you.
            </>
          ),
        },
        {
          title: "A look into the future",
          content: (
            <>
              In the real CoFilt experience, you’ll be free to follow all the companies available on the platform — and decide for each one exactly which areas you're interested in.
              <br /><br />
              Once you’ve made your selections, they’ll be saved to your account and can be adjusted at any time. Think of it like subscribing to a newspaper — but instead of getting the whole paper, you only see the sections that truly matter to you.
              <br /><br />
              Try it out. Add some companies and topics to your selection and hit the button.
            </>
          ),
        },
      ]
    : isFeedPage
    ? [
        {
          title: "Your Personalized Feed",
          content: (
            <>
              Here’s where all the magic comes together. Based on the companies and topics you selected,
              CoFilt generates a clean and simple feed — no fluff, no distractions.
              <br /><br />
              You’ll see job offers, financial updates, events, and other relevant posts from only the companies you care about.
              Tap any post to go directly to its original source — such as a company homepage, LinkedIn post, or careers page.
            </>
          ),
        },
        {
          title: "How It Works",
          content: (
            <>
              The feed is sorted by date (newest first) and color-coded by topic for easier navigation.
              You can always reload the page, go back to update your selections, or explore your profile.
              <br /><br />
              In CoFilt, you don’t like, comment, or repost. This isn’t social media — it’s your private space to stay informed.
              No pressure to engage. Just updates that matter.
            </>
          ),
        },
        {
          title: "A look into the future",
          content: (
            <>
              CoFilt will be even more powerful. You’ll be able to set alerts for breaking news, mark posts as favorites, or save them for later reading.
              <br /><br />
              You’ll fully personalize your feed based on your needs and wishes — selecting exactly what you want to follow, and how you want to receive it.
              <br /><br />
              Feel free to play around and maybe you will discover some additonal pages.
            </>
          ),
        },
      ]
    : isProfilPage
    ? [
        {
          title: "Your Account Center",
          content: (
            <>
              The Profile Page is your personal hub inside CoFilt. It’s where you’ll manage everything about your experience — from account information to how you receive updates.
            </>
          ),
        },
        {
          title: "What you’ll control",
          content: (
            <>
              Expect options like adjusting notifications, switching languages, reviewing followed companies, or opting into beta features.
              <br /><br />
              Think of it like your CoFilt control room — clear, flexible, and yours.
            </>
          ),
        },
        {
          title: "A look into the future",
          content: (
            <>
              In the real app, you’ll be able to edit preferences directly, change your email, and more. But for now — just imagine how smooth and tailored it’ll feel when it’s fully live.
              <br /><br />
              And just to be clear: Even though this might remind you of a social media platform, CoFilt is not. Your profile is private — no one can see your information, and you won’t be able to post or share content. It’s about staying informed, not being seen.
            </>
          ),
        },
      ]
    : isSourcePage
    ? [
        {
          title: "Leaving CoFilt",
          content: (
            <>
              Normally, this page would redirect you to the original source of the post — like the
              company’s LinkedIn, blog, or career site.
              <br /><br />
              We’re not linking externally here, but this page simulates what that jump would look like.
            </>
          ),
        },
        {
          title: "A look into the future",
          content: (
            <>
              Posts would open in a browser tab or embedded view — giving you direct access to full details,
              job descriptions, event registrations, and more.
            </>
          ),
        },
      ]
    : [];

  if (steps.length === 0) return null;

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#f9fbff",
        padding: "2.0rem",
        borderRadius: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        fontFamily: "'Inter', sans-serif",
        fontSize: "13px",
        color: "#1f2a40",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "400px",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#0B2F5D",
          marginBottom: "1.0rem",
        }}
      >
        Your Guidance
      </h2>

      <div style={{ flexGrow: 1 }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "0.75rem" }}>
          {steps[step].title}
        </h3>
        <p style={{ margin: 0, lineHeight: "1.6" }}>{steps[step].content}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
        }}
      >
        <button
          onClick={handlePrev}
          disabled={step === 0}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: step === 0 ? "#eee" : "#fff",
            cursor: step === 0 ? "not-allowed" : "pointer",
          }}
        >
          ←
        </button>

        <button
          onClick={handleNext}
          disabled={step === steps.length - 1}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: step === steps.length - 1 ? "#eee" : "#fff",
            cursor: step === steps.length - 1 ? "not-allowed" : "pointer",
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default PageDocs;
