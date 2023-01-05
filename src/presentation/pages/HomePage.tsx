import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

import { clearCreateProduct } from "../../core/action_creators/product/create_product_action_creators";
import { displayPaginatedProducts } from "../../core/action_creators/product/display_paginated_products_action_creators";
import { modifyFilterCriteria } from "../../core/action_creators/product/filter_criteria_action_creators";
import { loadMoreProducts } from "../../core/action_creators/product/load_more_products_action_creators";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MasterComponent from "../components/common/MasterComponent";
import PaginatedProducts from "../components/common/PaginatedProducts";
import LoadMoreButton from "../components/home_page/LoadMoreButton";
import { HomePageWrapperStyled } from "../styled_components/home/HomePageWrapperStyled";
import FilterCategories from "../components/home_page/FilterCategories";
import { FilterCategoryResponsiveModalIconStyled, FilterCategoryResponsiveModalStyled, FilterCategoryResponsiveModalTitleStyled, FilterCategoryResponsiveModalTitleWrapperStyled, FilterCategorySubCategoryItemStyled, FilterCategorySubCategoryWrapperStyled } from "../styled_components/common/NewFilterComponentsStyled";
import MainCategory from "../../core/models/category/main_category";
import { IoMdClose } from "react-icons/io";
import { ICON_SIZE_MEDIUM } from "../constants/sizes";
import SubCategory from "../../core/models/category/sub_category";
import FilterCriteria from "../../core/models/filter/filter_criteria";

const HomePage = () => {
  const state = useAppSelector((state) => state.displayPaginatedProducts);
  const filterCriteria = useAppSelector((state) => state.filterCriteria);

  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCreateProduct());
  }, [])

  useEffect(() => {
    const initialPageAndLimit = {
      filterCriteria: filterCriteria,
      limit: 6,
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
      <>
        <FilterCategories
          onTitleClicked={(e: MainCategory) => setSelectedCategory(e)}
          onCategorySelected={(mainCat: MainCategory | null, subCat: SubCategory | null) => {
            dispatch(
              modifyFilterCriteria({
                ...filterCriteria,
                mainCategory: mainCat?._id ?? selectedCategory?._id ?? null,
                subCategory: subCat?._id ?? null
              } as FilterCriteria)
            )
          }}
          categories={state.paginated?.categories ?? []}
          selectedSubCategory={filterCriteria?.subCategory ?? null}
          selectedMainCategory={filterCriteria?.mainCategory ?? null}
        />
        {
          selectedCategory !== null && <FilterCategoryResponsiveModalStyled>
            <FilterCategoryResponsiveModalTitleWrapperStyled>
              <FilterCategoryResponsiveModalTitleStyled>
                {
                  selectedCategory!.title.split(";")[0]
                }
              </FilterCategoryResponsiveModalTitleStyled>
              <FilterCategoryResponsiveModalIconStyled>
                <IoMdClose size={ICON_SIZE_MEDIUM} onClick={() => setSelectedCategory(null)} />
              </FilterCategoryResponsiveModalIconStyled>
            </FilterCategoryResponsiveModalTitleWrapperStyled>
            <FilterCategorySubCategoryWrapperStyled>
              {
                selectedCategory!.subCategories.map(e =>
                  <FilterCategorySubCategoryItemStyled
                    active={e._id === filterCriteria?.subCategory}
                    onClick={() => {
                      setSelectedCategory(null);
                      dispatch(
                        modifyFilterCriteria({
                          ...filterCriteria,
                          mainCategory: selectedCategory?._id ?? null,
                          subCategory: e?._id ?? null
                        } as FilterCriteria)
                      )
                    }}>
                    {
                      e.title.split(";")[0]
                    }
                  </FilterCategorySubCategoryItemStyled>
                )
              }
            </FilterCategorySubCategoryWrapperStyled>
          </FilterCategoryResponsiveModalStyled>
        }
      </>
    );
  };

  const renderLoadMoreButton = () => {
    var objectToRender = state.isLoadingMore ? (
      <LoadingSpinner fullHeightAndWidth={false} />
    ) : state.paginated?.productsWithPageAndLimit.next && (
      <LoadMoreButton
        text="Load More"
        onPressed={() =>
          dispatch(
            loadMoreProducts({
              filterCriteria: filterCriteria,
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
