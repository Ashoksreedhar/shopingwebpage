function ProductCard({ product }) {
    return (
        <div className="productcard">
            <img src={product.image} alt={product.title} />

            <div className="details">
                <h3>{product.title}</h3>
                <p>₹ {product.price}</p>
                <p>{product.category}</p>
                <p className="bg-green-800 w-20 text-white text-sm p-1">Rating: {product.rating.rate}</p>
            </div>

            <button className="Addbtn" onClick={() => console.log(product.title)}>
                ADD TO CART
            </button>
        </div>

    );
}

export default ProductCard;
