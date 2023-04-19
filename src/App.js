// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/* Eric Horn
 hornericr@me.com
Started 2/14 - worked 5 hours 
Completed 2/15 - worked 3 hours 
I attest the work done and completed in this assignment is my own*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import BasicTable from "./Table";
import Details from "./components/detailsComponent";
import background_image from "./images/background_image.jpg";
// import Chart from "./components/chartComponent";

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