import React from "react"
import {Location} from '../../models/Location'
import LocationComponent from "../location-component/location-component"
import { LocationListProps } from "./location-table-component-props"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CategoryComponent from "../category-component/category-component";
import Button from '@material-ui/core/Button';

function LocationTableComponent(props: LocationListProps): JSX.Element {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead style={{ backgroundColor: "#ccc8c8"}}>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Coordinates</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">
                            <Button variant="contained">Add</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.locationList.map((location: Location) => {
                        return <LocationComponent location={location} onEditLocation={props.onEditLocation} onRemoveLocation={props.onRemoveLocation}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LocationTableComponent
