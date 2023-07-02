import React, { useState} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar() {
  const [activeBtn, setActiveBtn] = useState(0)

    return (
      <div
        className="sticky top-0 m-auto  p-5 box-border shadow-lg bg-white Navbar"
        id="home"
      >
        <ul className="list-none flex gap-8 justify-center box-border font-semibold">
          <li
            className={
              activeBtn === 0
                ? "text-white bg-slate-500 box-border rounded"
                : "text-black bg-white"
            }
            onClick={() => setActiveBtn(0)}
          >
            <AnchorLink
              href="#profile"
              className=" hover:bg-sky-900 rounded-lg hover:shadow-md hover:text-white p-5 {activeSection === 0 ? 'Navbar-item Navbar-item--active bg-green-500' : 'Navbar-item'}"
            >
              Home
            </AnchorLink>
          </li>
          <li
            className={
              activeBtn === 1
                ? "text-white bg-slate-500 box-border rounded"
                : "text-black bg-white"
            }
            onClick={() => setActiveBtn(1)}
          >
            <AnchorLink
              href="#project"
              className="hover:bg-sky-900 p-5 rounded-lg hover:text-white hover:shadow-md"
            >
              Project
            </AnchorLink>
          </li>
          <li
            className={
              activeBtn === 2
                ? "text-white bg-slate-500 box-border rounded"
                : "text-black bg-white"
            }
            onClick={() => setActiveBtn(2)}
          >
            <AnchorLink
              href="#contact"
              className="hover:bg-sky-900 p-5 rounded-lg hover:text-white hover:shadow-md"
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    );
}

export default NavBar
