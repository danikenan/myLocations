import { CategoryType } from '../constants/CategoryTypeEnum';
import { Location } from '../models/Location';

export class MockedLocation {

    public getMockedLocation(): Location[] {
        const locationList: Location[] = [
            new Location(1, 'Home', 'Romania, Brasov, str. Nicolaie Labis, 1', '45.6784989,25.6108312', CategoryType.A),
            new Location(2, 'Home', 'Romania, Targovist, str. Independentei, 1', '44.9211415,25.4658393', CategoryType.B),
            new Location(3, 'Home', 'Romania, Timisoara, str. Bulevardul Revoluției, 1', '45.7556369,21.2341677', CategoryType.C),
            new Location(4, 'Home', 'Romania, Pitesti, str. Bulevardul Republicii, 1', '44.8518435,24.8775047', CategoryType.D),
        ];
        return locationList
    }

}
