import { Location } from "../../models/Location";

export interface LocationListProps {
    locationList: Location[];
    openPopUpLocation(): void;
    onEditLocation(location: Location): void;
    onRemoveLocation(location: Location): void;
}
