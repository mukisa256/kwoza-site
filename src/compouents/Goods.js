import "./GoodsStyle.css";
import GoodsData from "./GoodsData";
import Manager1 from "../asserts/images.jpg";
import Manager2 from "../asserts/yt.jpg";
import Manager3 from "../asserts/gallery2.jpg";

function Goods() {
    return (
        <div className="goods">
            <h1 className="goods-title">Products</h1>
            <div className="goods-grid">
                <GoodsData
                    image={Manager1}
                    heading="Independent Product 1"
                    text="kwoza pure Delight"
                    price="UGX 1000"
                    rating={4}
                />
                <GoodsData
                    image={Manager2}
                    heading="Independent Product 2"
                    text="Kwoza Soft Serenade."
                    price="UGX 1000"
                    rating={5}
                />
                <GoodsData
                    image={Manager3}
                    heading="Independent Product 3"
                    text="Kwoza multiclean."
                    price="UGX 1000"
                    rating={3}
                />
                <GoodsData
                    image={Manager1}
                    heading="Independent Product 4"
                    text="Kwoza laundryBarSoap."
                    price="UGX 1000"
                    rating={4}
                />
                <GoodsData
                    image={Manager2}
                    heading="Independent Product 5"
                    text="Kwoza cleanwave detergent."
                    price="UGX 1000"
                    rating={5}
                />
                <GoodsData
                    image={Manager3}
                    heading="Independent Product 6"
                    text="Kwoza SoapSurge."
                    price="UGX 1000"
                    rating={2}
                />
            </div>
        </div>
    );
}

export default Goods;
