import React from "react";

const VedioStream = () => {
  return (
    <div>
      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/vTwhKbxM_2U?si=BFzdyMDX-_S0q_yT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioStream;
