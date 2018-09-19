import * as countryActions from './country';
import * as osActions from './os';

export const generalActions = {
    ...countryActions,
    ...osActions
}