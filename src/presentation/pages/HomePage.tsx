import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/storeHooks";

import { displayPaginatedProducts } from "../../core/action_creators/product/display_paginated_products_action_creators";
import { HomePageWrapperStyled } from "../styled_components/home/HomePageWrapperStyled";
import PaginatedProducts from "../components/home_page/PaginatedProducts";
import FilterCategories from "../components/home_page/FilterCategories";
import LoadMoreButton from "../components/home_page/LoadMoreButton";
import { loadMoreProducts } from "../../core/action_creators/product/load_more_products_action_creators";
import MainCategory from "../../core/models/category/main_category";
import { modifyFilterCriteria } from "../../core/action_creators/product/filter_criteria_action_creators";
import FilterCriteria from "../../core/models/filter/filter_criteria";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { ProductListItemNoMoreProductsStyled } from "../styled_components/common/ProductListItemStyled";
import MasterComponent from "../components/common/MasterComponent";

const HomePage = () => {
  const state = useAppSelector((state) => state.displayPaginatedProducts);
  const filterCriteria = useAppSelector((state) => state.filterCriteria);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const initialPageAndLimit = {
      filterCriteria: filterCriteria,
      limit: 5,
      page: 1,
    };

    dispatch(displayPaginatedProducts(initialPageAndLimit));
  }, [dispatch, filterCriteria]);

  const renderProducts = () => {
    return (
      <PaginatedProducts
        hasMargin
        products={state.paginated?.productsWithPageAndLimit.results ?? []}
      />
    );
  };

  const renderCategories = () => {
    return (
      <FilterCategories
        onCategorySelected={(value: MainCategory) =>
          dispatch(
            modifyFilterCriteria({
              ...filterCriteria,
              mainCategory: value._id,
            } as FilterCriteria)
          )
        }
        categories={state.paginated?.categories ?? []}
        selectedMainCategory={filterCriteria?.mainCategory ?? ""}
      />
    );
  };

  const renderLoadMoreButton = () => {
    var objectToRender = state.isLoadingMore ? (
      <LoadingSpinner />
    ) : state.paginated?.productsWithPageAndLimit.next && (
      <LoadMoreButton
        text="Load More"
        onPressed={() =>
          dispatch(
            loadMoreProducts({
              filterCriteria: null,
              limit: state.paginated?.productsWithPageAndLimit.next?.limit ?? 5,
              page: state.paginated?.productsWithPageAndLimit.next?.page ?? 1,
            })
          )
        }
      />
    );
    return objectToRender;
  };

  return (
    <MasterComponent activePage={HomePageRoute}>
      <HomePageWrapperStyled>
        {renderCategories()}
        {state.isDisplayLoading ? <LoadingSpinner /> : renderProducts()}
        {!state.isDisplayLoading && renderLoadMoreButton()}
      </HomePageWrapperStyled>
    </MasterComponent>
  );
};

export default HomePage;
export const HomePageRoute = "/";
