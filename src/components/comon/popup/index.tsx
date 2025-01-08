import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { User } from "firebase/auth";
import { useState } from "react";
type isOpen = {
  isOpen: boolean;
  onClose: () => void;
  loggedInUser: User | null | undefined;
};
const FormDialog: React.FC<isOpen> = ({ isOpen, onClose, loggedInUser }) => {
  const [RecipientEmail, setRecipientEmail] = useState("");
  const createConversation = async () => {
    try {
      await addDoc(collection(db, "conversations"), {
        users: [loggedInUser?.email, RecipientEmail],
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={onClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
          },
        }}
      >
        <DialogTitle>New ConverSation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a Google email address for the user you wish to chat
            with
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setRecipientEmail(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" onClick={createConversation}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default FormDialog;
