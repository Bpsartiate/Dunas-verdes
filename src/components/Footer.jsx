
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
const Footer = ({ language, t }) => (
   <>
    <div className="w-full bg-[#f5f5dc] py-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
      <div className="flex-1 flex flex-col items-start mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">Subscribe to our Newsletter</h2>
        <p className="text-base text-gray-600 mb-4">Stay updated with the latest news, offers, and stories from Dunas Verdes.</p>
        {/* Styled Subscribe Input */}
        <div style={{ width: '100%', maxWidth: 350 }}>
          <div style={{
            width: 'fit-content',
            height: 45,
            borderRadius: 20,
            padding: 5,
            boxSizing: 'content-box',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#292524',
          }}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: 30, fill: '#fff', marginLeft: 8, transition: 'all 0.3s' }}>
              <g data-name="Layer 2">
                <g data-name="inbox">
                  <rect width={24} height={24} transform="rotate(180 12 12)" opacity={0} />
                  <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z" />
                </g>
              </g>
            </svg>
            <input type="email" name="email" placeholder="info@gmail.com" style={{
              maxWidth: 170,
              height: '100%',
              border: 'none',
              outline: 'none',
              paddingLeft: 15,
              backgroundColor: '#292524',
              color: 'white',
              fontSize: '1em',
              flex: 1,
            }} />
            <button type="submit" style={{
              height: '100%',
              width: 95,
              border: 'none',
              borderRadius: 15,
              color: '#000',
              cursor: 'pointer',
              backgroundColor: '#fff',
              fontWeight: 500,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'all 0.3s',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={10} viewBox="0 0 38 15" style={{ position: 'absolute', marginRight: 150, transition: 'all 0.3s' }}>
                <path d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z" /></svg>Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <img src="/imgs/newsletter.webp" alt="Newsletter" className="max-w-xl w-full" />
      </div>
    </div>
   <footer className="bg-white py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start md:items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <div className="mb-3">
            {/* Replace with actual logo image if available */}
            {/* <div className="flex flex-col items-center">
              <div className="flex space-x-2 mb-1">
                <span className="w-3 h-3 bg-purple-800 rounded-full"></span>
                <span className="w-3 h-3 bg-purple-800 rounded-full"></span>
                <span className="w-3 h-3 bg-purple-800 rounded-full"></span>
              </div>
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-purple-800 rounded-full"></span>
                <span className="w-3 h-3 bg-purple-800 rounded-full"></span>
                <span className="w-3 h-3 bg-purple-800 rounded-full"></span>
              </div>
            </div> */}
          </div>
          <span className="text-lg tracking-widest font-serif text-gray-800">Dunas Verdes</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 md:mb-4 md:inline-block align-middle">Dunas Verdes</h3>
          <ul className="space-y-1 text-gray-600 text-base">
            <li>News</li>
            <li>Newsletter</li>
            <li>Travel trade</li>
            <li>Media center</li>
            <li>Development</li>
            <li>Terms and conditions</li>
            <li>Privacy</li>
            <li>Cookie Policy</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold text-gray-700 mb-3  md:mb-4 md:inline-block align-middle">GET IN TOUCH</h3>
          <div className="text-gray-600 text-base mb-4">
            <div>Reserva Dunas Verdes</div>
            <div>Inhambane Province</div>
            <div>57 Wireless Road,Praia da Rocha and Tofo</div>
            <div>Mozambique</div>
          </div>
          <div className="text-gray-600 text-base mb-2">mail@dunas.com</div>
          <div className="text-gray-600 text-base">+258 xxx xxx xxx</div>
          {/* Social Icons */}
<div className="flex flex-col items-start">
          <div className="flex space-x-5 mt-8">
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-purple-800 text-2xl"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-purple-800 text-2xl"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-purple-800 text-2xl"><FaInstagram /></a>
            <a href="#" aria-label="Pinterest" className="text-gray-500 hover:text-purple-800 text-2xl"><FaPinterestP /></a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-purple-800 text-2xl"><FaYoutube /></a>
          </div>
          </div>
        </div>
      </div>
    </footer>
    </>
);

export default Footer;
