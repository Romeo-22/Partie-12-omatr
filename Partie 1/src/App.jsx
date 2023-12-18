import { Routes, Route } from "react-router-dom";
import ListVoyages from "./Components/ListVoyages";
import DetailsVoyage from "./Components/DetailsVoyage";

export default function App() {
  return (
    <Routes>
      <Route index element={<ListVoyages />} />
      <Route path="/DetailsVoyage/:journeyId" element={<DetailsVoyage />} />
    </Routes>
  );
}
