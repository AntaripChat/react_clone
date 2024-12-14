export default function Hero1() {
  return (
    <>
      <div className=" relative ">
        <div className="flex justify-center mt-10">
          <ul className="flex space-x-12">
            <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white cursor-pointer transition-duration-700 hover:bg-blue-500">
              Brochure
            </li>
            <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white cursor-pointer hover:bg-blue-500">
              Gallery/Video
            </li>
            <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white cursor-pointer hover:bg-blue-500">
              Digital Book
            </li>
          </ul>
        </div>

        <div className="flex justify-center mt-10">
          <ul className="flex space-x-12">
            <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white cursor-pointer hover:bg-blue-500">
              Price List
            </li>
            <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white cursor-pointer hover:bg-blue-500">
              Floorplans
            </li>
            <li className="rounded-full bg-blue-900 w-48 p-2 text-center font-bold text-white cursor-pointer hover:bg-blue-500">
              Qualities
            </li>
          </ul>
        </div>
      </div>

      
    </>
  );
}
