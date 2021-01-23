import React from "react";
import Modal from '@material-ui/core/Modal';
import { LocationModalProps } from "./location-modal-component-props"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Location } from "../../models/Location";
import { CategoryType } from '../../constants/CategoryTypeEnum'

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

  function LocationModal(props: LocationModalProps) {
    const rootRef = React.useRef<HTMLDivElement>(null);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    let changedLocationName: string | undefined = props.location?.name;
    let changedLocationAddress: string | undefined = props.location?.address;
    let changedLocationCategory: CategoryType | undefined = props.location?.category;
    let changedLocationCoordinates: string | undefined = props.location?.coordinates;
    
    function onChangeLocationNameText(value: string): void {
      changedLocationName = value;
    }

    function onChangeLocationAddressText(value: string): void {
      changedLocationAddress = value;
    }

    function onChangeLocationCategoryText(value: any): void {
      changedLocationCategory = value;
    }

    function onChangeLocationCoordinatesText(value: string): void {
      changedLocationCoordinates = value;
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <TextField required id="standard-required" label="Name" defaultValue={props.location?.name} onChange={(event) => onChangeLocationNameText(event.target.value)}/>
            <TextField required id="standard-required" label="Address" defaultValue={props.location?.address} onChange={(event) => onChangeLocationAddressText(event.target.value)}/>
            <TextField required id="standard-required" label="Category" defaultValue={props.location?.category} onChange={(event) => onChangeLocationCategoryText(event.target.value)}/>
            <TextField required id="standard-required" label="Coordinates" defaultValue={props.location?.coordinates} onChange={(event) => onChangeLocationCoordinatesText(event.target.value)}/>

            <Button variant="contained" color="primary" onClick={() => {
                if(props.location && changedLocationName && changedLocationAddress && changedLocationCategory && changedLocationCoordinates) {
                  props.onLocationEdited(new Location(props.location.id, changedLocationName, changedLocationAddress, changedLocationCoordinates, changedLocationCategory))
                }
              }}>
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
                onClose={props.closeLocationModal}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                container={() => rootRef.current}
            >
               {body}
            </Modal>
        </div>
    )
}

export default LocationModal
