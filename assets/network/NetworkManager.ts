import { mapToModel } from '../database/sql/Models/MenuItem';
import { URL } from './Constance';
import type { MenuItem } from '../database/sql/Models/MenuItem';
import type { MenuItemDTO } from './DTOs/MenuItemDTO';

const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`);
    }
    return (await response.json()) as T;
};

export const fetchMenuData = async (): Promise<MenuItem[]> => {
    const data = await fetchData<{ menu: MenuItemDTO[] }>(URL.MENU_ITEMS);
    return data.menu.map((item, index) => mapToModel(item, index)) as MenuItem[];
};