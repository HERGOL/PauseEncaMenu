import React, { useState } from "react";
import { IoPinOutline, IoCallOutline, IoAlarmOutline, IoWifiOutline } from "react-icons/io5";

export default function Logo() {
  const [pinAnimation, setPinAnimation] = useState(true);


  return (
    <div className="logo-container">
      <img
        src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,q_100,w_94/v1685362392/342056981_5886440091453836_4061399767397039197_n-removebg-preview_yeyhmy.png"
        alt="Logo PauseEnca"
      />
      <div className="InfosContainer">
        <div className="location-container" >
          <IoPinOutline className={`location-icon ${pinAnimation ? "pin-animation" : ""}`} size={22} color="#191919" />
          <span className="address">
            <a href="https://goo.gl/maps/rWXr2xP8DoTGzHjw7" className="address-link">
              Tizi Ouzou
            </a>
          </span>
        </div>
        <div className="num-container">
          <IoCallOutline className="num-icon" size={22} color="#191919" />
          <span className="num">026 119 306</span>
        </div>
        <div className="clock-container">
          <IoAlarmOutline className="clock-icon" size={22} color="#191919" />
          <span className="clock">7h00/20h00</span>
        </div>
        <div className="wifi-container">
          <IoWifiOutline className="wifi-icon" size={22} color="#191919" />
          <span className="wifi">Wifi Disponible</span>
        </div>
      </div>
    </div>
  );
}
