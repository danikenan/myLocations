import React, { useContext } from 'react'
import { Action } from '../action/action';
import CategoryModal from '../components/category-modal/category-modal-component';
import CategoryTableComponent from '../components/category-table/category-table-component';
import LocationTableComponent from '../components/location-table/location-table-component';
import { Context } from '../context/context';
import { ActionModel } from '../models/Action';
import { Category } from '../models/Category';

function AppContainer(): JSX.Element {
    const { state, dispatch } = useContext(Context);

    function openPopUpLocation(): void {
        debugger
        // dispatch()
    }

    function openPopUpCategory(): void {
        debugger
        // dispatch()
    }

    function onEditCategory(category: Category): void {
        debugger
        dispatch(new ActionModel(Action.EDIT_CATEGORY, category));
    }

    function onRemoveCategory(category: Category): void {
        debugger
    }

    function onEditLocationy(category: Category): void {
        debugger
    }

    function onRemoveLocation(category: Category): void {
        debugger
    }

    function closeCategoryModal(): void {
        dispatch(new ActionModel(Action.CLOSE_CATEGORY_MODAL));
    }

    return (
        <>
            <CategoryTableComponent categoryList={state.categoryList} openPopUpCategory={openPopUpCategory} onEditCategory={onEditCategory} onRemoveCategory={onRemoveCategory}/>
            <div style={{ padding: '3rem 0rem'}}></div>
            <LocationTableComponent locationList={state.locationList} openPopUpLocation={openPopUpLocation} onEditLocation={onEditLocationy} onRemoveLocation={onRemoveLocation}/>


            {
                state.isCategoryModalVisible && <CategoryModal category={state.selectedCategory} closeCategoryModal={closeCategoryModal}/>
            }
        </>
    )
}

export default AppContainer
