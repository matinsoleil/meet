import * as customizingActions from './customizing';
import * as filterFaq from './filterFaq';

export const portalActions  = {
    ...customizingActions,
    ...filterFaq
};