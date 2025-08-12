import React, { useEffect } from "react";

const ReviewCarousel = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-12">
      <div
        className="elfsight-app-db9c3856-edff-4967-af9c-1d6f1253a841"
        data-elfsight-app-lazy
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};

export default ReviewCarousel;
