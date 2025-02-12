import "./Product.css";
import ProductTab from "./ProductTab";
import Price from "./Price";
function Product({ title,price,features,idx, }){
   let oldPrice=["12,495","11,900","1,599","599"]
   let newPrice=["8,999","9,299","999","299"]
   let Description=[["8,000 DPI","5 programmable buttons"] ,["intuitive surface","best product"],["designed for ipad pro","deep color"],["wireless","best voice"]]
   
   return (
    <div className="Product" >
     <h4>{title}</h4>
     <p>{Description[idx][0]}</p>
     <p>{Description[idx][1]}</p>
     <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
   
    </div>
    );
}
export default Product;