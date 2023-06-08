import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./main.scss";

const Bilmiman = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="U3ggQ9byba4"
        onClose={() => setOpen(false)}
      />

      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button>
    </div>
  );
};

export default Bilmiman;
