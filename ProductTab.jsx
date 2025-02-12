import Product from "./Product";
function ProductTab(){
    let styles={
        flexWrap:"Wrap",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    };
   return <div style={styles}>
    <Product title="Logestic MX MAster" idx={0} />
    <Product title="Apple Pencil (2nd Geb)" idx={1} /> 
    <Product title="Zebronics Zeb-transformation" idx={2}/>
    <Product title="Petronics Toad 23" idx={3}/>
    </div>
}
export default ProductTab;