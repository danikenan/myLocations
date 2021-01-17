import { Category } from "../../models/Category";

export interface CategosyListProps {
    categoryList: Category[];
    openPopUpCategory(): void;
    onEditCategory(category: Category): void;
    onRemoveCategory(category: Category): void;
}
