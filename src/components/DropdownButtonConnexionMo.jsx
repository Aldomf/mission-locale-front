import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function DropdownButtonConnexionMo() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setDropdownOpen(false);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts

  return (
    <div className="relative inline-block text-center">
      <button
        id="dropdownHoverButton"
        className="font-semibold text-center inline-flex items-center"
        onClick={handleButtonClick}
        type="button"
      >
        <FaUser className="mr-2" />
        CONNEXION
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownHover"
          className="z-10 absolute mt-[1px] origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700"
        >
          <ul className="text-sm text-white bg-[#252323] flex flex-col items-start">
            <li>
              <Link
                to="/connexion-jeune"
                className="block text-left px-4 py-2 hover:bg-[#A4195C] dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleLinkClick}
              >
                Espace Jeune
              </Link>
            </li>
            <li>
              <Link
                to="/connexion-entreprise"
                className="block text-left px-4 py-2 hover:bg-[#F39101] dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleLinkClick}
              >
                Espace Entreprise
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButtonConnexionMo;


