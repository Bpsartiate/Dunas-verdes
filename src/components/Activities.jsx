import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { IoIosBoat } from "react-icons/io";
import { GiMeditation, GiFallingLeaf } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

const Activities = ({ t }) => (
  <motion.section
    id="activities"
    className="relative bg-white grid min-h-screen !m-0"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <VerticalAccordion t={t} />
  </motion.section>
);

const VerticalAccordion = ({ t }) => {
  const items = [
    {
      id: 1,
      title: t.activities_marine_title,
      Icon: IoIosBoat,
      imgSrc: "/imgs/IMG_4647.JPG",
      description: t.activities_marine_desc,
    },
    {
      id: 2,
      title: t.activities_cultural_title,
      Icon: GiMeditation,
      imgSrc: "/imgs/marine.jpeg",
      description: t.activities_cultural_desc,
    },
    {
      id: 3,
      title: t.activities_nature_title,
      Icon: GiFallingLeaf,
      imgSrc: "/imgs/join.jpeg",
      description: t.activities_nature_desc,
    },
  ];
  const [open, setOpen] = useState(items[0].id);
  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row h-fit lg:h-full w-full max-w-6xl mx-auto shadow overflow-hidden">
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
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group cursor-pointer"
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
              className="px-4 pb-4 bg-black/40 backdrop-blur-sm text-white"
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

export default Activities;
