import { useDispatch, useSelector } from "react-redux";
import { Brands } from "../components/Actions/brandList";
import { useEffect } from "react";
import brand from '../assets/images/apple.png'

const Brand = () => {
    const dispatch = useDispatch();
    const brands = useSelector((state) => state.brand.list);
    useEffect(() => {
        dispatch(Brands());
    }, [dispatch]);

    return (
        <>

            {/* <div className="container"> */}
                <div className="row">
                    {brands?.Brand?.map((items) => {
                        return (

                            <div className="col-md-3">
                                <div className="card mt-3">
                                    <img className="card-img-top" src={brand} width={"50px"} alt="brand" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{items?.brand}</h5>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                    }
                </div>
            {/* </div> */}

        </>
    );
};

export default Brand;