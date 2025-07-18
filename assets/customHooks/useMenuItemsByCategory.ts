import { useMemo } from 'react';
import { MenuCategories } from '../utils/EnumTypes';
import { MenuItem } from '../database/sql/Models/MenuItem';

export const useMenuItemsByCategory = (items: MenuItem[], category: MenuCategories) => {
    return useMemo(() => items.filter(item => item.category.toLowerCase() === category.toLowerCase()),[items, category]);
};