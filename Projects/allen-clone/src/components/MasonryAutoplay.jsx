// src/components/MasonryAutoplay.js
import React, { useEffect, useRef } from "react";

const images = [
    // Array of image URLs or components to render
    "https://plus.unsplash.com/premium_photo-1729880135754-a031fe7db49e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dom/300x600",

    "https://plus.unsplash.com/premium_photo-1729880135754-a031fe7db49e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dom/300x600",
    ,
    "https://plus.unsplash.com/premium_photo-1729880135754-a031fe7db49e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dom/300x600",
    // add more images as needed
];

const MasonryAutoplay = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = containerRef.current;
        let scrollAmount = 0;

        const scrollAnimation = setInterval(() => {
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollAmount;
                scrollAmount += 1;

                // Reset scroll to top when reaching the bottom
                if (
                    scrollContainer.scrollTop >=
                    scrollContainer.scrollHeight - scrollContainer.clientHeight
                ) {
                    scrollAmount = 0;
                }
            }
        }, 30); // Adjust speed by changing interval

        return () => clearInterval(scrollAnimation);
    }, []);

    return (
        <div
            ref={containerRef}
            className="h-screen overflow-y-scroll no-scrollbar"
            style={{
                scrollBehavior: "smooth",
            }}
        >
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                        <img src={src} alt="Masonry Image" className="w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MasonryAutoplay;
