import VisionButton from './VisionButton';


const Lexperience = () => {
  return (
     <section className="min-h-screen flex flex-col items-start justify-center bg-white text-gray-900 px-4 py-16">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
         {/* Text column */}
        <div className="flex p-20  flex-col justify-start items-start">
            <p className='pb-3 text-bold-900 text-gray-600' >Reserva Dunas Experience</p>
          <h2 className="text-2xl  font-['Playfair_Display'] md:text-3xl font-semibold mb-4 text-left">
            Une expérience inoubliable au cœur de la nature
          </h2>
          {/* <p className="text-lg md:text-xl mb-2 text-left">
            Vivez l’émotion pure d’un séjour dans notre réserve, là où les dunes dorées rencontrent l’océan. Réveillez-vous chaque matin au son des vagues, respirez l’air marin vivifiant et laissez-vous émerveiller par la beauté sauvage qui vous entoure.
          </p> */}
          <p className="text-base  font-['Playfair_Display'] md:text-lg text-gray-600 text-left">
            Entre balades sur la plage, moments de détente face à la mer et découvertes authentiques, chaque instant à Dunas Verdes est une invitation à renouer avec l’essentiel. Ici, la nature est votre plus grand luxe.
          </p>
          <div className="mt-6">
            <VisionButton />
          </div>
        </div>
        {/* Card with images stacked above main image */}
        <div className="flex max-w-5xl  justify-start">
          <div className="relative bg-white shadow-lg overflow-visible w-full max-w-xl">
            {/* Main image */}
            <img
              src="/public/imgs/mer1.jpg"
              alt="Vision Dunas Verdes"
              className="w-full h-120 object-cover rounded-t"
            />
            {/* 3 images stacked above main image */}
            <div className="absolute right-90 top-60 w-64 h-40">
              <img
                src="/public/imgs/mer.JPG"
                alt="Dunas Verdes 4"
                className="w-80 h-80 object-cover rounded shadow-lg"
              />
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Lexperience;
