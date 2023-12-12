import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ProductPage from "../../pages/ProductPage";
import PremiumServicesPage from "../../pages/PremiumServicesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/premium-services" element={<PremiumServicesPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
    </Routes>
  );
};

export default AppRoutes;
