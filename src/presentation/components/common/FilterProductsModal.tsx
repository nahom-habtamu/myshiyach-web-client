import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  clearFilterCriteria,
  modifyFilterCriteria,
} from "../../../core/action_creators/product/filter_criteria_action_creators";
import FilterCriteria from "../../../core/models/filter/filter_criteria";
import { useAppSelector, useAppDispatch } from "../../../store/storeHooks";
import { ModalWrapperShadowStyled } from "../../styled_components/common/CommonModalComponentsStyled";
import {
  FilterButton,
  FilterButtonWrapper,
  FilterDropDownInputStyled,
  FilterDropDownOptionStyled,
  FilterModalStyled,
  FilterPriceInputStyled,
  FilterPriceInputWrapperStyled,
  FilterRadioButtonStyled,
  FilterRadioLabelStyled,
  FilterRadioSectionStyled,
} from "../../styled_components/home/HomeFilterModalStyled";

type FilterProductsModelProps = {
  onClose: Function;
};

const initialFilterCriteria: FilterCriteria = {
  maxPrice: null,
  minPrice: null,
  mainCategory: null,
  subCategory: null,
  brand: null,
  city: null,
  sortByPriceAscending: null,
  sortByCreatedByAscending: null,
  keyword: null,
};

const FilterProductsModal = ({ onClose }: FilterProductsModelProps) => {
  const displayPaginatedProductsState = useAppSelector(
    (state) => state.displayPaginatedProducts
  );

  const globalFilterState = useAppSelector((state) => state.filterCriteria);

  const [filterModel, setFilterModel] = useState<FilterCriteria>(
    globalFilterState ?? initialFilterCriteria
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilterModel(globalFilterState ?? initialFilterCriteria);
  }, [globalFilterState]);

  const parseMainCategoryToDropdown = () => {
    var categories = displayPaginatedProductsState.paginated?.categories ?? [];
    return categories.map((e) => {
      return {
        title: e.title,
        value: e._id,
      };
    }) as DropDownItemData[];
  };

  const parseSubCategoryToDropdown = () => {
    var mainCategory = displayPaginatedProductsState.paginated?.categories.find(
      (c) => c._id === filterModel.mainCategory
    );
    return mainCategory?.subCategories.map((e) => {
      return {
        title: e.title,
        value: e._id,
      };
    }) as DropDownItemData[];
  };

  const parseBrandToDropdown = () => {
    let mainCategory = displayPaginatedProductsState.paginated?.categories.find(
      (c) => c._id === filterModel.mainCategory
    );

    let requiredFieldWithBrand = mainCategory!.requiredFields.find(
      (r) => r.objectKey === "brand"
    );

    if (!requiredFieldWithBrand) {
      return null;
    }

    return requiredFieldWithBrand.dropDownValues.map((e) => {
      return {
        title: e,
        value: e,
      };
    }) as DropDownItemData[];
  };

  const renderBrandDropDownInput = () => {
    let brandsToDisplay = parseBrandToDropdown();
    if (brandsToDisplay) {
      return renderDropDownInput("Brand", "brand", brandsToDisplay);
    }
    return <></>;
  };

  const parseCitiesToDropDown = () => {
    return displayPaginatedProductsState.paginated?.cities.map((e) => {
      return {
        title: e,
        value: e,
      };
    }) as DropDownItemData[];
  };

  const sortCriteria = (label: string, objectKey: string, name: string) => {
    return (
      <FilterRadioSectionStyled>
        {label}
        <br />
        <FilterRadioButtonStyled
          type="radio"
          name={name}
          value={0}
          onChange={(e) => {
            setFilterModel({
              ...filterModel,
              [objectKey]: parseInt(e.target.value) === 0,
            });
          }}
          checked={(filterModel as any)[objectKey] === true}
        />
        <FilterRadioLabelStyled>Ascending</FilterRadioLabelStyled>
        <br />
        <FilterRadioButtonStyled
          type="radio"
          name={name}
          value={1}
          onChange={(e) => {
            setFilterModel({
              ...filterModel,
              [objectKey]: parseInt(e.target.value) === 0,
            });
          }}
          checked={(filterModel as any)[objectKey] === false}
        />
        <FilterRadioLabelStyled>Descending</FilterRadioLabelStyled>
      </FilterRadioSectionStyled>
    );
  };

  const renderDropDownInput = (
    placeHolder: string,
    objectKey: string,
    items: DropDownItemData[]
  ) => {
    return (
      <FilterDropDownInputStyled
        placeholder={placeHolder}
        value={(filterModel as any)[objectKey] ?? ""}
        onChange={(e) =>
          setFilterModel({
            ...filterModel,
            [objectKey]: e.target.value,
          })
        }
      >
        {items.map((i) => (
          <FilterDropDownOptionStyled value={i.value}>
            {i.title.split(";")[0]}
          </FilterDropDownOptionStyled>
        ))}
      </FilterDropDownInputStyled>
    );
  };

  const handleRemoveFilters = () => {
    onClose();
    setFilterModel(initialFilterCriteria);
    dispatch(clearFilterCriteria());
  };

  const handleApplyFilters = () => {
    onClose();
    dispatch(
      modifyFilterCriteria({
        ...filterModel,
      } as FilterCriteria)
    );
  };

  return ReactDOM.createPortal(
    <>
      <ModalWrapperShadowStyled onClick={() => onClose()} />
      <FilterModalStyled>
        <FilterPriceInputWrapperStyled>
          <FilterPriceInputStyled
            placeholder="Min Price"
            type="number"
            value={filterModel.minPrice ?? ""}
            onChange={(e) =>
              setFilterModel({
                ...filterModel,
                minPrice: parseFloat(e.target.value),
              })
            }
          />
          <FilterPriceInputStyled
            placeholder="Max Price"
            type="number"
            value={filterModel.maxPrice ?? ""}
            onChange={(e) =>
              setFilterModel({
                ...filterModel,
                maxPrice: parseFloat(e.target.value),
              })
            }
          />
        </FilterPriceInputWrapperStyled>
        {renderDropDownInput(
          "MainCategory",
          "mainCategory",
          parseMainCategoryToDropdown()
        )}
        {filterModel.mainCategory &&
          renderDropDownInput(
            "SubCategory",
            "subCategory",
            parseSubCategoryToDropdown()
          )}
        {filterModel.mainCategory && renderBrandDropDownInput()}
        {renderDropDownInput("City", "city", parseCitiesToDropDown())}

        {sortCriteria("Sort By Price", "sortByPriceAscending", "price")}
        {sortCriteria("Sort By Time", "sortByCreatedByAscending", "time")}

        <FilterButtonWrapper>
          <FilterButton isOutline={true} onClick={handleRemoveFilters}>
            Remove Filters
          </FilterButton>
          <FilterButton isOutline={false} onClick={handleApplyFilters}>
            Apply Filters
          </FilterButton>
        </FilterButtonWrapper>
      </FilterModalStyled>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );

  type DropDownItemData = {
    value: string;
    title: string;
  };
};

export default FilterProductsModal;
