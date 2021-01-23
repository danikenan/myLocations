import React from "react";
import Modal from '@material-ui/core/Modal';
import { CategoryModalProps } from "./category-modal-component-props"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Category } from "../../models/Category";

  function getModalStyle() {
    return {
      top: `40%`,
      left: `40%`,
      transform: `translate(-40%, -40%)`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }),
  );

  function CategoryModal(props: CategoryModalProps) {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    let changedCategoryName: string | undefined = props.category?.name;
    
    function onChangeCategoryText(value: string): void {
      changedCategoryName = value;
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <TextField required id="standard-required" label="Name" defaultValue={props.category?.name} onChange={(event) => onChangeCategoryText(event.target.value)}/>
            <Button variant="contained" color="primary" onClick={() => {if(props.category && changedCategoryName) {props.onCategoryEdited(new Category(props.category.id, changedCategoryName))}}}>
              Submit
            </Button>
        </div>
      );

    return(
        <div ref={rootRef}>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                onClose={props.closeCategoryModal}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                container={() => rootRef.current}
            >
               {body}
            </Modal>
        </div>
    )
}

export default CategoryModal
