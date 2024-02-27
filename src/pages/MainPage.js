import React from "react";
import logo from "../assets/logo.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import CallIcon from "@mui/icons-material/Call";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div className="main-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logoImage" />
      </div>
      <div className="content">
        <div>
          <img src={image1} alt="image1" className="image1" />
        </div>
        <div>
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>

          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={image2} alt="image2" className="image2" />
          <p>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="para-2">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={image3} alt="image3" className="image3" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </div>
      <hr
        style={{
          background: "red",
          color: "red",
          borderColor: "red",
          width: "97%",
        }}
      />
      <div className="footer">
        <p>
          <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        </p>
        <p>
          CHEMICALS & PROCESS <span>&#124;</span> POWER <span>&#124;</span>{" "}
          WATER & WASTE WATER <span>&#124;</span> OILS & GAS <span>&#124;</span>{" "}
          PHARMA <span>&#124;</span> SUGARS & DISTILLERIES <span>&#124;</span>{" "}
          PAPER & PULP <span>&#124;</span> MARINE & DEFENCE <span>&#124;</span>{" "}
          METAL & MINING <span>&#124;</span> FOOD & BEVERAGE <span>&#124;</span>{" "}
          PETROCHEMICAL & REFINERIES <span>&#124;</span> SOLAR{" "}
          <span>&#124;</span> BUILDING <span>&#124;</span> HVAC{" "}
          <span>&#124;</span> FIRE <span>&#124;</span> FIGHTING{" "}
          <span>&#124;</span> AGRICULTURE & RESIDENTIAL
        </p>
        <div className="contact">
          <div className="contactMethod">
            <span className="callicon">
              <CallIcon style={{ color: "red" }} />
            </span>
            <span>
              Toll free <b>1800 200 1234</b>
            </span>
          </div>
          <div className="contactMethod">
            <FacebookRoundedIcon />
            <span>www.facebook.com/cripumps</span>
          </div>
          <div className="contactMethod">
            <LanguageRoundedIcon />
            <span>www.crigroups.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
