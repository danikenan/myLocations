import { CategoryType } from '../constants/CategoryTypeEnum';
import { Location } from '../models/Location';

export class MockedLocation {

    public getMockedLocation(): Location[] {
        const locationList: Location[] = [
            new Location('Home', 'Romania, Brasov, str. Nicolaie Labis, 1', '45.6784989,25.6108312', CategoryType.A),
            new Location('Home', 'Romania, Targovist, str. Independentei, 1', '44.9211415,25.4658393', CategoryType.B),
            new Location('Home', 'Romania, Timisoara, str. Bulevardul Revoluției, 1', '45.7556369,21.2341677', CategoryType.C),
            new Location('Home', 'Romania, Pitesti, str. Bulevardul Republicii, 1', '44.8518435,24.8775047', CategoryType.D),
        ];
        return locationList
    }

}
