import { Category } from "../../models/Category";

export interface CategoryComponentProps {
    category: Category;
    onEditCategory(category: Category): void;
    onRemoveCategory(category: Category): void;
}
