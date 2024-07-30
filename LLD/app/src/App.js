import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="text-3xl underline bg-black text-white text-center">
        Hello world!
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/team">Team</a>
        <a href="/login">Login</a>
        <label className="px-10">
          Select language:
          <select
            name=""
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="text-black"
          >
            <option value="en">English</option>
            <option value="hi">Hindhi</option>
            <option value="ge">German</option>
          </select>
        </label>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About lang={lang} />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
