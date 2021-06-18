import { Button, IconButton } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import {Fragment, useState} from "react";
import { Workbox } from "workbox-window";

export const HandleAppState = ({wb}: { wb: Workbox; }) =>
{
    const strings = 
    {
        UPDATE: "New Update Available 🎉",
        ONLINE: "Back on line.",
        OFFLINE: "Internet connection lost."
    };
     
    const [workerWaiting, setWorkerWaiting] = useState(false);
    const [toggleOnline, setToggleOnline] = useState({online: true, change: false});

    wb.addEventListener("waiting", () => setWorkerWaiting(true));

    window.addEventListener("online", () => setToggleOnline({online: true, change: true}));
    window.addEventListener("offline", () => setToggleOnline({online: false, change: true}));

    function Alert(props: AlertProps) 
    {
        return (
            <MuiAlert
                elevation={6} variant="filled" {...props}
                onClose={() => setToggleOnline({online: toggleOnline.online, change: false})} 
            />
        );
    }

    function updateWorker() 
    {
        setWorkerWaiting(false);
        wb.messageSkipWaiting();
    }
    
    return(
        <>
            <Snackbar
                open={workerWaiting}
                autoHideDuration={6000}
                message={strings.UPDATE}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                action={
                    <Fragment>
                        <Button color="secondary" size="small" 
                            onClick={updateWorker}> 
                            UPDATE 
                        </Button>
                        <IconButton size="small" aria-label="close" onClick={() => setWorkerWaiting(false)}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Fragment>
                }
            />
            <Snackbar open={toggleOnline.change} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert severity={toggleOnline.online ? "success": "error"} >
                    {toggleOnline.online ? strings.ONLINE : strings.OFFLINE}
                </Alert>
            </Snackbar>
        </>
    );
};
