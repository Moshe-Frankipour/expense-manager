import { useState, useEffect } from "react";
import "./NewExpense.css";
import ExpenseDialog from "./ExpenseDialog";
import AlertMsg from "../AlertMsg/AlertMsg"

export default function NewExpenses(props) {
  const [open, setOpen] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (isSuccessful = false) => {
    setOpen(false);
    setShowMsg(isSuccessful);
  };

  useEffect(() => {
      setTimeout(function () {
        setShowMsg(false)
      }, 3000);
  }, [showMsg])

  return (
    <div>
      <AlertMsg show={showMsg} />

      <button className="button-style" onClick={handleClickOpen}>
        Add New Expenses
      </button>
      <ExpenseDialog
        onUpdateExpense={props.onUpdateExpense}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
