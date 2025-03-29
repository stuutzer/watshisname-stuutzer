"use client";

import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

export default function Works() {
    const works = [
      {
        key: 1,
        name: "MTGlossary",
        time: "November 2024",
        category: "Personal",
        imgSrc: "mtglossary.webp",
        desc: "An recurring issue I noticed while playing Magic with my friends was that trying to look up definitions for technical jargon on cards often disrupted pace and bogged down the gameplay experience. To remedy this, I built MTGlossary with a simple interface that prioritizes visual clarity and ease-of-use.",
        roles: ["Interface Design", "Product Design", "Full-Stack Development",],
        url: "https://www.mtglossary.com/",
      },
      {
        key: 2,
        name: "Tawhiti Forestry",
        time: "March 2025",
        category: "Corporate",
        imgSrc: "tawhiti.webp",
        desc: "I was in charge of graphic design and front-end development for Tawhiti Forestry’s company website as Front-End lead at DelUXe Digital Design. I took inspiration from Gordon Walters’ iconic koru graphics to reflect the company’s connection to Aotearoa while also illustrating the role that export industries have in bringing ideas and people together.",
        roles: ["Graphic Design", "Interface Design", "Project Management", "Front-End Development",],
        url: "https://www.tawhiti.co.nz/",
      },
    ];
    
    
    return (
      <>
      <AnimatePresence>
        <motion.main 
          className="wp-main fade-in"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {
            works.map(work =>
              <section key={work.key} className="wp-work">
                <div className="wp-work-top">
                  <p className="wp-work-number">{work.key}/{works.length}</p>
                  <div>
                    <h2 className="wp-work-name">{work.name}</h2>
                    <h3 className="wp-work-info">{work.time} / {work.category}</h3>
                  </div>
                </div>
                <img src={work.imgSrc} alt={"Screenshot of " + work.name + " website."} className="wp-work-img" />
                <div className="wp-work-bottom">
                  <p className="wp-work-desc">{work.desc}</p>
                  <aside className="wp-work-aside">
                      <p className="wp-work-resp">
                          <span className="wp-work-span">Project Responsibilities:</span>
                          <br />
                          {work.roles.join(', ') + "."}
                      </p>
                      <a href={work.url} target="_blank" className="wp-work-link">Visit Site</a>
                  </aside>
                </div>
              </section>
            )
          }
        </motion.main>
      </AnimatePresence>
      </>
    );
  }
  