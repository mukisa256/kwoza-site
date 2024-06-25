import "./GoodsStyle.css";
import GoodsData from "./GoodsData";
import Manager1 from "../asserts/images.jpg";
import Manager2 from "../asserts/yt.jpg";
import Manager3 from "../asserts/gallery2.jpg";

const products = [
    { id: 1, image: Manager1, heading: "Independent Product 1", text: "kwoza pure Delight", price: "UGX 1000", rating: 4 },
    { id: 2, image: Manager2, heading: "Independent Product 2", text: "Kwoza Soft Serenade.", price: "UGX 1000", rating: 5 },
    { id: 3, image: Manager3, heading: "Independent Product 3", text: "Kwoza multiclean.", price: "UGX 1000", rating: 3 },
    { id: 4, image: Manager1, heading: "Independent Product 1", text: "kwoza pure Delight", price: "UGX 1000", rating: 4 },
    { id: 5, image: Manager2, heading: "Independent Product 2", text: "Kwoza Soft Serenade.", price: "UGX 1000", rating: 5 },
    { id: 6, image: Manager3, heading: "Independent Product 3", text: "Kwoza multiclean.", price: "UGX 1000", rating: 3 },
    
];

function Goods() {
    return (
        <div className="goods">
            <h1 className="goods-title">Products</h1>
            <div className="goods-grid">
                {products.map(product => (
                    <GoodsData
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        heading={product.heading}
                        text={product.text}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    );
}

export default Goods;