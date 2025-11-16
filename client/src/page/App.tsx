import React, { useEffect } from "react";
import bg12 from "../assets/downloadMounten.jpg";
import "./App.css";
import "sal.js/dist/sal.css";
import AnimatedWave from "../components/Wave1";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../hook/useCustomRedux";
import { setFilter } from "../store/slice/Background";
export default function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setFilter(1));
    }, [dispatch]);
    return (
        <div
            className="container-3d div-bottom bounce-in-left w-[100vw] h-[100vh] relative overflow-hidden"
            style={{
                width: "100",
                height: "",
                backgroundImage: `url(${bg12})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <AnimatedWave />
            <Outlet />
        </div>
    );
}
