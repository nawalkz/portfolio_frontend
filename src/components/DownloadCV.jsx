import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadCV = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Télécharger mon CV 📄
      </h2>
      <a
        href="/cv_nawal.pdf"
        download="cv_nawal.pdf"
        className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition-all duration-300"
      >
        <FaDownload className="text-xl" />
        Télécharger le CV
      </a>
    </div>
  );
};

export default DownloadCV;