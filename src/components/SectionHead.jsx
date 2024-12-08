
export const SectionHead = ({ headlineIcon, headline, subHeadline }) => {
    return (
        <div className="text-center mb-[2rem]">
            <h2 className="text-center text-[2.15rem] text-neutral-800 dark:text-neutral-100 font-semibold dark:font-medium max-[419px]:leading-[2.65rem]">
                <span className="mr-1">{headlineIcon}</span>{headline}
            </h2>
            <p className="font-medium dark:font-light dark:tracking-wide max-[419px]:mt-2 mt-1 max-[484px]:leading-[1.35rem]">
                {subHeadline}
            </p>
        </div>
    );
};
