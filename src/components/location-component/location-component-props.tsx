import { Location } from "../../models/Location";

export interface LocationComponentProps{
    location: Location;
    onEditLocation(location: Location): void;
    onRemoveLocation(location: Location): void;
}
