import React from "react";
import { motion } from "framer-motion";

const FAQ = ({ t }) => (
  <motion.section
    id="FAQ"
    className="relative grid min-h-screen w-full bg-white"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-5 py-8 !m-0">
  {/* Left: Title and Card */}
  <div className="flex flex-col items-center w-full lg:w-1/2 mb-10 lg:mb-0">
    <h2 className="font-bold text-4xl mt-5 tracking-tight text-black-700 mb-6 text-center">
      {t.faq_title}
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
  <div className="w-full lg:w-1/2 flex flex-col items-center justify-center !m-0">
    <div className="grid divide-y divide-neutral-200 w-full max-w-xl !m-0">
      
      {/* FAQ Items */}
      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> {t.faq_1_q}</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-90 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              {t.faq_1_a}
            </p>
          </div>
        </details>
      </div>

      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> {t.faq_2_q}</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              {t.faq_2_a}
            </p>
          </div>
        </details>
      </div>

      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> {t.faq_3_q}</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              {t.faq_3_a}
            </p>
          </div>
        </details>
      </div>

      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> {t.faq_4_q}</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              {t.faq_4_a}
            </p>
          </div>
        </details>
      </div>

      <div className="py-3">
        <details className="group text-base">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span> {t.faq_5_q}</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-2 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0">
            <p className="text-neutral-600 mt-2 text-sm">
              {t.faq_5_a}
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
