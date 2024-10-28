import { NavLink } from "react-router-dom";


export const MenuLink = ({ destination, menuLinkText, addStyles, activeStyles, onClick=null }) => {
    return (
        <NavLink to={destination} onClick={onClick} className={`${addStyles} dark:tracking-wide duration-200 ease-linear`}>
            {({ isActive }) => (
                <span className={`${isActive && activeStyles}`}>
                    {menuLinkText}
                </span>
            )}
        </NavLink>
    );
};
