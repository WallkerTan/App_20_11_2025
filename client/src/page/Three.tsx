import React, { useState } from "react";
import "./three.css";

import thuyen from "../assets/thuyen.png";
import chatme from "../assets/ec1a886c2e959457b463abf52a97707f-removebg-preview.png";
import chatconan from "../assets/Screenshot_2025-11-16_093735-removebg-preview.png";
import tan from "../assets/tan.png";
import wow from "../assets/wow-removebg-preview.png";
import topleft from "../assets/nhìn_trên_trái-removebg-preview.png";
import conan from "../assets/2d4ad967642eb0295e5e1098c6bf0e0a-removebg-preview.png";
import AnimatedWave from "./../components/Wave1";
import toancanh from "../assets/content_danh-gia-truong-thpt-dong-dau-vinh-phuc-co-tot-khong__3_.jpg";
import thuyngiay from "../assets/thuyền_giấy-removebg-preview.png";
import searchimg from "../assets/search-removebg-preview.png";
import coha from "../assets/cô hà.jpg";
import coha2 from "../assets/492529200_23880072494930648_942987915140390872_n.jpg";
import bdg from "../assets/bdg.jpg";
import congtrg from "../assets/OIP (1).webp";
import bongchuyen from "../assets/bongchuyen.jpg";
import coha4 from "../assets/500126937_24160945400176688_1027668086692354397_n.jpg";
import img1 from "./../assets/download__16_-removebg-preview.png";
import img2 from "./../assets/download__17_-removebg-preview.png";
import img3 from "./../assets/download__18_-removebg-preview.png";
type mesage = {
    text: string;
    delay: number;
};
type past = {
    show: boolean;
    img: string;
};

export default function Three() {
    const theTvPast: past = {
        img: toancanh,
        show: false,
    };
    const tanTalk: mesage[] = [
        { text: "Đây là dòng sông thời gian", delay: 0 },
        { text: " trong truyền thuyết", delay: 1 },
        { text: "Đnó sẽ đưa chúng đi 1 vòng", delay: 2 },
        {
            text: " qua những trạm ở quá khứ!",
            delay: 3,
        },
    ];
    const conanTalk: mesage[] = [
        { text: "cái j vừa xuất hiện vậy!", delay: 4 },
    ];
    const [year, setyear] = useState("2021");
    const [btnabc, setbtnabs] = useState(true);
    const [clickme, setclickme] = useState(false);
    const [Quakhu, setQuakhu] = useState<past>(theTvPast);
    const [showTan, setShowTan] = useState(false);
    const [showConan, setShowconan] = useState(false);
    const [groupChatTan, setGroupChatTan] = useState<mesage[]>(tanTalk);
    const [groupChatConan, setGroupChatConan] = useState<mesage[]>(conanTalk);
    const StartFilm = () => {
        setShowTan(true);
        setShowconan(true);
        setbtnabs(false);
        // Hiển thị cảnh sông thời gian ban đầu
        setTimeout(() => {
            setQuakhu((prev) => ({
                ...prev,
                show: true,
            }));
        }, 3000);

        // Xóa chat cũ
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
        }, 6000);

        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
            setQuakhu((prev) => ({
                ...prev,
                img: coha2,
            }));
            setyear("1/12/2021");
        }, 6800);
        // Tân kể về cô Hà lần 1
        setTimeout(() => {
            setGroupChatTan([
                { text: "đó là cô Hà, một người thầy vô cùng", delay: 0 },
                { text: "tuyệt vời!!!", delay: 1 },
                {
                    text: "thực ra, trước mặt học sinh cô ấy rất nghiêm khắc",
                    delay: 2,
                },
                { text: "có thể coi là độc ác nếu chỉ gặp 1 lần", delay: 3 },
            ]);
            setGroupChatConan([
                { text: "Đáng sợ vậy sao?", delay: 1 },
                { text: "Cũng không hẳn", delay: 2 },
            ]);
            setShowTan(true);
            setShowconan(true);
        }, 7000);

        // Xóa chat cũ
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
        }, 13000);

        // Tân kể tiếp về kỷ niệm học muộn
        setTimeout(() => {
            setGroupChatTan([
                { text: "hồi đó mình có đi học muộn mấy lần", delay: 0 },
                { text: "và lần nào cũng bị gọi phụ huynh cả", delay: 1 },
                { text: "túc thì không thể diễn tả được", delay: 2 },
                {
                    text: "nhưng sau mỗi lần đó tôi lại đi học đúng hơn",
                    delay: 3,
                },
            ]);
            setGroupChatConan([
                {
                    text: "Chỉ vậy thôi sao? Điều gì đã thay đổi bạn?",
                    delay: 1,
                },
            ]);
            setShowTan(true);
            setShowconan(true);
        }, 14000);

        // Xóa chat cũ
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
        }, 20000);

        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
            setQuakhu((prev) => ({
                ...prev,
                img: coha4,
            }));
            setyear("2/4/2022");
        }, 20500);
        // Tân kể về dịch bệnh 2021-2022
        setTimeout(() => {
            setGroupChatTan([
                {
                    text: "năm 2021, 2022, dịch bệnh bùng phát, tôi mắc COVID nên phải nghỉ học",
                    delay: 0,
                },
                {
                    text: "như bao người khác, tôi ở nhà chỉ chơi thôi",
                    delay: 1,
                },
                { text: "nhưng cô Hà, ngày nào cũng gọi Zalo", delay: 2 },
                {
                    text: "gửi bài tập cho tôi và kiểm tra vào tối hôm sau",
                    delay: 3,
                },
            ]);
            setGroupChatConan([{ text: "Tôi thấy vô cùng mệt mỏi", delay: 1 }]);
            setShowTan(true);
            setShowconan(true);
        }, 21000);

        // Xóa chat cũ
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
        }, 28000);

        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
            setQuakhu((prev) => ({
                ...prev,
                img: congtrg,
            }));
            setyear("31/12/2021");
        }, 28500);
        // Tân kể về gia cảnh cô Hà
        setTimeout(() => {
            setGroupChatTan([
                {
                    text: "khi đến nhà cô, tôi thấy cô đang 1 mình nuôi hai con nhỏ",
                    delay: 0,
                },
                { text: "với mẹ già yếu ở nhà", delay: 1 },
                {
                    text: "sáng dạy đến trưa lại về nấu cơm cho gia đình",
                    delay: 2,
                },
                { text: "vẫn có thời gian dạy tôi mỗi tối", delay: 3 },
            ]);
            setGroupChatConan([
                { text: "Cô ấy có vẻ rất vất vả nhỉ?", delay: 1 },
                {
                    text: "Đúng rồi, nhìn cô bề ngoài vô cùng mạnh mẽ",
                    delay: 2,
                },
                { text: "có lẽ là do cô làm việc rất nhiều", delay: 3 },
            ]);
            setShowTan(true);
            setShowconan(true);
        }, 29000);

        // Xóa chat cũ
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
        }, 36000);

        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
            setQuakhu((prev) => ({
                ...prev,
                img: bongchuyen,
            }));
            setyear("13/10/2023");
        }, 36800);
        // Tân kể sâu hơn về cô Hà
        setTimeout(() => {
            setGroupChatTan([
                {
                    text: "nhưng sâu bên trong đó là 1 người phụ nữ đang gánh cả gia đình trên vai",
                    delay: 0,
                },
                { text: "thật khó tin mà, cô ấy đỉnh thật đó", delay: 1 },
                { text: "hehe, tôi rất tự hào đó", delay: 2 },
            ]);
            setGroupChatConan([{ text: "Ooh đây là đâu vậy?", delay: 1 }]);
            setShowTan(true);
            setShowconan(true);
        }, 37000);

        // Xóa chat cũ
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
        }, 43000);

        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
            setQuakhu((prev) => ({
                ...prev,
                img: bdg,
            }));
            setyear("10/6/2023");
        }, 43500);
        // Tân kể về du lịch Hải Phòng
        setTimeout(() => {
            setGroupChatTan([
                {
                    text: "đây là lần chúng tôi đi du lịch ở Hải Phòng",
                    delay: 0,
                },
                {
                    text: "cô ấy là người tự đứng ra tổ chức mọi thứ cho chúng tôi, năm nào cũng vậy",
                    delay: 1,
                },
                {
                    text: "mỗi lần đi, cô ấy đều là người gắn kết tất cả chúng tôi lại",
                    delay: 2,
                },
            ]);
            setGroupChatConan([{ text: "Vui quá đi, trời!", delay: 1 }]);
            setShowTan(true);
            setShowconan(true);
        }, 44000);

        // Xóa chat cũ
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
        }, 50000);

        // Tân kể về kỷ niệm đi xe, thu điện thoại, điểm cao
        setTimeout(() => {
            setGroupChatTan([
                {
                    text: "mấy lần tôi đi xe có con chuột chạy ngang, tôi có làm xước xe thầy hiệu trưởng",
                    delay: 0,
                },
                { text: "cô cũng xin giúp tôi đó nha", delay: 1 },
                {
                    text: "nhưng tôi vẫn phải xin lỗi, xin lỗi là nhẹ quá",
                    delay: 2,
                },
                {
                    text: "điều phiền phức nhất là tôi hở chút là bị cô thu điện thoại tận 3 tháng",
                    delay: 3,
                },
            ]);
            setGroupChatConan([
                {
                    text: "Huhu, buồn lắm, nhưng nhờ đó mà điểm tôi cao lên từng ngày",
                    delay: 1,
                },
            ]);
            setShowTan(true);
            setShowconan(true);
        }, 51000);

        // Xóa chat cũ
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
        }, 58000);

        // Tân kể về sự cố gắng của cô Hà thời đi học
        setTimeout(() => {
            setGroupChatTan([
                { text: "ngày xưa học cấp 3 cô ấy học không giỏi", delay: 0 },
                {
                    text: "các thầy cô luôn khuyên cô ấy học cao đẳng",
                    delay: 1,
                },
                { text: "nói rằng cô ấy không thể đỗ được", delay: 2 },
                {
                    text: "chưa đâu, gia đình cô ấy chỉ có mẹ ủng hộ việc đi học đại học",
                    delay: 3,
                },
                { text: "ba thì luôn nói cô ấy đi lấy chồng đi", delay: 4 },
                {
                    text: "vậy cô ấy đi lấy chồng sao? Không đâu, cô ấy quyết tâm đi học",
                    delay: 5,
                },
                {
                    text: "và cuối cùng là người đỗ Sư phạm Lý với điểm cao nhất lớp",
                    delay: 6,
                },
                {
                    text: "và cũng là người đầu tiên ra trường được vào biên chế",
                    delay: 7,
                },
            ]);
            setGroupChatConan([{ text: "Tuyệt vời!", delay: 1 }]);
            setShowTan(true);
            setShowconan(true);
        }, 59000);

        // Xóa chat cũ và xuất hiện cô Hà, đổi ảnh
        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
            setQuakhu((prev) => ({
                ...prev,
                img: coha,
            }));
            setyear("20/11/2024");
        }, 68000);

        // Tân kết thúc, nhắc 20/11
        setTimeout(() => {
            setGroupChatTan([
                { text: "Sắp tới 20/11, cậu có về thăm cô không?", delay: 0 },
                {
                    text: "Tôi ư? Không đâu, bao giờ trở thành sinh viên Rikkei xuất sắc tôi sẽ tự tin quay lại gặp cô",
                    delay: 1,
                },
            ]);
            setGroupChatConan([
                { text: "Tuyệt vời, cố lên!", delay: 1 },
                {
                    text: "Có lời nào muốn nói với cô dịp 20/11 không?",
                    delay: 2,
                },
                { text: "Có chứ...", delay: 3 },
            ]);
            setShowTan(true);
            setShowconan(true);
        }, 69000);
        setTimeout(() => {}, 72000);

        setTimeout(() => {
            setGroupChatTan([]);
            setGroupChatConan([]);
            setShowTan(false);
            setShowconan(false);
            setQuakhu((prev) => ({
                ...prev,
                show: false,
            }));
            setbtnabs(false);
            setclickme(true);
        }, 74000);
    };

    return (
        <>
            <div className="bgimg puff-in-center w-[100vw] h-[100vh] bg-sky-500 flex flex-col justify-center items-center text-5xl text-white">
                <AnimatedWave />
                <div className="vibrate-1 absolute top-10">
                    Dòng sông thời gian
                </div>

                <div className="slide-in-blurred-right shake-horizontal relative w-[500px] h-[500px]  top-50 left-120">
                    <img
                        src={tan}
                        alt=""
                        className="absolute bottom-50 right-60"
                        width={400}
                    />
                    <img
                        src={conan}
                        alt=""
                        className="absolute bottom-70 right-60"
                        width={200}
                    />
                    <img
                        src={thuyen}
                        alt=""
                        className="absolute bottom-20 right-50"
                    />
                    {showTan && (
                        <div className="relative bottom-70 right-50">
                            <img src={chatme} alt="" />
                            <div className=" text-2xl w-80 h-40 text-black absolute top-24 right-40 flex flex-col justify-center items-center">
                                {groupChatTan.map((a, index) => (
                                    <div
                                        key={index}
                                        className="typing-css"
                                        style={{
                                            animationDelay: `${a.delay}s`,
                                            "--steps": a.text.length,
                                            "--width": `${a.text.length}ch`,
                                            "--delay": `${a.delay}s`,
                                        }}
                                    >
                                        {a.text}
                                    </div>
                                ))}
                            </div>

                            <img
                                src={topleft}
                                alt=""
                                width={90}
                                className="absolute top-60 right-50 updown"
                            />
                        </div>
                    )}
                    {showConan && (
                        <div className=" relative bottom-170 left-20">
                            <img src={chatconan} alt="" width={400} />

                            <div className="w-80 h-40 text-black absolute top-20 right-25 flex flex-col justify-center items-center">
                                {groupChatConan.map((a, index) => (
                                    <div
                                        key={index}
                                        className="typing-css text-2xl"
                                        style={{
                                            animationDelay: `${a.delay}s`,
                                            "--steps": a.text.length,
                                            "--width": `${a.text.length}ch`,
                                            "--delay": `${a.delay}s`,
                                        }}
                                    >
                                        {a.text}
                                    </div>
                                ))}
                            </div>

                            <img
                                src={wow}
                                alt=""
                                width={100}
                                className="absolute top-80 right-80 updown"
                            />
                        </div>
                    )}
                </div>
                {Quakhu.show && (
                    <div className="bounce-in-top shake-horizontal w-[800px] h-[800px] absolute left-0 ">
                        <img
                            src={thuyngiay}
                            alt=""
                            className="absolute bottom-0"
                        />
                        <img
                            src={Quakhu.img}
                            alt=""
                            width={500}
                            className="vibrate-1 absolute top-50 0"
                        />
                        <img
                            src={searchimg}
                            alt=""
                            className="absolute bottom-100"
                        />
                        <div
                            className="typing-css w-[100px] h-50px absolute top-30 left-40"
                            style={{
                                animationDelay: `${0.1}s`,
                                "--steps": year.length,
                                "--width": `${year.length}ch`,
                                "--delay": `${1}}s`,
                            }}
                        >
                            {year}
                        </div>
                    </div>
                )}
                {btnabc && (
                    <button onClick={StartFilm}>
                        <a className="codepen-button">
                            <span>Start Coding</span>
                        </a>
                    </button>
                )}
                {clickme && (
                    <button
                        onClick={() =>
                            (window.location.href = "../20_111.github.io/index.html")
                        }
                    >
                        xem quà!!
                    </button>
                )}
            </div>
        </>
    );
}
