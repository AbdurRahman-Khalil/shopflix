import { NavLink } from "react-router-dom";


export const NavbarLink = ({ destination, navbarLinkText }) => {
    return (
        <NavLink to={destination} className="text-xl md:text-lg font-semibold duration-200 ease-linear">
            {({ isActive }) => (
                <span className={`relative ${isActive ? "before:absolute before:-bottom-1 before:left-0 before:bg-rose-400/60 before:w-full before:h-[0.205rem] before:rounded-full" : ""}`}>
                    {navbarLinkText}
                </span>
            )}
        </NavLink>
    );
};
