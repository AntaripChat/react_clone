import Villa2 from "./assets/villa2.jpg";
import Villa from "./assets/2.-VILLA.jpg";
import logo from './assets/16_Logo.png';
import brand from './assets/brand_logo.jpg';

export default function Hero2() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 mt-10">
  {/* First Image Section */}
  <div className="w-full h-auto max-w-lg md:max-w-sm aspect-[4/3]">
    <img
      src={Villa2}
      alt="Villa 2"
      className="w-full h-full object-cover"
    />
    <div className="flex justify-center items-center mt-4">
      <img
        src={logo}
        alt="Logo"
        className="w-auto h-30" // Adjust size as needed
      />
    </div>
  </div>

  {/* Second Image Section */}
  <div className="w-full h-auto max-w-lg md:max-w-sm aspect-[4/3]">
    <img
      src={Villa}
      alt="Villa"
      className="w-full h-full object-cover"
    />
    <div className="flex justify-center items-center mt-4">
      <img
        src={brand}
        alt="Logo"
        className="w-auto h-30" // Adjust size as needed
      />
    </div>
  </div>
</div>

    </>
  );
}
