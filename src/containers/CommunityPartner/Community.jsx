import React from "react";
import "./style.css";
import "animate.css";

import image from "./asset/CollabCode Carnival (3).png";
function Community() {
  return (
    <>
      <section className="main__section">
        <div>
          <div className="header  animate__animated  animate__bounceIn">
            {" "}
            Our Community Partners
          </div>
          {/* <div className="Header">Our Community Partner's</div> */}
          <div className="partner ">
            <img
              className="img__name  animate__slow animate__animated animate__backInDown"
              loading="lazy"
              src={image}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
