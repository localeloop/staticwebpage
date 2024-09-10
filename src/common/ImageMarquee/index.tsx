import React from "react";
import { motion } from "framer-motion";
import { MarqueeContainer, MarqueeTrack, MarqueeItem } from "./style";

interface ImageMarqueeProps {
    images: string[];
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images }) => {
    return (
        <MarqueeContainer>
            <MarqueeTrack
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear"
                    }
                }}
            >
               {images.concat(images).map((src, index) => (
                    <MarqueeItem key={index} src={src} alt={`Queen's head band photos ${index}`}/>
                ))}
            </MarqueeTrack>
        </MarqueeContainer>
    )
}

export default ImageMarquee;