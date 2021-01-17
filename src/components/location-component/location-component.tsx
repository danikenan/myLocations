import { LocationComponentProps } from "./location-component-props"
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function LocationComponent(props: LocationComponentProps): JSX.Element {

    return (
        <TableRow key={props.location.name}>
            <TableCell align="center" component="th" scope="row">
                {props.location.name}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {props.location.address}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {props.location.coordinates}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {props.location.category}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                <EditIcon onClick={() => props.onEditLocation(props.location)}/>
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                <DeleteIcon onClick={() => props.onRemoveLocation(props.location)}/>
            </TableCell>
        </TableRow>
    )
}

export default LocationComponent
