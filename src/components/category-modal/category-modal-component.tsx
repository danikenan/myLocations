import React from "react";
import Modal from '@material-ui/core/Modal';
import { CategoryModalProps } from "./category-modal-component-props"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
  
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

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <TextField id="time" type="time" />;
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
