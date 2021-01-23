import {Location} from '../../models/Location'

export interface LocationModalProps {
    location: Location | undefined;
    closeLocationModal(): void;
    onLocationEdited(editedLocation: Location): void;
}
