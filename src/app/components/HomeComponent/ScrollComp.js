// src/components/ScrollToTopButton.js
"use client"

import React from 'react';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-10 bg-white p-4 py-3  shadow-lg transition duration-200"
            aria-label="Scroll to top"
        >
            <i className="bi bi-arrow-up text-2xl text-black"></i>
        </button>
    );
};

export default ScrollToTopButton;
