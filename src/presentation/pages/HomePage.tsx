import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/storeHooks";

import { displayPaginatedProducts } from "../../core/action_creators/product/display_paginated_products_action_creators";

const HomePage = () => {
  const state = useAppSelector((state) => state.displayPaginatedProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      displayPaginatedProducts({
        filterCriteria: null,
        limit: 5,
        page: 1,
      })
    );
  }, [dispatch]);

  const renderProducts = () => {
    return (
      <div>
        {state.paginatedProductResult?.productsWithPageAndLimit.results.map(
          (p) => (
            <li>{p.title}</li>
          )
        )}
      </div>
    );
  };

  return (
    <>
      <div>HOME PAGE GETTING DISPLAYED</div>
      <div>{state.isLoading ? "LOADING....." : renderProducts()}</div>
    </>
  );
};

export default HomePage;
