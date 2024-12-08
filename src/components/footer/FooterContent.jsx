import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

import { Gmail } from "../../svgs/Gmail";
import { SocialLink } from "./SocialLink";



export const FooterContent = () => {
    return (
        <div className="flex justify-between max-[509px]:flex-col max-[509px]:items-center max-[509px]:gap-3.5">
            <p className="flex items-center gap-1 text-[0.965rem] min-[346px]:text-[1rem] font-semibold dark:font-normal dark:tracking-wide">
                Made with <FaHeart className="text-red-600" /> by Abdur Rahman Khalil
            </p>
            <div className="social_links flex items-center gap-3.5 min-[470px]:gap-3 mb-0.5">
                <SocialLink
                    socialLinkUrl={"https://github.com/AbdurRahman-Khalil"}
                    socialLinkIcon={<FaGithub />}
                />
                <SocialLink
                    socialLinkUrl={"https://www.linkedin.com/in/abdur-rahman-a82882281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                    socialLinkIcon={<FaLinkedin className="text-blue-800 dark:text-blue-700" />}
                />
                <SocialLink
                    socialLinkUrl={"https://m.abdurrahmankhalil2@gmail.com"}
                    socialLinkIcon={<Gmail />}
                />
            </div>
        </div>
    );
};
