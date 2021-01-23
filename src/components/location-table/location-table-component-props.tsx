import { Location } from "../../models/Location";

export interface LocationListProps {
    locationList: Location[];
    onEditLocation(location: Location): void;
    onRemoveLocation(location: Location): void;
}
