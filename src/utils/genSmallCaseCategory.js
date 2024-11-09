const genSmallCaseCategory = (category) => (
    category
        .replace(/-/g, ' ')
        .replace(/\w\S*/g, (word) => word.charAt(0).toLowerCase() + word.substring(1).toLowerCase())
);

export default genSmallCaseCategory;