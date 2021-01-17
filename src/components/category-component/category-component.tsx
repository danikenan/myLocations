import { CategoryComponentProps } from "./category-component-props"
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function CategoryComponent(props: CategoryComponentProps): JSX.Element {

    return (
        <TableRow key={props.category.name}>
            <TableCell align="center" component="th" scope="row">
                {props.category.name}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                <EditIcon onClick={() => props.onEditCategory(props.category)}/>
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                <DeleteIcon onClick={() => props.onRemoveCategory(props.category)}/>
            </TableCell>
        </TableRow>
    )
}

export default CategoryComponent
