import React from "react";
import bg16 from "../assets/download__15_-removebg-preview.png";
import bg13 from "../assets/Cre__Xuân_Mai___FB__-removebg-preview.png";
import bg14 from "../assets/download__14_-removebg-preview.png";
import chat from "../assets/Screenshot_2025-11-16_093735-removebg-preview.png";
import chat2 from "../assets/Screenshot_2025-11-16_093735-removebg-preview.png";
import "./btnone.css";
import { useNavigate } from "react-router-dom";
type mesage = {
    speaker: string;
    text: string;
    delay: number;
};
export default function One() {
    
    const navigate = useNavigate();
    
    const handleNext = () => {
        navigate("/two");
    };
    const lines = ["Chào mừng!", "ngày nhà giáo", "Việt Nam 20-11"];
    const conversation: mesage[] = [
        { speaker: "child", text: "Mẹ ơi!", delay: 0 },
        { speaker: "child", text: "Ngày 20/11 là ngày gì thế mẹ?", delay: 1.5 },
        {
            speaker: "child",
            text: "Sao các bạn ai",
            delay: 3,
        },
        {
            speaker: "child",
            text: "cũng mua hoa vậy ạ?",
            delay: 3.5,
        },
        {
            speaker: "mother",
            text: "À, đó là ngày Nhà giáo Việt Nam con ạ!",
            delay: 5,
        },
        {
            speaker: "mother",
            text: "Ngày để tri ân các thầy cô giáo",
            delay: 6.5,
        },
        { speaker: "mother", text: "Những người đã dạy dỗ chúng ta", delay: 8 },
        { speaker: "mother", text: "Con hãy nhớ nhé!", delay: 9.5 },
    ];
    return (
        <div>
            <div className="btn-container absolute top-100 left-150 z-10">
                <button className="btn" onClick={handleNext}>
                    <span className="btn-text">Get Offer</span>
                </button>
            </div>
            <div className="relative w-[100vw] bg-red overflow-y-auto overflow-x-hidden flex text-white min-h-[100vh]">
                <div className="mesage tilt-in-fwd-tl w-[30%] h-[100vh] v">
                    <img
                        src={bg13}
                        alt=""
                        width={`100%`}
                        className="absolute bottom-0"
                    />
                    <img
                        src={bg16}
                        alt=""
                        className="absolute bottom-0 left-66"
                        width={130}
                    />
                    {/* mẹ */}
                    <div className="mes-mini bounce-in-top">
                        <img
                            src={chat}
                            alt=""
                            className="absolute bottom-90 left-25"
                            width={400}
                        />
                    </div>
                    {/* con */}
                    <div className="mes-mini bounce-in-top">
                        <img
                            src={chat2}
                            alt=""
                            className="absolute bottom-9 left-80"
                            width={200}
                        />
                    </div>
                    <div className="mes-mini">
                        <div className="text-pink-500 w-90 h-50 absolute bottom-120 left-36 flex flex-col items-center justify-center">
                            {conversation.map(
                                (a, index) =>
                                    a.speaker == "mother" && (
                                        <div
                                            key={index}
                                            className="typing-css"
                                            style={{
                                                animationDelay: `${a.delay}s`,
                                                "--steps": a.text.length,
                                                "--width": `${a.text.length}ch`,
                                            }}
                                        >
                                            {a.text}
                                        </div>
                                    )
                            )}
                        </div>
                        <div className="text-black w-50 h-50 absolute bottom-9 left-80 flex flex-col items-center justify-center">
                            {conversation.map(
                                (a, index) =>
                                    a.speaker == "child" && (
                                        <div
                                            key={index}
                                            className="typing-css"
                                            style={{
                                                animationDelay: `${a.delay}s`,
                                                "--steps": a.text.length,
                                                "--width": `${a.text.length}ch`,
                                            }}
                                        >
                                            {a.text}
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-[70%] flex justify-center items-center relative">
                    <img
                        className=" tilt-in-fwd-tr"
                        src={bg14}
                        alt=""
                        width={600}
                    />
                    <div className="absolute top-50 flex flex-col items-center gap-2">
                        {lines.map((line, index) => (
                            <div
                                key={index}
                                className="typing-css tracking-in-contract-bck text-6xl w-90 p-2"
                                style={{
                                    animationDelay: `${index * 1}s`,
                                    "--steps": line.length,
                                    "--width": `${line.length}ch`,
                                }}
                            >
                                {line}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
