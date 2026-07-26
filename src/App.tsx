import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudyPage from "./pages/CaseStudy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
