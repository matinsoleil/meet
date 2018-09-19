import { generalActions } from './general/merged';
import { portalActions } from './portal/merged';

export const actions = {
    ...generalActions,
    ...portalActions
}