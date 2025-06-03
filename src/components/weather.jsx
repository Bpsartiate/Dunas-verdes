import React from "react";

const BestTimeToVisit = () => (
  <div className="bg-white rounded-2xl shadow-xl w-full  mx-auto p-6">
    <h2 className="text-1xl font-bold mb-4">Best Time to Visit</h2>
    <div className="rounded-2xl md:border-solid border-2 border-gray-200 bg-white/70 backdrop-blur-md">
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-yellow-400 text-2xl mr-3">
            {/* Sun icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path stroke="currentColor" strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"/>
            </svg>
          </span>
          <div>
            <div className="text-1xl font-semibold">75&#176;F</div>
            <div className="text-gray-500">Sunny</div>
          </div>
        </div>
        <div className="md:border-l md:pl-6 border-gray-200">
          <div className="text-gray-500 text-sm">Best Season:</div>
          <div className="text-1xl font-bold">Jun – Sep</div>
        </div>
      </div>
      <div>
        <div className="flex pb-5 flex-col items-center justify-between">
        <div className="flex flex-ro items-center justify-between mb-2">
          <span className="font-semibold px-2 text-1xl">Inhambane Prov</span>
          <div className="text-gray-500 text-sm">H: 78&#176; L: 54&#176;</div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="text-gray-500 text-sm space-x-3">
            <span>Jan</span>
            <span>Jul</span>
            <span>Apr</span>
            <span>Sep</span>
          </div>
          <div className="space-x-1 rounded bg-blue-100  text-blue-700">
            {["Jun", "Jul", "Aug", "Sep"].map((month) => (
              <span
                key={month}
                className=" px-2 py-1  font-medium text-sm"
              >
                {month}
              </span>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default BestTimeToVisit;
