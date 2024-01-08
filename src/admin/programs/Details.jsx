import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../context/Store";

function ProgramDetails() {
  const { dispatch } = useMyContext();
  const params = useParams();

  useEffect(() => {
    if (params.program) {
      dispatch({ type: "UPDATE_PROGRAM", payload: params.program });
    }
  }, [dispatch, params.program]);
  return <div className="md:ml-36 md:mt-0 mt-14">ProgramDetails</div>;
}

export default ProgramDetails;
