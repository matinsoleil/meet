import {ActionTypes} from "@flux/actionTypes";
import {Images} from '../../states/images';

const portalCustomizingConfig = {
    headerHeight: 80,
    images: Images,
};

export const customizingReducer = (state = {...portalCustomizingConfig}, action) => {
    switch (action.type) {

        case ActionTypes.GENERAL_SET_HEADER_HEIGHT:
            return {...state, headerHeight: action.payload};

        default:
            return state;

    }
};