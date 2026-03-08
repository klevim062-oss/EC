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
            className={`group relative p-[2px] rounded-[14px] text-[1rem] border-none cursor-pointer bg-[radial-gradient(circle_80px_at_80%_-10%,_#ffffff,_#181b1b)] transition-all ${className}`}
        >
            <div className="absolute top-0 right-0 w-[65%] h-[60%] rounded-[120px] shadow-[0_0_18px_#ffffff30] group-hover:shadow-[0_0_30px_#ffffff50] transition-all duration-300 ease-out -z-10" />

            <div className="absolute bottom-0 left-0 w-[40px] h-[50%] rounded-[15px] transition-all duration-300 ease-out 
        bg-[radial-gradient(circle_60px_at_0%_100%,_#3fff75,_#00ff8050,_transparent)] 
        shadow-[-2px_9px_30px_#00ff2d35] 
        group-hover:w-[70px] group-hover:shadow-[-4px_1px_35px_#00ff2d55]" />

            <div className="relative px-[18px] py-[10px] group-hover:scale-[1.04] rounded-[12px] text-white bg-[radial-gradient(circle_80px_at_80%_-50%,_#777777,_#0f1111)] z-10 transition-all duration-300 whitespace-nowrap">
                {text}

                <div className="absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_60px_at_0%_100%,_#00e1ff1a,_#0000ff11,_transparent)] z-[-1]" />
            </div>
        </button>
    );
};

export default RealismButton;
