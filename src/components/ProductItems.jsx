import ProductCard from "./ProductCard";

function ProductItems({ products = [] }) {
  return (
    <div className="productlist">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductItems;
