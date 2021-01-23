import { Category } from "../../models/Category";

export interface CategosyListProps {
    categoryList: Category[];
    onEditCategory(category: Category): void;
    onRemoveCategory(category: Category): void;
}
