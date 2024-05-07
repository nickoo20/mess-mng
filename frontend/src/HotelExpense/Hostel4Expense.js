import React from "react";
import { useAuth } from "../context/userContext";
import ExpenseUtils from "./ExpenseUtils";

const TilakExpense = () => {
  const HostelName = "Hostel4";
  const [auth, setAuth] = useAuth();
  if (!auth.user) {
    return (
      <>
        <h1>Please Login first!!</h1>
      </>
    );
  }
  if (auth?.user?.role !== 3) {
    return <h1>You do not have permission to this page...</h1>;
  }
  return (
    <>
      <ExpenseUtils HostelName={HostelName} />
    </>
  );
};

export default TilakExpense;
