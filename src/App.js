
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Bookmarks from "./components/Bookmarks";
import { Routes, Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path="/bookmarks" element={<Bookmarks/>} />
        </Route>
      </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
