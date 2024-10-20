
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";


const images = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
];

const Slider = () => {
    const sliderRef = useRef(null);
    const [sliderWidth, setSliderWidth] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            // Calculate the total scrollable width of the slider container minus the viewport width
            const totalWidth = sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;
            setSliderWidth(totalWidth);
        }
    }, [sliderRef]);

    return (
        <div className="w-full overflow-hidden">
            <motion.div
                ref={sliderRef}
                drag="x"
                dragConstraints={{
                    right: -sliderWidth,
                    left: 0
                }}
                dragElastic={0.2}
                dragTransition={{
                    bounceStiffness: 300,
                    bounceDamping: 20
                }}
                className="flex cursor-grab"
                whileTap={{ cursor: "grabbing" }}// Change the cursor to grabbing when clicked
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[300px] mr-4" // Adjust this based on your image size
                    >
                        <img
                            src={image}
                            alt={`Product ${index + 1}`}
                            className="rounded-md object-cover w-full h-[300px]" // Customize the image size
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;




