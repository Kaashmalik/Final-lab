import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";
import EmojiesHub from "./Component/EmojiesHub";
import DetailedCategorieEmoji from "./Component/DetailedCategorieEmoji";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
          <Route path="/" element={<EmojiesHub/>}></Route>
          <Route path="/emojies" element={<EmojiesHub/>}></Route>
          <Route path="/detailedEmojies" element={<DetailedCategorieEmoji/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
