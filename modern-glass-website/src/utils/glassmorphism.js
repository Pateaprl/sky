// src/utils/glassmorphism.js

export function applyGlassMorphism(element, blurAmount = '10px', backgroundColor = 'rgba(255, 255, 255, 0.1)', borderRadius = '10px') {
    element.style.backdropFilter = `blur(${blurAmount})`;
    element.style.backgroundColor = backgroundColor;
    element.style.borderRadius = borderRadius;
    element.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    element.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
}

export function removeGlassMorphism(element) {
    element.style.backdropFilter = '';
    element.style.backgroundColor = '';
    element.style.borderRadius = '';
    element.style.border = '';
    element.style.boxShadow = '';
}