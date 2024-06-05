const Footer = () => {
  return (
    <div className="bg-[#00343E] h-[900px]  -mt-20">
      <div className="w[1200px h-[680px] mx-auto pt-40">
        <div className="flex justify-around">
          <img src="./Logo-light.png" className="w-[220px] h-[60px] " />
          <div className="flex gap-4 text-sm">
            <div className="flex gap-2 justify-center items-center">
              <img src="./Footer/Call-icon.svg" alt="" className="w-3" />
              <p className="">(691) 201-24536</p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img src="./Footer/Mail-icon.svg" alt="" className="w-3" />
              <p className="">info@monstersteamer.net</p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img src="./Footer/Location-icon.svg" alt="" className="w-3" />
              <p className="">San Diego, CA</p>
            </div>
          </div>
          <div className=" text-[#00CCF8] flex gap-3">
            <img src="./Footer/facebook-icon.svg" alt="" className="w-5" />
            <img src="./Footer/insta-icon.svg" alt="" className="w-5" />
            <img src="./Footer/top-icon.svg" alt="" className="w-5" />
          </div>
        </div>
        <footer className="mt-10 footer text-white bg-[#002932] p-10 w-[1200px] h-[400px] rounded-lg mx-auto ">
          <nav>
            <h6 className="footer-title text-lg font-bold">About</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
            <a className="link link-hover">Commercial Cleaning</a>
            <a className="link link-hover">Air Duct Cleaning</a>
            <a className="link link-hover">Dryer Vent Cleaning</a>
          </nav>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <img src="./Footer/h.png" alt="" className="w-[105px] mb-10" />
            <div className="">
              <p className=" text-xs">We Accept All Major Credit Cards</p>
              <div className="flex gap-2 mt-1">
                <img src="./Footer/v.svg" alt="" />
                <img src="./Footer/m.svg" alt="" />
                <img src="./Footer/d.svg" alt="" />
                <img src="./Footer/a.svg" alt="" />
              </div>
            </div>
            <div className="bg-[#153339] w-[220px] mt-10 p-4">
              <img src="./Reviews/5.svg" alt="" />
              <p className=" text-xs">
                1200+ Yelp & Google <br /> reviews
              </p>
            </div>
          </nav>
        </footer>
        <footer className="footer items-center px-20 mt-10 ">
          <aside className="items-center grid-flow-col">
            
            <p>© 2024 Monster Steamer Carpet Cleaning.</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p>Built by Jeremy Ellsworth Designs LLC</p>
            
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
