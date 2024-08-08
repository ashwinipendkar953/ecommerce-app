const ProductImage = ({ product }) => {
  return (
    <div className="col-md-6">
      <div className="card w-100">
        <img
          src={product.image}
          className="img-fluid object-fit-cover"
          alt={`${product.name} image`}
          style={{ height: "600px" }}
        />
      </div>
    </div>
  );
};

export default ProductImage;
