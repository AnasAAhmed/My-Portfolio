import React from 'react'
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
const About = () => {
    const animations = {

        h3: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.2
            }
        },

        c1: {
            initial: {
                y: "+100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.1
            }
        },
        c2: {
            initial: {
                y: "+100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.2
            }
        }, c3: {
            initial: {
                y: "+100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.3
            }
        },
        c4: {
            initial: {
                y: "+100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.4
            }
        },
        c5: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.2
            }
        },

    }

    return (


        <div >
            <div id="about">

                <h2>"About Me"</h2>
                <p > 
                    "Goal-oriented Web Developer brings strong commitment to collaboration and solutions-oriented problem-solving. Use various web design packages to develop custom-crafted, customer-focused websites and designs. Committed to high standards of user experience. Lends detailed knowledge of SEO to increase visibility."
                </p>

                < motion.h2 {...animations.h3}>
                    Skills :
                </motion.h2>
                <div className="Boxes">

                    <motion.div className="Box" {...animations.c1}>
                        <FaHtml5 color="orange" size="4rem" />
                    </motion.div>
                    <motion.div className="Box"{...animations.c2} >
                        <SiCss3 color="rgba(1, 138, 250, 0.75)" size="4rem" />
                    </motion.div>
                    <motion.div className="Box"{...animations.c4}>
                        <IoLogoJavascript color="yellow" size="4rem" />
                    </motion.div>
                    <motion.div className="Box" {...animations.c3}>
                        <FaReact color="rgba(1, 221, 250, 0.75)" size="4rem" />
                    </motion.div>
                    <motion.div className="Box"{...animations.c5}>
                        <FaNodeJs color="green" size="4rem" />
                    </motion.div>
                    <motion.div className="Box"{...animations.c5}>
                        <SiMongodb color="green" size="4rem" />
                    </motion.div>

                </div>


            </div>
           
        </div>


    )
}

export default About
