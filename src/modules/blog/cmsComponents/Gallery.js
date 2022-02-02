import React from "react";
import { motion } from "framer-motion";
import styles from '../Blog.module.scss';
import Image from'next/image';

const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9]};
const Gallery = (props) => {

    // process children into imgs
    const imgs = props.children[0].replace(/[\n\s\"]+/g,"").split(",");
   
    const size = (imgs.length === 1 ? 100 : 100/(imgs.length+1));
    
    return(
        <div className={styles.gallery}>
            {imgs.map((img) => (
                <motion.div 
                    style={{width: size+"%"}} 
                    className={styles.img} 
                    transition={transition}
                    whileHover={{scale: 1.1}}
                >
                    <Image 
                     src={require("../../../data/assets/" + img).default} 
                    />
                </motion.div>

            ))}
        </div>
    );
};

export default Gallery;