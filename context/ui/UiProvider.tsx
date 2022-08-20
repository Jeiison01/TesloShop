import { UiContext, uiReducer } from './';
import { PropsWithChildren, useReducer } from 'react';

export interface UiState {
    isMenuOpen: boolean;
}


const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
}

export const  UiProvider = ({children}: PropsWithChildren) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const toggleSideMenu = () => {
        dispatch({type: '[UI] - ToggleMenu'})
    }

  return (
    <UiContext.Provider
        value={{
            ...state,
        
            //Methods
            toggleSideMenu,
        
        }}

    >
        {children}
    </UiContext.Provider>
  )
}