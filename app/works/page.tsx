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
        imgSrc: "mtglossary.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
        roles: ["Interface Design", "Product Design", "Full-Stack Development",],
        url: "https://www.mtglossary.com/",
      },
      {
        key: 2,
        name: "Tawhiti Forestry",
        time: "March 2025",
        category: "Corporate",
        imgSrc: "tawhiti.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
        roles: ["Graphic Design", "Interface Design", "Project Management", "Front-End Development",],
        url: "https://www.tawhiti.co.nz/",
      },
    ];
    
    
    return (
      <>
      <AnimatePresence>
        <motion.main className="wp-main fade-in">
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
                  <aside>
                      <p className="wp-work-spec">
                          <span className="wp-work-span">Project Responsibilities:</span>
                          <br />
                          {work.roles.join(', ') + "."}
                      </p>
                      <br />
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
  