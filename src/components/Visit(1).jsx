import React from "react";

const Visit = () => (
  <section className="bg-white dark:bg-gray-900" id="visit">
    <div className="container px-6 py-10 mx-auto">
      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our clients are saying
          </h1>
          <div className="flex mx-auto mt-6">
            <span className=" w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className=" w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className=" w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
        </div>
        <div className="flex justify-between mt-8 md:mt-0">
          <button title="left arrow" className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <section className="flex  justify-center gap-8 mt-8 xl:mt-12">
        <div className="p-8 border rounded-lg dark:border-gray-700 align-top flex flex-col items-center justify-center">
          <img className="object-cover rounded-lg w-40 h-40 mb-4" src="/imgs/cust.jpeg" alt="Customer 1" />
          <div className="flex items-center mt-4 -mx-2">
            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            <div className="mx-2">
              <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
            </div>
          </div>
        </div>
        <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600 align-top flex flex-col items-center justify-center">
          <img className="object-cover rounded-lg w-40 h-40 mb-4" src="/imgs/cust1.jpeg" alt="Customer 2" />
          <div className="flex items-center mt-4 -mx-2">
            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            <div className="mx-2">
              <h1 className="font-semibold text-white">Jeny Doe</h1>
              <span className="text-sm text-blue-200">CEO, Jeny Consultency</span>
            </div>
          </div>
        </div>
        <div className="p-8 border rounded-lg dark:border-gray-700 align-top flex flex-col items-center justify-center">
          <img className="object-cover rounded-lg w-40 h-40 mb-4" src="/imgs/cust2.jpeg" alt="Customer 3" />
          <div className="flex items-center mt-4 -mx-2">
            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div className="mx-2">
              <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default Visit;
