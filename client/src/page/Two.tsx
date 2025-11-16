import React, { useEffect, useState } from "react";
import img1 from "../assets/ورد-removebg-preview.png";
import img2 from "../assets/original_by_AeEntropy_on_Twitter-removebg-preview.png";
import AnimatedWave2 from "./../components/Wave2";
import "./App.css";
import "./btnone.css";
import "./two.css";
import Hanghoa from "./../components/Hanghoa";
import { useNavigate } from "react-router-dom";
import img3 from "../assets/2d4ad967642eb0295e5e1098c6bf0e0a-removebg-preview.png";
import img4 from "../assets/ec1a886c2e959457b463abf52a97707f-removebg-preview.png";
import img5 from "../assets/17952e2cfe11f407f6bedbce1f44395e-removebg-preview.png";

import img6 from "../assets/chuông-removebg-preview.png";

type mesage = {
    speaker: string;
    text: string;
    delay: number;
};

export default function Two() {
    const conversation: mesage[] = [
        {
            speaker: "me",
            text: "Hello bạn, Tôi Là Chấn bé đù!!",
            delay: 0,
        },

        {
            speaker: "me",
            text: "Chúc bạn 20/11 vui vẻ nhé!!",
            delay: 1,
        },

        {
            speaker: "me",
            text: "tôi thạt sự rất tôn trọng và ngưỡng mộ , người đã ",
            delay: 2,
        },

        {
            speaker: "me",
            text: "dùng 20/11 để làm ngày nhà giáo việt nam!!",
            delay: 3,
        },

        {
            speaker: "me",
            text: "bởi vì nó giúp các bạn trẻ hiểu hơn về công việc này , một nghề thục sự sinh đẹp",
            delay: 4,
        },

        {
            speaker: "me",
            text: "dù nhìn từ góc đọ nào đi nữa",
            delay: 5,
        },

        {
            speaker: "me",
            text: "Nó còn tạo ra co hội để chúng ta nhớ dến và tri ấn những thầy cô",
            delay: 6,
        },
        {
            speaker: "me",
            text: "đã thay đổi cách chúng ta nhìn thế giói này!!",
            delay: 7,
        },
        {
            speaker: "me",
            text: "mang lại những giá trị mà ko thể đo đếm được..",
            delay: 8,
        },
    ];
    const conan: mesage[] = [
        {
            speaker: "conan",
            text: "Vậy bạn kể cho minhg về giáo viên đã thay đổi bạn đi!!.",
            delay: 0,
        },
        {
            speaker: "conan",
            text: "Có được ko.",
            delay: 1,
        },
    ];
    const [conten, setcontent] = useState<mesage[]>(conversation);
    const handalclick = () => {
        setShow(!false);
        setTimeout(() => {
            setcontent([]);
            setStudent(true);
        }, 8500);
        setTimeout(() => {
            setStudent(false);
            setcontent([
                {
                    speaker: "me",
                    text: "được chứ.",
                    delay: 0,
                },
                {
                    speaker: "me",
                    text: "vậy hãy học xong tiết toán này đã nhé!!",
                    delay: 1,
                },
            ]);
        }, 10500);

        setTimeout(() => {
            setcontent([]);
            setend(true);
        }, 13000);
        
        setTimeout(() => {
            setcontent([
                {
                    speaker: "me",
                    text: "hết giờ rồi , đi thôi.",
                    delay: 1,
                },
            ]);
        }, 13000);
    };
    const [show, setShow] = useState(false);
    const [end, setend] = useState(false);
    const [showconan, setShowconan] = useState<mesage[]>(conan);
    const [student, setStudent] = useState(false);

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/three");
    };
    return (
        <div className="w-[100vw] h-[100vh] m">
            <AnimatedWave2 />
            {end && (
                <div className="btn-container absolute top-100 left-150 z-10">
                    <button className="btn" onClick={handleNext}>
                        <span className="btn-text">cùng đi nào!</span>
                    </button>
                </div>
            )}

            <Hanghoa />
            <img
                src={img1}
                alt=""
                className="absolute left-0 bottom-0"
                width={200}
            />
            <div>
                <img
                    src={img2}
                    alt=""
                    className="slide-in-elliptic-top-fwd absolute left-90 top-30"
                />
                <img
                    src={img5}
                    alt=""
                    className="absolute left-70 bottom-120 v2"
                    width={100}
                />

                <img
                    src={img3}
                    alt=""
                    className="slide-in-blurred-left absolute right-10 top-40"
                />
                {end && (
                    <img
                        src={img6}
                        alt=""
                        className="huhuhu slide-in-blurred-left absolute right-120 top-0"
                        width={300}
                    />
                )}

                {student && (
                    <img
                        src={img4}
                        alt=""
                        className="tilt-in-fwd-tr2 absolute left-220 bottom-70"
                        width={600}
                    />
                )}
                {student && (
                    <div className="w-[370px] h-[180px] bg-red absolute  left-260 bottom-130 flex flex-col justify-center items-center">
                        {showconan.map((a, index) => (
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
                        ))}
                    </div>
                )}

                {!show && (
                    <button
                        className="bounce-in-top"
                        onClick={() => handalclick()}
                    >
                        <span className="shadow" />
                        <span className="edge" />
                        <span className="hocbainao front text">
                            Cùng học bài nào
                        </span>
                    </button>
                )}
                {show && (
                    <div className="w-120 h-80 absolute left-140 top-30 flex flex-col justify-center items-center">
                        {conten.map((a, index) => (
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
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
