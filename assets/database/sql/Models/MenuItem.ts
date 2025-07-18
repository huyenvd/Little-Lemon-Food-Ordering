import type { MenuItemDTO } from '../../../network/DTOs/MenuItemDTO';
import { getMenuImageUrl } from '../../../network/Constance';

export type MenuItem = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
};

export const mapToModel = (dto: MenuItemDTO, index: number): MenuItem => ({
    id: index + 1,
    name: dto.name,
    price: parseFloat(dto.price),
    description: dto.description,
    category: dto.category,
    imageUrl: getMenuImageUrl(dto.image),
});