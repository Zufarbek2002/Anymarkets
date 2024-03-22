import FooterHomeComp from "../components/FooterHomeComp";
import ProductsComp from "../components/ProductsComp";

const Goods = ({ name }) => {
  return (
    <div>
      <ProductsComp name={name} />
      <FooterHomeComp />
    </div>
  );
};

export default Goods;
