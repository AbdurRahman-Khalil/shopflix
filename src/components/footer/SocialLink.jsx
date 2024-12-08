

export const SocialLink = ({ socialLinkUrl, socialLinkIcon }) => {
    return (
        <a
            href={socialLinkUrl}
            target="_blank"
            className="text-[1.25rem] min-[346px]:text-[1.3rem] hover:scale-[1.17] duration-200 ease-linear"
        >
            {socialLinkIcon}
        </a>
    );
};
