import { useNavigate } from "react-router-dom";

import { MdKeyboardBackspace } from "react-icons/md";


export const BackBtn = () => {
    const navigate = useNavigate();
    
    return (
        <MdKeyboardBackspace
            role="button"
            onClick={() => navigate(-1)}
            className="text-[2rem] -ml-0.5 hover:-translate-x-[0.35rem] transition-transform duration-200 ease-linear"
        />
    );
};
