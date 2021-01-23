import { CategoryType } from '../constants/CategoryTypeEnum';
import { Category } from '../models/Category';

export class MockedCategory {

    public getMockedCategory(): Category[] {
        const categoryList: Category[] = [
            new Category(1, CategoryType.A),
            new Category(2, CategoryType.B),
            new Category(3, CategoryType.C),
            new Category(4, CategoryType.D),
        ];
        return categoryList
    }

}
