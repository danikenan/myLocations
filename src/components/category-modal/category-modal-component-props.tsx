import { Category } from "../../models/Category";

export interface CategoryModalProps {
    category: Category | undefined;
    closeCategoryModal(): void;
    onCategoryEdited(editedCategory: Category): void;
}
