import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Simple from "./components/Simple";
import KeyFrames from "./components/KeyFrames";
import Button from "./components/Button";
import Text from "./components/Text";
import TransitionType from "./components/TransitionType";
import Variants from "./components/Variants";
import ScrollReveal from "./components/ScrollReveal";
import Counter from "./Counter";

export default function App() {
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <div className="flex">
                  <div>
                    <Outlet />
                  </div>

                  <div>
                    {location.pathname !== "/" && (
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition m-8"
                        onClick={() => navigate(-1)}
                      >
                        Go Back{" "}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            }
            exact
          >
            <Route path="/simple" element={<Simple />} />
            <Route path="/keyframe" element={<KeyFrames />} />
            <Route path="/button-tap" element={<Button />} />
            <Route path="/text-motion" element={<Text />} />
            <Route path="/transition" element={<TransitionType />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/scroll" element={<ScrollReveal />} />
            <Route path="/variants" element={<Variants />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
