import React, { useState } from "react";
import { DrawCircleText } from "./DrawCircleText";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { cn } from "../cn";
import Card, { CardSlider } from "./Card"; // Importing the new Card component
import Itinerary from "./Itinerary";
import BestTimeToVisit from "./weather";


export const Cell = ({ i = 0 }) => {
return (
  <div className="size-full rounded-lg center bg-zinc-200 dark:bg-zinc-900 text-xl">
    {i}
  </div>
);
};
// Booking page for Dunas Verder
// Unique layout: full screen, centered card, back button, no site navbar/footer, elegant glassmorphic style
const Booking = ({ onBack }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    requests: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center  from-green-200/60 to-blue-200/60 relative">
      {/* Back Button - now fixed to top left */}
      <button
        onClick={onBack ? onBack : () => window.history.back()}
        className="bg-white left-8 top-20 text-center w-48 rounded-2xl h-14 fixed text-black text-xl font-semibold group z-50 shadow-lg"
        type="button"
      >
        <div
          className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <p className="translate-x-2">Go Back</p>
      </button>
      <div className="w-full bg-white mx-auto rounded-3xl shadow-2xl md:p-12 flex flex-col gap-8 glassmorphic border border-green-100/60 mt-16">
        {/* General row for title */}
        <div className="w-full flex flex-row items-center justify-center mb-8">
          <DrawCircleText />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 min-w-0">
            {/* Booking form main content here, no card */}
            {/* <h2 className="text-2xl font-bold mb-4 text-green-900">Booking Form</h2> */}
            {/* <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-green-900 font-medium mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl px-4 py-2 bg-white/80 backdrop-blur border border-green-200 focus:ring-2 focus:ring-green-400 outline-none transition" />
              </div>
              <div>
                <label className="block text-green-900 font-medium mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl px-4 py-2 bg-white/80 backdrop-blur border border-green-200 focus:ring-2 focus:ring-green-400 outline-none transition" />
              </div>
              <div>
                <label className="block text-green-900 font-medium mb-1">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-xl px-4 py-2 bg-white/80 backdrop-blur border border-green-200 focus:ring-2 focus:ring-green-400 outline-none transition" />
              </div>
           
              <div>
                <label className="block text-green-900 font-medium mb-1">Number of Guests</label>
                <input type="number" name="guests" min="1" max="20" value={form.guests} onChange={handleChange} required className="w-full rounded-xl px-4 py-2 bg-white/80 backdrop-blur border border-green-200 focus:ring-2 focus:ring-green-400 outline-none transition" />
              </div>
              <div>
                <label className="block text-green-900 font-medium mb-1">Special Requests</label>
                <textarea name="requests" value={form.requests} onChange={handleChange} rows={3} className="w-full rounded-xl px-4 py-2 bg-white/80 backdrop-blur border border-green-200 focus:ring-2 focus:ring-green-400 outline-none transition resize-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 via-blue-400 to-green-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 animate-shimmer">Book Now</button>
            </form> */}
            {submitted && (
              <div className="text-center text-green-700 font-semibold text-xl animate-pulse py-12">Thank you! We received your booking request.</div>
            )}
               {/* Video Card */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-green-100 bg-black flex flex-col items-center p-0">
                  <video controls className="w-full h-48 object-cover rounded-t-xl">
                    <source src="/imgs/whale-watching.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-3 w-full text-center bg-white rounded-b-xl">
                    <span className="font-semibold text-green-900">Watch: Whale Watching Experience</span>
                  </div>
                </div>
                {/* Services Title */}
                <h2 className="mt-8 mb-4 text-2xl font-bold text-green-900 text-start drop-shadow-lg">Service includes</h2>
                {/* Services List - Now using CardSlider for infinite slider */}
                <div className="pt-10">
                  <CardSlider
                    cards={[
                      {
                        title: "Boat Tours",
                        body: "Curated nature experiences and boat tours",
                        image: "/imgs/boat.svg",
                      },
                      {
                        title: "Onboard Services",
                        body: "Locally-sourced, gourmet cuisine",
                        image: "/imgs/food.svg",
                      },
                      {
                        title: "Concierge",
                        body: "Full-time cook, cleaners",
                        image: "/imgs/concierge.svg",
                      },
                      {
                        title: "Garden Access",
                        body: "Private gardens and relaxation areas",
                        image: "/imgs/garden.svg",
                      },
                    ]}
                  />
                </div>
                {/* Itinerary Section */}
                <div className="mb-8">
                  <Itinerary />
                </div>
          </div>
          {/* Right Column (Sidebar) */}
          <aside className="w-full  md:w-[600px] flex-shrink-0 md:sticky md:top-24">
                <div className="rounded-xl border border-green-200 bg-white shadow p-4 flex flex-col items-center">
              <div className="text-lg font-bold text-green-900 mb-4">Booking Summary</div>
              {/* Calendar and info */}
              
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Calendar + Legend */}
                <div className="flex flex-col">
                  <Calendar
                    tileClassName={({ date, view }) => {
                      // Example: highlight whale season
                      if (
                        view === 'month' &&
                        date.getMonth() >= 5 && date.getMonth() <= 8 // June (5) to September (8)
                      ) {
                        return 'bg-blue-100 text-blue-700 font-bold';
                      }
                      // Example: highlight booked days (hardcoded for demo)
                      const booked = [
                        new Date(2025, 5, 12).toDateString(),
                        new Date(2025, 5, 13).toDateString(),
                        new Date(2025, 6, 2).toDateString(),
                      ];
                      if (booked.includes(date.toDateString())) {
                        return 'bg-red-200 text-red-700 line-through';
                      }
                      return null;
                    }}
                    minDetail="month"
                    prev2Label={null}
                    next2Label={null}
                    className="rounded-xl border border-green-200 shadow w-full mb-2"
                  />
                  <div className="flex flex-wrap gap-2 mt-2 text-xs">
                    <span className="inline-block w-3 h-3 bg-blue-100 border border-blue-400 rounded-full mr-1 align-middle"></span> Whale Season
                    <span className="inline-block w-3 h-3 bg-red-200 border border-red-400 rounded-full ml-4 mr-1 align-middle"></span> Booked
                  </div>
                </div>
                {/* BestTimeToVisit */}
                <div className="flex flex-col h-full">
                  <BestTimeToVisit />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Booking;
