const generateSlug = (title) => (
    title
        .toLowerCase()
        .replace(/ /g, '_')
        .replace(/[^\w-]+/g, '')
);

export default generateSlug;