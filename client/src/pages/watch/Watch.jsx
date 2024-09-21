import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  const [showBackIcon, setShowBackIcon] = useState(true);
  const navigate = useNavigate();

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBackClick = () => {
    navigate(-1);
  };

  // Fungsi untuk menyembunyikan icon setelah 3 detik tanpa gerakan mouse
  useEffect(() => {
    let hideTimeout;

    const handleMouseMove = () => {
      setShowBackIcon(true);
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setShowBackIcon(false);
      }, 2500);
    };

    // Menambahkan event listener ketika mouse digerakkan
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="watch">
      {showBackIcon && (
        <div className="back" onClick={handleBackClick}>
          <ArrowBackOutlined />
        </div>
      )}
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src="/video2.mp4"
      />
    </div>
  );
}
