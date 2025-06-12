import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Villas = ({ t }) => {
	const villas = [
		{
			img: "/imgs/IMG_4614.JPG",
			cardImg: "/imgs/dom3.JPG",
			cardImg2: "/imgs/plage.JPG",
			text: t.about_card4,
		},
		{
			img: "/imgs/dom2.JPG",
			cardImg: "/imgs/villa.JPG",
			cardImg2: "/imgs/villa(2).JPG",
			text: t.about_card2,
		},
		{
			img: "/imgs/mer.JPG",
			cardImg: "/imgs/IMG_4650.JPG",
			cardImg2: "/imgs/mer1.JPG",
			text: t.about_card5,
		},
		{
			img: "/imgs/plage1.JPG",
			cardImg: "/imgs/plage (2).JPG",
			cardImg2: "/imgs/plage3.JPG",
			text: t.about_card3,
		},
		{
			img: "/imgs/dom1.JPG",
			cardImg: "/imgs/night.JPG",
			cardImg2: "/imgs/villa.JPG",
			text: t.about_subtitle,
		},
	];

	const [current, setCurrent] = useState(0);
	const handlePrev = () =>
		setCurrent((prev) => (prev === 0 ? villas.length - 1 : prev - 1));
	const handleNext = () =>
		setCurrent((prev) => (prev === villas.length - 1 ? 0 : prev + 1));

	return (
		<motion.section
			id="about"
			className="relative grid min-h-screen w-full mx-auto"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<div className="min-h-screen font-['Playfair_Display'] bg-white py-18 px-4 md:px-20 flex flex-col items-center justify-center">
				<div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_3fr] gap-8 items-center">
					{/* First Column: 3 rows */}
					<div className="flex flex-col gap-6 h-full justify-between">
						{/* Row 1: About Us and Pagination */}
						<div className="flex flex-col mt-5 items-start">
							<span className="text-1xl  text-gray-500">{t.about_us}</span>
							<div id="pagination" className="flex items-center">
								<span className="text-5xl font-semibold text-black">
									{String(current + 1).padStart(2, "0")}
								</span>
								<span className="mx-3 h-0.5 w-8 bg-gray-300 inline-block"></span>
								<span className="text-3xl  text-gray-400">05</span>
							</div>
						</div>
						{/* Row 2: First Image */}
						<div className="flex items-center items-start">
							<AnimatePresence mode="wait">
								<motion.img
									key={villas[current].img}
									src={villas[current].img}
									alt="Travel Far and Wide"
									className="rounded-xl w-100 h-80 object-cover"
									initial={{ opacity: 0, y: -100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 100 }}
									transition={{ duration: 0.5 }}
								/>
							</AnimatePresence>
						</div>
						{/* Row 3: travel_far_and_wide */}
						<p className="text-lg font-medium text-gray-800 text-center">
							{t.travel_far_and_wide}
						</p>
					</div>
					{/* Second Column: 2 rows */}
					<div className="flex flex-col gap-6 h-full justify-between">
						{/* Row 1: Heading */}
						<h1 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight text-center">
							{t.making_memories}
						</h1>
						{/* End Row 2 */}
						<AnimatePresence mode="wait">
							<motion.p
								key={villas[current].text}
								id="change-text"
								className="text-1xl md:text-1xl text-gray-900 md:ml-30 leading-tight text-start"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -30 }}
								transition={{ duration: 0.5 }}
							>
								{villas[current].text}
							</motion.p>
						</AnimatePresence>
						{/* Row 2: 2 cols */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
							{/* Col 1: Second image */}
							<div className="flex items-center justify-center">
								<AnimatePresence mode="wait">
									<motion.img
										key={villas[current].cardImg}
										src={villas[current].cardImg}
										alt="Hiking Adventure"
										className="rounded-xl w-100 h-90 object-cover mx-auto"
										initial={{ opacity: 0, y: 100 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -100 }}
										transition={{ duration: 0.5 }}
									/>
								</AnimatePresence>
							</div>
							{/* Col 2: 2 rows (buttons, last image) */}
							<div className="flex flex-col gap-4 items-center justify-center w-full">
								{/* Row 1: Prev/Next Buttons */}
								<div className="flex flex-row gap-2 w-full justify-center mb-2 md:mb-4">
									<button
										className="w-12 h-12 hover:bg-green-900 text-black font-semibold rounded-full transition flex items-center justify-center border-2 border-black"
										onClick={handlePrev}
									>
										<span className="text-xl text-green">
											<FaArrowLeft />
										</span>
									</button>
									<button
										className="w-12 h-12 bg-green-900 hover:bg-green-700 text-white font-semibold rounded-full transition flex items-center justify-center border-2 border-black"
										onClick={handleNext}
									>
										<span className="text-xl">
											<FaArrowRight />
										</span>
									</button>
								</div>
								{/* Row 2: Last image */}
								<AnimatePresence mode="wait">
									<motion.img
										key={villas[current].cardImg2}
										src={villas[current].cardImg2}
										alt="Hiking Adventure"
										className="rounded-xl w-120 h-70 object-cover mx-auto"
										initial={{ opacity: 0, x: 100 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, y: -100 }}
										transition={{ duration: 0.8 }}
									/>
								</AnimatePresence>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Villas;
