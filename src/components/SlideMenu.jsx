import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function SlideMenu() {
  const slides = [
    {
      original: "./public/MicrosoftTeams-image4.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX VOUS ACCOMPAGNE
        </>
      ),
      button: "JE M'INSCRIR",
    },
    {
      original: "./public/MicrosoftTeams-image2.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX VOUS ACCOMPAGNE
        </>
      ),
      button: "Learn more",
    },
    {
      original: "./public/MicrosoftTeams-image3.png",
      description: (
        <>
          VOUS AVEZ ENTRE 16 ET 25 ANS ?<br />
          LA MISSION LOCALE DES MUREAUX VOUS ACCOMPAGNE
        </>
      ),
      button: "Get started",
    },
  ];

  return (
    <>
      <img src="MicrosoftTeams-image.png" alt="" className="h-1 md:h-[5px] xl:h-2 2xl:h-3" />
      <div className="relative">
        <ImageGallery
          items={slides}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          showNav={true}
          autoPlay={true}
          slideInterval={3000}
          slideDuration={1000}
          renderItem={(item) => (
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <img
                src={item.original}
                alt={item.description}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                <p className="text-xs mb-2 text-center md:mb-6 md:text-xl 2xl:text-5xl">
                  {item.description}
                </p>
                <button className="bg-[#A51F60] text-white text-xs px-4 py-1 rounded md:text-base 2xl:text-2xl">
                  {item.button}
                </button>
              </div>
            </div>
          )}
        />
      </div>
    </>
  );
}

export default SlideMenu;
