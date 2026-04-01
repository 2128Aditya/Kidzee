import { useEffect, useState } from "react";
import BASE_URL from "../api";

function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/videos`)
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Videos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((vid) => (
          <video key={vid._id} controls className="w-full rounded-lg shadow">
            <source src={vid.videoUrl} />
          </video>
        ))}
      </div>
    </div>
  );
}

export default Video;