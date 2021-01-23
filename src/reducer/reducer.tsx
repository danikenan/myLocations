import { Action } from "../action/action";
import { ContextModel } from "../context/context-model";
import { ActionModel } from "../models/Action";
import { Category } from "../models/Category";
import { Location } from "../models/Location";


const Reducer = (state: ContextModel, action: ActionModel) => {
    switch (action.type) {
        case Action.EDIT_CATEGORY:
            state.selectedCategory = action.payload;
            state.isCategoryModalVisible = true;
            return {...state}

        case Action.EDITED_CATEGORY:
            state.locationList.forEach((location: Location) => {
                state.categoryList.forEach((category: Category) => {
                    if(category.id === action.payload.id && category.name === location.category) {
                        location.category = action.payload.name;
                    }
                    if (category.id === action.payload.id) {
                        category.name = action.payload.name
                    }
                })
            })
            state.isCategoryModalVisible = false;
            return {...state}

        case Action.EDIT_LOCATION:
            state.selectedLocation = action.payload;
            state.isLocationModalVisible = true;
            return {...state}

        case Action.EDITED_LOCATION:
            state.locationList.forEach((location: Location) => {
                if(location.id === action.payload.id) {
                    location.name = action.payload.name
                    location.address = action.payload.address
                    location.category = action.payload.category
                    location.coordinates = action.payload.coordinates
                }
            })
            state.isLocationModalVisible = false;
            return {...state}

        case Action.CLOSE_CATEGORY_MODAL:
            state.selectedCategory = undefined;
            state.isCategoryModalVisible = false;
            return {...state}
        
        case Action.CLOSE_LOCATION_MODAL:
            state.selectedLocation = undefined;
            state.isLocationModalVisible = false;
            return {...state}

        case Action.REMOVE_CATEGORY:
            let indexCategoryToRemove: number | null = null;
            state.categoryList.forEach((category: Category) => {
                if(category.id === action.payload.id) {
                    indexCategoryToRemove = state.categoryList.indexOf(category);
                }
            })

            indexCategoryToRemove && state.categoryList.splice(indexCategoryToRemove, 1);
            return {...state}

        case Action.REMOVE_LOCATION:
            let indexLocationToRemove: number | null = null;
            state.locationList.forEach((location: Location) => {
                if(location.id === action.payload.id) {
                    indexLocationToRemove = state.locationList.indexOf(location);
                }
            })

            indexLocationToRemove && state.locationList.splice(indexLocationToRemove, 1);
            return {...state}

        default:
            return state
    }
}

export default Reducer
