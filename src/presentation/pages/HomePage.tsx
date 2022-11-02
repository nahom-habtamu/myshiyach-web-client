import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/storeHooks";

import { displayPaginatedProducts } from "../../core/action_creators/product/display_paginated_products_action_creators";
import { HomePageWrapperStyled } from "../styled_components/home/HomePageWrapperStyled";
import PaginatedProducts from "../components/home_page/PaginatedProducts";
import FilterCategories from "../components/home_page/FilterCategories";

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

  const renderCategories = () => {
    return (
      <FilterCategories
        categories={state.paginatedProductResult?.categories ?? []}
        selectedMainCategory={
          state.paginatedProductResult?.categories[0]._id ?? ""
        }
      />
    );
  };

  return (
    <HomePageWrapperStyled>
      {renderCategories()}
      <div>{state.isLoading ? "LOADING....." : renderProducts()}</div>
    </HomePageWrapperStyled>
  );
};

export default HomePage;
