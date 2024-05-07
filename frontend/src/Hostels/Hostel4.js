import React from "react";
import ComplaintsPage from "../utils/ComplaintsPage";
import { useAuth } from "../context/userContext";

const Hostel4 = () => {
  const HostelName = "Hostel4";
  const [auth, setAuth] = useAuth();
  if (!auth.user) {
    return (
      <>
        <h1>Please Login first!!</h1>
      </>
    );
  }
  return (
    <>
      <ComplaintsPage HostelName={HostelName} />
    </>
  );
};

export default Hostel4;
