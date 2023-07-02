import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
    return (
      <div className="flex justify-around mt-5 p-5 text-gray-600" id="contact">
        <div className="text-left text-sm">
          <p>Contact: lavymeng@gmail.com</p>
          <p>Copyright&#169;2023 Lavy Meng</p>
        </div>
        <AnchorLink href="#profile" className="">
          <img
            src={require("../image/up-arrow.png")}
            alt="arrow-up"
            className="float-right w-10 h-10"
          />
        </AnchorLink>
      </div>
    );
}

export default Footer;
