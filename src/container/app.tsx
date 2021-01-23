import React, { useContext } from 'react'
import { Action } from '../action/action';
import CategoryModal from '../components/category-modal/category-modal-component';
import CategoryTableComponent from '../components/category-table/category-table-component';
import LocationModal from '../components/location-modal/location-modal-component';
import LocationTableComponent from '../components/location-table/location-table-component';
import { Context } from '../context/context';
import { ActionModel } from '../models/Action';
import { Category } from '../models/Category';
import { Location } from '../models/Location';

function AppContainer(): JSX.Element {
    const { state, dispatch } = useContext(Context);

    function onEditCategory(category: Category): void {
        dispatch(new ActionModel(Action.EDIT_CATEGORY, category));
    }

    function onCategoryEdited(editedCategory: Category): void {
        dispatch(new ActionModel(Action.EDITED_CATEGORY, editedCategory));
    }

    function onRemoveCategory(category: Category): void {
         dispatch(new ActionModel(Action.REMOVE_CATEGORY, category));
    }

    function onEditLocation(location: Location): void {
        dispatch(new ActionModel(Action.EDIT_LOCATION, location));
    }

    function onLocationEdited(editedLocation: Location): void {
        dispatch(new ActionModel(Action.EDITED_LOCATION, editedLocation));
    }

    function onRemoveLocation(location: Location): void {
        dispatch(new ActionModel(Action.REMOVE_LOCATION, location));
    }

    function closeCategoryModal(): void {
        dispatch(new ActionModel(Action.CLOSE_CATEGORY_MODAL));
    }

    function closeLocationModal(): void {
        dispatch(new ActionModel(Action.CLOSE_LOCATION_MODAL));
    }

    return (
        <div style={{width: "50rem", padding: "3rem 3rem"}} >
                <CategoryTableComponent categoryList={state.categoryList} onEditCategory={onEditCategory} onRemoveCategory={onRemoveCategory}/>
            <div style={{ padding: '3rem 0rem'}}></div>
                <LocationTableComponent locationList={state.locationList} onEditLocation={onEditLocation} onRemoveLocation={onRemoveLocation}/>

            {
                state.isCategoryModalVisible && <CategoryModal category={state.selectedCategory} closeCategoryModal={closeCategoryModal} onCategoryEdited={onCategoryEdited}/>
            }
            {
                state.isLocationModalVisible && <LocationModal location={state.selectedLocation} closeLocationModal={closeLocationModal} onLocationEdited={onLocationEdited}/>
            }
        </div>
    )
}

export default AppContainer
