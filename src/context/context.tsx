import React, { useReducer } from 'react'
import { MockedCategory } from '../mock-data/mocked-category';
import { MockedLocation } from '../mock-data/mocked-location';
import Reducer from '../reducer/reducer';
import { ContextModel } from "./context-model";

const contextInitializer = new ContextModel(
    new MockedCategory().getMockedCategory(),
    new MockedLocation().getMockedLocation(),
    false
)

interface ContextProps {
    state: ContextModel,
    dispatch: React.Dispatch<any>
}

interface StoreProps {
    children: React.ReactNode
}

const Store  = (props: StoreProps) => {
    const [state, dispatch] = useReducer(Reducer, contextInitializer)

    return (
        <Context.Provider value={{state, dispatch}} >
            {props.children}
        </Context.Provider>
    )
}

export const Context = React.createContext<ContextProps>({state: contextInitializer, dispatch: ()=>{}});
export default Store;
