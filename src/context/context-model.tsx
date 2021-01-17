import { Category } from "../models/Category";
import { Location } from "../models/Location";


export class ContextModel { 
    constructor(
        public categoryList: Category[],
        public locationList: Location[],
        public isCategoryModalVisible: boolean,
        public selectedCategory?: Category,
    ) {}
}
