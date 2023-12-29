import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfetchedCategory, fetchEmojies } from "../Store/Slice/EmojieSlice";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function EmojiesHub() {
  const data = useSelector((state) => state.emojies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEmojies());
  }, [dispatch]);

  const uniqueCategories = [
    ...new Set(data.emojie.map((emoji) => emoji.category)),
  ];

  const fetchCategory = async (category) => {
    try {
      const res = await fetch(
        `https://emojihub.yurace.pro/api/all/category/${category}`,
        {
          method: "GET",
        }
      );

      if (!res.ok) {
        console.log("Not able to fetch Category...");
      }

      const rec = await res.json();
      dispatch(addfetchedCategory(rec));
      console.log(rec);

      navigate(`/detailedEmojies`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h5 className="text-center text-info mt-5 fw-bold ">
        Emojies Categories
      </h5>
      <div className="container rounded-3 mt-5">
        {data.status === 'loading' && <p className="text-center"><Loader/></p>}
        {data.status === 'failed' && <p className="text-center text-danger">Error: {data.error}</p>}
        {data.status === 'succeeded' && (
          <div className="row">
            {uniqueCategories.map((category, index) => (
              <div key={index} className="col-md-2 mb-4">
                <button
                  className="text-primary btn btn-outline-primary w-100"
                  onClick={() => fetchCategory(category)}
                >
                  <a
                    href={`#${category}`}
                    className="text-decoration-none text-dark text-primary"
                  >
                    {category}
                  </a>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default EmojiesHub;
