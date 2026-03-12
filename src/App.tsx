import { BrowserRouter, Routes, Route } from "react-router-dom";
import BryantelHomepage from "./BryantelHomepage";
import AboutUsPage from "./AboutUsPage";

function SolutionsPage() {
  return <div className="p-10 text-2xl">Solutions Page</div>;
}

function ProductsPage() {
  return <div className="p-10 text-2xl">Products Page</div>;
}

function AmsPage() {
  return <div className="p-10 text-2xl">Advanced Monitoring System Page</div>;
}

function CreditPlusPage() {
  return <div className="p-10 text-2xl">Credit+ Page</div>;
}

function WhyBryantelPage() {
  return <div className="p-10 text-2xl">Why Bryantel Page</div>;
}

function ContactPage() {
  return <div className="p-10 text-2xl">Contact Page</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BryantelHomepage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/ams" element={<AmsPage />} />
        <Route path="/products/credit-plus" element={<CreditPlusPage />} />
        <Route path="/why-bryantel" element={<WhyBryantelPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}