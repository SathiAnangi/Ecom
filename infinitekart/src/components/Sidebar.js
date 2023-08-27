import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { categoryList } from "./Actions/categoryList";
import {useNavigate } from "react-router-dom";

const Sidebar = () => {
  // const  { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.data);
  // console.log("categories", categories)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(categoryList());
  }, [dispatch]);

  const categoryRouter = (id) => {
    // console.log(id);
    navigate(`/category/${id}`)
  }

  return (
    <>

      <section>
        <ul className='list-group'>
          {
            categories?.Category?.map((item) => {
              return (
                <li  key={item._id} onClick={()=>{categoryRouter(item?._id)}} class="list-group-item">
                  {item?.category}
                </li>
              )

            })
          }
        </ul>

      </section>
    </>
  )
}

export default Sidebar