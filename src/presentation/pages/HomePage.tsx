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
import { HomePageWrapperStyled, LoadingSpinnerWrapper } from "../styled_components/home/HomePageWrapperStyled";
import FilterCategories, { CatItem } from "../components/home_page/FilterCategories";
import { FilterCategoryResponsiveModalIconStyled, FilterCategoryResponsiveModalStyled, FilterCategoryResponsiveModalTitleStyled, FilterCategoryResponsiveModalTitleWrapperStyled, FilterCategorySubCategoryItemStyled, FilterCategorySubCategoryWrapperStyled } from "../styled_components/common/NewFilterComponentsStyled";
import MainCategory from "../../core/models/category/main_category";
import { IoMdClose } from "react-icons/io";
import { ICON_SIZE_MEDIUM } from "../constants/sizes";
import FilterCriteria from "../../core/models/filter/filter_criteria";
import useScrollToTop from "../custom_hooks/useScrollToTop";

const HomePage = () => {
  const state = useAppSelector((state) => state.displayPaginatedProducts);
  const filterCriteria = useAppSelector((state) => state.filterCriteria);  

  useScrollToTop();
  const [selectedMainCategory, setSelectedCategory] = useState<MainCategory | null>(null);

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
      <PaginatedProducts products={state.paginated?.productsWithPageAndLimit.results ?? []} />
    );
  };

  const renderSubCategories = () => {

    return selectedMainCategory && <FilterCategories
      isSubCat={true}
      onCategorySelected={(subCat: CatItem | null) => {
        dispatch(
          modifyFilterCriteria({
            ...filterCriteria,
            subCategory: subCat?.value
          } as FilterCriteria)
        )
      }}
      categories={(selectedMainCategory?.subCategories ?? []).map(e => {
        return { title: e.title, value: e._id }
      })}
      selectedCategory={filterCriteria?.subCategory ?? null}
    />
  }

  const renderMainCategories = () => {

    return (
      <>
        <FilterCategories
          isSubCat={false}
          onCategorySelected={(mainCat: CatItem | null) => {
            if (mainCat == null) {
              setSelectedCategory(null);
            }
            else {
              setSelectedCategory(state.paginated!.categories.filter(e => e._id === mainCat?.value)[0])
            }
            dispatch(
              modifyFilterCriteria({
                ...filterCriteria,
                mainCategory: mainCat?.value ?? null,
                subCategory: null
              } as FilterCriteria)
            )
          }}
          categories={(state.paginated?.categories ?? []).map(e => {
            return { title: e.title, value: e._id }
          })}
          selectedCategory={filterCriteria?.mainCategory ?? null}
        />
        {
          selectedMainCategory !== null && <FilterCategoryResponsiveModalStyled>
            <FilterCategoryResponsiveModalTitleWrapperStyled>
              <FilterCategoryResponsiveModalTitleStyled>
                {
                  selectedMainCategory!.title.split(";")[0]
                }
              </FilterCategoryResponsiveModalTitleStyled>
              <FilterCategoryResponsiveModalIconStyled>
                <IoMdClose size={ICON_SIZE_MEDIUM} onClick={() => setSelectedCategory(null)} />
              </FilterCategoryResponsiveModalIconStyled>
            </FilterCategoryResponsiveModalTitleWrapperStyled>
            <FilterCategorySubCategoryWrapperStyled>
              {
                selectedMainCategory!.subCategories.map(e =>
                  <FilterCategorySubCategoryItemStyled
                    active={e._id === filterCriteria?.subCategory}
                    onClick={() => {
                      setSelectedCategory(null);
                      dispatch(
                        modifyFilterCriteria({
                          ...filterCriteria,
                          mainCategory: selectedMainCategory?._id ?? null,
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
        {renderMainCategories()}
        {renderSubCategories()}
        {state.isDisplayLoading ?
          <LoadingSpinnerWrapper>
            <LoadingSpinner />
          </LoadingSpinnerWrapper> : renderProducts()}
        {!state.isDisplayLoading && renderLoadMoreButton()}
      </HomePageWrapperStyled>
    </MasterComponent>
  );
};

export default HomePage;
export const HomePageRoute = "/";
