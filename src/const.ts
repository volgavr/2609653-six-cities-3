export const MAX_RATING_VALUE = 5;
export const IMG_FOLDER = 'img';

export enum AppRoute {
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
    Main = '/'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
