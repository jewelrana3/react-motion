import Button from "./components/Button";
import KeyFrames from "./components/KeyFrames";
import Text from "./components/Text";
import TransitionType from "./components/TransitionType";
import Variants from "./components/Variants";
import ScrollReveal from "./components/ScrollReveal";
// import Strager from "./components/Strager";
import Counter from "./Counter";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Simple from "./components/Simple";
// import Counter from "./Counter";

export default function App() {
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location.pathname !== "/" && (
        <button onClick={() => navigate(-1)} style={{ margin: "10px" }}>
          Back Button
        </button>
      )}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} exact />
          <Route path="/simple" element={<Simple />} />
          <Route path="/keyframe" element={<KeyFrames />} />
          <Route path="/button-tap" element={<Button />} />
          <Route path="/text-motion" element={<Text />} />
          <Route path="/transition" element={<TransitionType />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/scroll" element={<ScrollReveal />} />
          <Route path="/variants" element={<Variants />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
