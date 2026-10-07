import { useParams } from "react-router-dom";

function ProductsDetails() {
  const { id } = useParams();

  return (
    <>
      <h1>Product ID: {id}</h1>
    </>
  );
}

export default ProductsDetails;