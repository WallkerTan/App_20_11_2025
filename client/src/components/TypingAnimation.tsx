import React from "react";
import "./App.css"; // Import file CSS riêng

export default function TypingAnimation() {
    const lines = [
        "Xin chào! Tôi là developer",
        "Chuyên về React & Tailwind CSS",
        "Rất vui được làm việc với bạn! 💻",
    ];

    return (
        <div className="space-y-3 font-mono">
            {lines.map((line, index) => (
                <div
                    key={index}
                    className="typing-line whitespace-nowrap overflow-hidden"
                    style={{
                        animationDelay: `${index * 2}s`,
                    }}
                >
                    {line}
                </div>
            ))}
        </div>
    );
}
