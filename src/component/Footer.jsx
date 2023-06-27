import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="center">
        <div className="left">
          <img src="/icons/brand-icon.svg" alt="" />
          <div className="text">
            <span>© 2023 Gurmanius LLC All rights reserved.</span>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy and Cookies Statement</li>
              <li>Cookie consent</li>
              <li>Site Map</li>
              <li>How the site works</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <select name="$ USD" id="">
            <option value="">$ USD</option>
            <option value="">ლ GEL</option>
            <option value="">& RUB</option>
          </select>
          <select name="English" id="">
            <option value="">English</option>
            <option value="">Georgian</option>
            <option value="">Russian</option>
          </select>
        </div>
      </div>
      <div className="center">
        <text>
          This is the version of our website addressed to speakers of English in
          the United States. If you are a resident of another country or region,
          please select the appropriate version of Tripadvisor for your country
          or region in the drop-down menu. more
        </text>
      </div>
    </div>
  );
}

export default Footer;
