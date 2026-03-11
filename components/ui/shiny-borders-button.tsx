import React from "react";

interface RealismButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

const RealismButton = ({ text, onClick, className = "" }: RealismButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`group relative p-[2px] rounded-[14px] text-[1.1rem] md:text-[0.95rem] border-none cursor-pointer bg-[radial-gradient(circle_80px_at_80%_-10%,_#00ff9940,_#181b1b)] transition-all ${className}`}
        >
            <div className="absolute top-0 right-0 w-[65%] h-[60%] rounded-[120px] shadow-[0_0_20px_#00ff9920] group-hover:shadow-[0_0_35px_#00ff9940] transition-all duration-300 ease-out -z-10" />

            <div className="absolute bottom-0 left-0 w-[45px] h-[55%] rounded-[15px] transition-all duration-300 ease-out 
        bg-[radial-gradient(circle_60px_at_0%_100%,_#00ff99,_#00ff8060,_transparent)] 
        shadow-[-2px_9px_35px_#00ff9940] 
        group-hover:w-[75px] group-hover:shadow-[-4px_1px_40px_#00ff9960]" />

            <div className="relative px-[24px] py-[13px] md:px-[18px] md:py-[10px] group-hover:scale-[1.05] rounded-[12px] text-white bg-[radial-gradient(circle_100px_at_80%_-50%,_#052c1e,_#070909)] z-10 transition-all duration-300 whitespace-nowrap border border-[#00ff9920]">
                <span className="font-bold tracking-tight">{text}</span>

                <div className="absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_80px_at_0%_100%,_#00ff9915,_#0000ff05,_transparent)] z-[-1]" />
            </div>
        </button>
    );
};

export default RealismButton;
