import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { IoIosBoat } from "react-icons/io";
import { GiMeditation,GiFallingLeaf } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

const Activities = () => (
  <motion.section
    id="activities"
    className="relative grid min-h-screen"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <VerticalAccordion />
  </motion.section>
);

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);
  return (
    
    <section className="p-4">
      <h1 className="text-3xl py-4 px-10 font-bold text-white mb-4">Activities</h1>
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            Icon={item.Icon}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize ? useWindowSize() : { width: 1200 };
  const isOpen = open === id;
  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{ writingMode: "vertical-lr" }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full rounded-full aspect-square bg-green-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: { width: "100%", height: "100%" },
  closed: { width: "0%", height: "100%" },
};
const panelVariantsSm = {
  open: { width: "100%", height: "200px" },
  closed: { width: "100%", height: "0px" },
};
const descriptionVariants = {
  open: { opacity: 1, y: "0%", transition: { delay: 0.125 } },
  closed: { opacity: 0, y: "100%" },
};
const items = [
  {
    id: 1,
    title: "Marine Adventures",
    Icon: IoIosBoat,
    imgSrc:"/imgs/IMG_4644.JPG",
    description:
    "Whale watching (June–October) for humpback whales and calves Snorkeling & diving with manta rays, whale sharks, and sea turtles Ocean safaris and dhow sailing trips from Tofo or Barra; Paddleboarding in calm lagoon waters or guided mangrove tours"
  },
  {
    id: 2,
    title: "Cultural & Relaxation Experiences",
    Icon: GiMeditation,
    imgSrc:"/imgs/marine.jpeg",
    description:
      "Visit the charming colonial town of Inhambane with its Portuguese architecture and local markets; Sunset drinks and seafood at beachfront restaurants in Tofo or Barra; Discover local craft shops and capulana boutiques; Enjoy a massage or yoga session with the ocean breeze"
  },
  {
    id: 3,
    title: " Nature & Conservation",
    Icon: GiFallingLeaf,
    imgSrc:"/imgs/join.jpeg",
    description:
    "Join our plastic cleanup walks or artisanal workshops at the reserve; Explore the dune trails and wildlife zones on foot, bike, or horseback; Participate in eco-tours to understand our conservation and rewilding projects"
  },
  // {
  //   id: 4,
  //   title: "Grow faster",
  //   Icon: FiBarChart,
  //   imgSrc:
  //     "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  // },
];

export default Activities;
