import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Minimal tampil 5 detik
    const minDisplayTime = new Promise((resolve) => setTimeout(resolve, 2000));

    // Tunggu sampai seluruh halaman terload
    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve);
    });

    Promise.all([minDisplayTime, pageLoaded]).then(() => {
      setVisible(false);
    });
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999] transition-opacity duration-500">
      {/* Animasi Loading */}
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-primary tracking-wide">
        Memuat halaman...
      </p>
    </div>
  );
}
