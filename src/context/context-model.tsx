import { Category } from "../models/Category";
import { Location } from "../models/Location";


export class ContextModel { 
    constructor(
        public categoryList: Category[],
        public locationList: Location[],
        public isCategoryModalVisible: boolean,
        public isLocationModalVisible: boolean,
        public selectedCategory?: Category,
        public selectedLocation?: Location,
    ) {}
}
