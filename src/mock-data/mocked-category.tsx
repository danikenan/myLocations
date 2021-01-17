import { CategoryType } from '../constants/CategoryTypeEnum';
import { Category } from '../models/Category';

export class MockedCategory {

    public getMockedCategory(): Category[] {
        const categoryList: Category[] = [
            new Category(CategoryType.A),
            new Category(CategoryType.B),
            new Category(CategoryType.C),
            new Category(CategoryType.D),
        ];
        return categoryList
    }

}
