// src/components/CalorieConsumedSection.tsx
import React from 'react';
import calorieConsumedImg from '../assets/CalorieConsumed.png'; // adjust path if needed

export default function CalorieConsumedSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* No padding/margin on the section itself */}
      <div className="relative w-full">
        {/* Image takes full width & height of its container */}
        <img
          src={calorieConsumedImg}
          alt="Calories consumed visualization"
          className="
            w-full h-auto block
            object-cover               /* fills space without distortion */
            object-center              /* centers important parts */
            rounded-none               /* no border radius — full edge touch */
          "
          style={{
            // Forces image to take full available width
            minWidth: '100%',
            maxWidth: '100%',
            // Prevents any extra space above/below
            display: 'block',
            margin: 0,
            padding: 0,
          }}
          loading="lazy"
        />
      </div>
    </section>
  );
}