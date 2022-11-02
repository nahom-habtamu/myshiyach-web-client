import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/storeHooks";

import { displayPaginatedProducts } from "../../core/action_creators/product/display_paginated_products_action_creators";
import { HomePageWrapperStyled } from "../styled_components/home/HomePageWrapperStyled";
import PaginatedProducts from "../components/home_page/PaginatedProducts";
import FilterCategories from "../components/home_page/FilterCategories";
import LoadMoreButton from "../components/home_page/LoadMoreButton";
import { loadMoreProducts } from "../../core/action_creators/product/load_more_products_action_creators";

const HomePage = () => {
  const state = useAppSelector((state) => state.displayPaginatedProducts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const initialPageAndLimit = {
      filterCriteria: null,
      limit: 5,
      page: 1,
    };
    dispatch(displayPaginatedProducts(initialPageAndLimit));
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

  const renderLoadMoreButton = () => {
    var objectToRender = state.isLoadingMoreProducts ? (
      <LoadMoreButton text="Loading More Products...." onPressed={() => {}} />
    ) : state.paginatedProductResult?.productsWithPageAndLimit.next ? (
      <LoadMoreButton
        text="Load More"
        onPressed={() =>
          dispatch(
            loadMoreProducts({
              filterCriteria: null,
              limit:
                state.paginatedProductResult?.productsWithPageAndLimit.next
                  ?.limit ?? 5,
              page:
                state.paginatedProductResult?.productsWithPageAndLimit.next
                  ?.page ?? 1,
            })
          )
        }
      />
    ) : (
      <LoadMoreButton text="No More Products" onPressed={() => {}} />
    );

    return objectToRender;
  };

  return (
    <HomePageWrapperStyled>
      {renderCategories()}
      <div>{state.isDisplayLoading ? "LOADING....." : renderProducts()}</div>
      {renderLoadMoreButton()}
    </HomePageWrapperStyled>
  );
};

export default HomePage;
