import React from "react"
import { Category } from "../../models/Category"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CategosyListProps } from "./category-table-component-props"
import CategoryComponent from "../category-component/category-component";
import Button from '@material-ui/core/Button';

function CategoryTableComponent(props: CategosyListProps): JSX.Element {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead style={{ backgroundColor: "#ccc8c8"}}>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                            <Button variant="contained">Add</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.categoryList.map((category: Category) => {
                        return <CategoryComponent category={category} onEditCategory={props.onEditCategory} onRemoveCategory={props.onRemoveCategory}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CategoryTableComponent
