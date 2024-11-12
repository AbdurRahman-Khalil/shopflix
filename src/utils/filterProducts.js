const filterProducts = (products, category) => {
    
    if (category === "Liked") {
        return products.filter((product) => product.isLiked);

    } else if (category === "Wishlisted") {
        return products.filter((product) => product.isWishlisted);
    }

    return category ? products.filter((product) => product.category === category) : products;
    
};

export default filterProducts;



