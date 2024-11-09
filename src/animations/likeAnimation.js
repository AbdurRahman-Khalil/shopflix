const likeAnimationVariants = {

    initial: { scale: 0.7, opacity: 0, boxShadow: "0px 0px 0px rgba(255, 0, 0, 0)" },
    
    liked: {
        scale: [1.4, 1],
        rotate: [0, 10, -10, 0],
        opacity: 1,
        boxShadow: ["0px 0px 10px rgba(255, 0, 0, 0.7)", "0px 0px 0px rgba(255, 0, 0, 0)"],
        transition: {
            duration: 0.25,
            ease: "easeInOut",
        },
    },
    
    unliked: {
        scale: [1, 1.2, 1],
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: "easeInOut",
        },
    },
    
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.15 } },

};

export default likeAnimationVariants;