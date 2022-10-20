import { SIDE_BAR_TOGGLE } from '../constants/SideBar.contatns';
import { InitialSideBarStateType } from '../types/context.types';

export type SideBarActionType = {
    type: 'SIDE_BAR_TOGGLE';
    payload: boolean;
};

const SideBarToggleReducer = (state: InitialSideBarStateType, action: SideBarActionType) => {
    switch (action.type) {
        case SIDE_BAR_TOGGLE:
            localStorage.setItem('isSideBarOpen', JSON.stringify(action.payload));
            return { ...state, isOpen: action.payload };
        default:
            return state;
    }
};

export default SideBarToggleReducer;
