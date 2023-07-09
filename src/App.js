import React from "react";
import "./Assets/Styles/Main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Cyadinternational from "./Pages/Cyadinternational";
import Services from "./Pages/Services";
import Cameotech from "./Pages/Cameotech";
import Congolocation from "./Pages/Congolocation";
import Tanzanialocation from "./Pages/Tanzanialocation";
import Ugandalocation from "./Pages/Ugandalocation";
import Whoarewe from "./Pages/Whoarewe";
import Capacityexp from "./Pages/Capacityexp";
import Businessplan from "./Pages/Businessplan";
import Businessoperation from "./Pages/Businessoperation";
import Digitalcustomer from "./Pages/Digitalcustomer";
import Digitalcustomerkyc from "./Pages/Digitalcustomerkyc";
import Digitalcustomerbsfi from "./Pages/Digitalcustomerbsfi";
import Cameotechsa from "./Pages/Cameotechsa";
import Cameotechtz from "./Pages/Cameotechtz";
import Certustechnologies from "./Pages/Certustechnologies";
import Careers from "./Pages/Careers";
import Ourpromoters from "./Pages/Ourpromoters";
import Ourlocation from "./Pages/Ourlocations";
import Digitalwarehousing from "./Pages/Digitalwarehousing";
import Documentms from "./Pages/Documentms";
import "animate.css/animate.min.css";
function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Cyaninternational" element={<Cyadinternational />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Cameotech" element={<Cameotech />} />
          <Route path="/Congolocation" element={<Congolocation />} />
          <Route path="/Tanzanialocation" element={<Tanzanialocation />} />
          <Route path="/Ugandalocation" element={<Ugandalocation />} />
          <Route path="/Whoarewe" element={<Whoarewe />} />
         
      
          <Route path="/Businessoperation" element={<Businessoperation/>} />
          <Route path="/Digitalexperience" element={<Digitalcustomer/>} />
          <Route path="/Digitalexperiencekyc" element={<Digitalcustomerkyc/>} />
          <Route path="/Digitalexperiencebsfi" element={<Digitalcustomerbsfi/>} />
          <Route path='/Digitalwarehousing' element={<Digitalwarehousing/>}/>
          <Route path='/Documentmanagesystem' element={<Documentms/>}/>
          <Route path='/Cameotechsa' element={<Cameotechsa/>}/>
          <Route path='/Cameotechtz' element={<Cameotechtz/>}/>
          <Route path='/Certustech' element={<Certustechnologies/>}/>
          <Route path='/Careers' element={<Careers/>}/>
          <Route path='/Ourpromoters' element={<Ourpromoters/>}/>
          <Route path='/Ourlocation' element={<Ourlocation/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
