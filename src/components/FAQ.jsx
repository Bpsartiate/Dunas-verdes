import React from "react";
import { motion } from "framer-motion";

const FAQ = () => (
  <motion.section
    id="FAQ"
    className="relative grid min-h-screen w-full bg-white"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-5 py-16">
  {/* Left: Title and Card */}
  <div className="flex flex-col items-center w-full lg:w-1/2 mb-10 lg:mb-0">
    <h2 className="font-bold text-4xl mt-5 tracking-tight text-black-700 mb-6 text-center">
      Frequently Asked Questions
    </h2>
    <div className="bg-blue-50 hidden md:flex border border-blue-200 rounded-xl shadow p-4 h-90 w-80 flex flex-col items-center justify-center -rotate-6">
      <img
        src="/imgs/faq.jpeg"
        alt="FAQ Illustration"
        className="h-80 w-80 mx-auto rounded-lg object-cover mb-2"
      />
    </div>
  </div>
  
  {/* Right: FAQ */}
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
    <div className="grid divide-y divide-neutral-200 w-full max-w-xl">
      
      {/* FAQ Items */}
      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> What makes Reserva Dunas Verdes unique?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-90 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              Reserva Dunas Verdes is a private coastal reserve in Mozambique dedicated to conservation, community empowerment, and sustainable tourism. It seamlessly integrates luxury living with nature protection and rewilding efforts.
            </p>
          </div>
        </details>
      </div>

      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> What accommodations are available at Reserva Dunas Verdes?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              Guests can stay in our private ocean-facing eco-villa, offering discreet luxury, gourmet cuisine, and curated nature experiences. The villa accommodates up to 8 guests and provides direct access to a private beach and sunrise deck.
            </p>
          </div>
        </details>
      </div>

      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> How does the reserve support conservation efforts?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              Reserva Dunas Verdes is committed to wildlife reintroduction, marine protection, and plastic cleanup initiatives employing locals. Scientific research, turtle nesting zone preservation, and whale shark tracking are among its core projects.
            </p>
          </div>
        </details>
      </div>

      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> How can I get to Reserva Dunas Verdes?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              The closest airport is Inhambane, with transfers arranged by our team. Guests can also reach the reserve by car, with scenic routes from Maputo (8–9 hours) or Vilanculos (4–5 hours). Private charters are available upon request.
            </p>
          </div>
        </details>
      </div>

      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> How can I invest in Reserva Dunas Verdes?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              Investment opportunities include luxury villa plots, eco-tourism rights, lodge co-investment, and sustainable energy projects. All investments contribute to marine and land conservation, local employment, and low-impact tourism.
            </p>
          </div>
        </details>
      </div>
      
    </div>
  </div>
</div>
  </motion.section>
);

export default FAQ;
