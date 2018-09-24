import { ZTE_CLIENTINIT } from "../actionstypes";

export const messageCenterReducer = (state={}, action) => {
    console.log(ZTE_CLIENTINIT,action); 
    return state; 
}