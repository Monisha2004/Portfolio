import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  const [showDesc1, setShowDesc1] = useState(false);

  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right' >
                <img src={val.cover} alt='' style={{width:420,height:300,paddingRight:40}} />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Us' />
                <p>{val.desc}</p>
                {showDesc1 ? <p>{val.desc1}</p> : null}
                <button onClick={() => setShowDesc1(!showDesc1)}>
                  {showDesc1 ? "Hide" : "Read More"}
                </button>
                
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
