
import ScrambleText from "../../components/ScrambleText";
import "./Navbar.css";


const Navbar = () => {

    const nav = <>
    <li>
            <details>
              <summary className="hover-text w-[20vh] pe-4 ">{ScrambleText({text:"Services"})} </summary>
              <ul className=" flex pb-3 justify-evenly bg-white rounded-md w-[57vh] ">
              <li className=" " >
                  <a className=" hover:bg-[#00CCF8] hover:text-white">Carpet Cleaning</a>
                  <a className=" hover:bg-[#00CCF8] hover:text-white">Upholstery Cleaning</a>
                  <a className=" hover:bg-[#00CCF8] hover:text-white">Tile and Grout Cleaning</a>
                  <a className=" hover:bg-[#00CCF8] hover:text-white">Commercial Cleaning</a>
                </li>
                <li className="pe-6">
                  <a className=" hover:bg-[#00CCF8] hover:text-white">Air Duct Cleaning</a>
                  <a className=" hover:bg-[#00CCF8] hover:text-white">Water Damage</a>
                  <a className=" hover:bg-[#00CCF8] hover:text-white">Pressure Washing</a>
                  <a className=" hover:bg-[#00CCF8] hover:text-white">Dryer Vent Cleaning</a>
                </li>
                
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="w-[16vh]" >{ScrambleText({text:"About"})}</summary>
              <ul className=" bg-white p-6 ">
             
              <li>
                  <a className=" hover:bg-[#00CCF8] hover:text-white">About Us</a>
                </li>
                <li>
                  <a className=" hover:bg-[#00CCF8] hover:text-white pe-6 w-[22vh]">About Company Policy</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="w-[20vh] text-center">{ScrambleText({text: "Subscription"})}</a>
          </li>
          <li>
            <a className="w-[14vh] text-center">{ScrambleText({text: "Blog"})}</a>
          </li>
          <li>
            <a className="w-[16vh] text-center">{ScrambleText({text: "Contact"})}</a>
          </li></>
  return (
    <div className="navbar bg-transparent text-[#153339] fixed ms-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"> <img className="w-[23vh] h-[5vh]" src="./Logo-Dark.png" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
          {nav}

        </ul>
      </div>
      <div className="navbar-end me-20">
        <a className="w-[22vh] h-[7vh] rounded-3xl bg-[#00CCF8] text-white text-center pt-2">Book Online</a>
      </div>
    </div>
  );
};

export default Navbar;
