import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize((collectionUrlParams) => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParams] : null)
));

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)