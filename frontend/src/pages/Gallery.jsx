import { useEffect, useState } from "react";
import BASE_URL from "../api";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/gallery`)
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img._id} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition">
            <img src={img.imageUrl} alt="" className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;