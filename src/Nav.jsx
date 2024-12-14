import navImg from "./assets/navImg.jpg";
function Nav() {
  return (
    <>
      <div className=" relative w-full h-screen">
        <img
          src={navImg}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      
    </>
  );
}

export default Nav;
