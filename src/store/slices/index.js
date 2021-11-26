import {actions as userActions} from "./user";
import {actions as collectionsActions} from "./collections";
export const actions = {
    ...collectionsActions,
    ...userActions,
};