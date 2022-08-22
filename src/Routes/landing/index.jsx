import { Routes, Route } from "react-router-dom";
import NotFound from "pages/notFound";
import Landing from "pages/landing";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default LandingRoutes;
