import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allProduct } from "../components/Actions/allProductList";
import photo from "../assets/images/Laptop-and-Smart-Phone.jpg"

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state?.product?.data);
    // console.log(products?.Product,"567890");
    useEffect(() => {
        dispatch(allProduct());
    }, [dispatch]);

    const Cart = () => {
        const dispatch = useDispatch();
        const products = useSelector((state) => state?.product?.data);
        // console.log(products?.Product,"567890");
        useEffect(() => {
            dispatch(allProduct());
        }, [dispatch]);

    }
    

    return (
        <>

            <div className="container">
                <div className="row">
                    {products?.Product?.map((items) => {
                        return (

                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <p className="text-center">{items?.categoryId?.category}</p>
                                    <img className="card-img-top" src={photo} width={"50px"} alt="sample" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{items?.name}</h5>
                                        <p className="card-text">{items?.specification}</p>
                                        <p className="card-text">{items?.color}</p>
                                        <button className="btn btn-danger"  > Add to Cart</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                    }
                </div>
            </div>

        </>
    );
};

export default Products;