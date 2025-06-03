import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Villas = ({ t }) => {
	const villas = [
		{
			img: "/imgs/IMG_4632.JPG",
			cardImg: "/imgs/IMG_4637.JPG",
			cardImg2: "/imgs/IMG_4636.JPG",
			text: t.about_card4,
		},
		{
			img: "/imgs/IMG_4636.JPG",
			cardImg: "/imgs/IMG_4636.JPG",
			cardImg2: "/imgs/IMG_4635.JPG",
			text: t.about_card2,
		},
		{
			img: "/imgs/IMG_4635.JPG",
			cardImg: "/imgs/IMG_4635.JPG",
			cardImg2: "/imgs/IMG_4634.JPG",
			text: t.about_card5,
		},
		{
			img: "/imgs/IMG_4634.JPG",
			cardImg: "/imgs/IMG_4634.JPG",
			cardImg2: "/imgs/IMG_4633.JPG",
			text: t.about_card3,
		},
		{
			img: "/imgs/IMG_4633.JPG",
			cardImg: "/imgs/IMG_4633.JPG",
			cardImg2: "/imgs/IMG_4632.JPG",
			text: t.about_card1,
		},
		{
			img: "/imgs/IMG_4632.JPG",
			cardImg: "/imgs/IMG_4632.JPG",
			cardImg2: "/imgs/IMG_4631.JPG",
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
			className="relative grid min-h-screen text-center w-full mx-auto text-center"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<div className="min-h-screen bg-white py-18 bg px-4 md:px-20 flex-col">
				{/* Top Row: About Us, Main Heading, and Cards */}
				<div className="flex flex-col md:flex-row md:items-start gap-4">
					{/* Left: About Us and Travel Card */}
					<div className="flex flex-col gap-6 ">
						<div>
							<span className="text-sm text-gray-500">{t.about_us}</span>
							<div id="pagination" className="flex items-center mt-2">
								<span className="text-3xl font-semibold text-black">
									{String(current + 1).padStart(2, "0")}
								</span>
								<span className="mx-3 h-0.5 w-8 bg-gray-300 inline-block"></span>
								<span className="text-lg text-gray-400">06</span>
							</div>
						</div>
						<div className="rounded-xl w-52 h-9 object-cover ">
							{/* first image */}
							<AnimatePresence mode="wait">
								<motion.img
									key={villas[current].img}
									src={villas[current].img}
									alt="Travel Far and Wide"
									className="rounded-xl w-60 h-70 object-cover "
									initial={{ opacity: 0, y: -100 }} // ascends
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 100 }}
									transition={{ duration: 0.5 }}
								/>
							</AnimatePresence>
							<p className="mt-4 text-lg font-medium text-gray-800">
								{t.travel_far_and_wide}
							</p>
						</div>
					</div>

					{/* Right: Two Villa Cards in a Column, Button above Second Card on Mobile, Side by Side on Desktop */}
					<div className="flex flex-col md:flex-col gap-6">
						<div className="flex-1 flex flex-col justify-center gap-6 md:mx-8 mt-8 md:mt-0">
							<h1 className="text-4xl  md:text-3xl font-bold text-gray-900 leading-tight">
								{t.making_memories}
							</h1>
							<AnimatePresence mode="wait">
								<motion.p
									key={villas[current].text}
									id="change-text"
									className="text-1xl  md:text-1xl text-gray-900 leading-tight"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -30 }}
									transition={{ duration: 0.5 }}
								>
									{villas[current].text}
								</motion.p>
							</AnimatePresence>
						</div>
						<div className="flex flex-col md:flex-row gap-4 items-center">
							<AnimatePresence mode="wait">
								{/* seconde image */}
								<motion.img
									key={villas[current].cardImg}
									src={villas[current].cardImg}
									alt="Hiking Adventure"
									className="rounded-xl w-60 h-70 object-cover"
									initial={{ opacity: 0, y: 100 }} // falls down
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -100 }}
									transition={{ duration: 0.5 }}
								/>
							</AnimatePresence>
							<div className="flex flex-col w-full">
								<div className="flex flex-col gap-2 w-full mb-2 md:mb-4">
									<div className="flex flex-row gap-2 w-full justify-center">
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
								</div>
								{/* third image */}
								<AnimatePresence mode="wait">
									<motion.img
										key={villas[current].cardImg2}
										src={villas[current].cardImg2}
										alt="Hiking Adventure"
										className="rounded-xl w-200 h-55 object-cover"
										initial={{ opacity: 0, x: 100 }} // comes from right
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
