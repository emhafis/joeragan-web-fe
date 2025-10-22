import { useState, useRef } from "react";

export default function HeroHomeSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
    videoRef.current?.play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative h-screen flex items-end text-white overflow-hidden">
      {/* Thumbnail default */}
      {!isPlaying && (
        <img
          src="/images/dummy.jpg"
          alt="Joeragan Properti Hero"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          loading="lazy"
        />
      )}

      {/* Video background */}
      {isPlaying && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"
            }`}
          src="https://ik.imagekit.io/8nnnoflstu/joeragan-properti/jumbotron-vid.mp4?updatedAt=1759806466926"
          onCanPlayThrough={handleVideoLoaded}
          onEnded={handleVideoEnded}
          muted
          playsInline
        />
      )}

      {/* Overlay hitam agar teks terbaca */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 backdrop-blur-sm">
          <span className="ml-3 text-white text-lg">Memuat video...</span>
        </div>
      )}

      {/* Konten Hero */}
      <div className="relative z-10 text-start px-6 lg:px-32 sm:px-10 py-24">
        <h1 className="text-5xl font-bold">Joeragan Properti</h1>
        <p className="mt-2 text-md max-w-2xl py-2">
          Solusi Terpadu untuk Pengembangan dan Konstruksi Properti di Aceh
        </p>

        {/* Tombol Play / Stop */}
        {
          !isPlaying
            ? (
              <button
                onClick={handlePlay}
                className="mt-6 flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-full shadow-lg hover:bg-white hover:text-primary border-2 border-white transition-all duration-300"
              >
                Putar Video
              </button>
            )
            : (
              <button
                onClick={handleStop}
                className="mt-6 flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-full shadow-lg hover:bg-white hover:text-primary border-2 border-white transition-all duration-300"
              >
                Stop Video
              </button>
            )
        }
      </div>
    </div>
  );
}



// export default function HeroSection() {
//   return (
//     <>
//       <img
//         src="/images/dummy.jpg"
//         alt="Joeragan Properti Hero"
//         className="w-full h-screen object-cover transition-opacity duration-700"
//         loading="lazy"
//       />
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Konten Hero */}
//       <div className="relative z-10 text-start px-6 lg:px-32 sm:px-10 py-24">
//         <h1 className="text-4xl md:text-6xl font-bold">Joeragan Properti</h1>
//         <p className="mt-4 text-lg md:text-xl max-w-2xl">
//           Pengembang, Pemasaran, dan Jasa Konstruksi Properti di Aceh
//         </p>
//       </div>
//     </>
//   )
// }