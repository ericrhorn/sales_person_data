import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import BasicTable from "./Table";
import Details from "./components/detailsComponent";
import background_image from "./images/background_image.jpg";

export default function App() {
  return (
    <div className="background" style={{backgroundImage: `url(${background_image})`, backgroundRepeat: "no-repeat",  backgroundPosition: "center",backgroundSize: "cover", height: "100vh"}}>
      <div className="App">
        <div className="main_page_container" >
          <h2 style={{color: "white"}}>Sales Corp Scored Opportunities</h2>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BasicTable />} />
              {/* <Route path="/chart" element={<Chart />} /> */}
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
          {/* <BasicTable/> */} 
        </div>
      </div>
    </div>
  );
}