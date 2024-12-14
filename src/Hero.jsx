import navImg from "./assets/navImg.jpg";
import VILLA from './assets/VILLA.JPG';
import Logo from './assets/Logo_Villa.png';
function Hero() {
  return (
    <>
      <div className=" relative ">

        <h1 className="text-center font-bodoni font-bold mt-8 text-3xl">
          GENERAL INFORMATION
        </h1>
        
        <div className="flex justify-center mt-10">
                    <ul className="flex space-x-12">
                        <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white">General Plan</li>
                        <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white">Collaboration Letter</li>
                        <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white">Property Book</li>
          
                    </ul>
                    
         </div>
         <h1 className="text-center font-bodoni font-bold text-4xl mt-14" >TURNKEY PROJECTS</h1>
         <div className=" flex justify-center items-center mt-10">
         <img src={VILLA} className="w-full h-auto max-w-2xl  "/>
         </div>
         <div className=" flex justify-center items-center mt-10">
         <img src={Logo} />
         </div>
         </div>
    </>
  );
}

export default Hero;
