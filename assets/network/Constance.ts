export enum URL {
    MENU_ITEMS = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json',
    IMAGE_BASE_URL = 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images',
};

export const getMenuImageUrl = (image: string): string => {
    return `${URL.IMAGE_BASE_URL}/${image}?raw=true`;
};