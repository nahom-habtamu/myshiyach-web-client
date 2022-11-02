import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/storeHooks";

import { displayPaginatedProducts } from "../../core/action_creators/product/display_paginated_products_action_creators";
import { HomePageWrapperStyled } from "../styled_components/home/HomePageWrapperStyled";
import PaginatedProducts from "../components/home_page/PaginatedProducts";

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
      <PaginatedProducts
        paginatedProductsResult={
          state.paginatedProductResult?.productsWithPageAndLimit ?? null
        }
      />
    );
  };

  return (
    <HomePageWrapperStyled>
      <div>{state.isLoading ? "LOADING....." : renderProducts()}</div>
    </HomePageWrapperStyled>
  );
};

export default HomePage;
