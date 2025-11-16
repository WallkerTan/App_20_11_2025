import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./cpn.css";

type BtnProps = {
    page: string; // trang muốn đi đến
};

export default function Btn({ page }: BtnProps) {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate(page);
    };

    return (
        <div className="btn-container" onClick={handleNext}>
            <div className="btn-drawer transition-top ">expires in...</div>
            <div className="btn-drawer transition-bottom ">...8 hours</div>
            <button className="btn wtf">
                <span className="btn-text flex">
                    Khám phá <Heart />
                </span>
            </button>
            <div className="omg">
                <svg
                    className="btn-corner"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1 1 32 32"
                >
                    <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
                </svg>
                <svg
                    className="btn-corner"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1 1 32 32"
                >
                    <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
                </svg>
                <svg
                    className="btn-corner"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1 1 32 32"
                >
                    <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
                </svg>
                <svg
                    className="btn-corner"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1 1 32 32"
                >
                    <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
                </svg>
            </div>
        </div>
    );
}
