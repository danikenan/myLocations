import { Action } from "../action/action";
import { ContextModel } from "../context/context-model";
import { ActionModel } from "../models/Action";


const Reducer = (state: ContextModel, action: ActionModel) => {
    switch (action.type) {
        case Action.EDIT_CATEGORY:
            state.selectedCategory = action.payload;
            state.isCategoryModalVisible = true;
            return {...state}

        case Action.CLOSE_CATEGORY_MODAL:
            state.selectedCategory = undefined;
            state.isCategoryModalVisible = false;
            return {...state}

        default:
            return state
    }
}

export default Reducer
