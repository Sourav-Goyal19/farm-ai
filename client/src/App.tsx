import "./App.css";
import { AgriculturalSubsidyForm } from "./components/subsidy-form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./components/home";
import Chat from "./components/chat";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/subsidy" element={<AgriculturalSubsidyForm />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
