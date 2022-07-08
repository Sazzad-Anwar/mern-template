const { OPEN_SIDE_BAR, CLOSE_SIDE_BAR } = require("../constants/SideBar");

const SideBarReducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_SIDE_BAR:
            localStorage.setItem("sideBarIsOpen", JSON.stringify(true));
            return { ...state, isOpen: true };
        case CLOSE_SIDE_BAR:
            localStorage.setItem("sideBarIsOpen", JSON.stringify(false));
            return { ...state, isOpen: false };
        default:
            return state;
    }
}

export default SideBarReducer;