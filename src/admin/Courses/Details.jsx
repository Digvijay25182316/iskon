import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../context/Store";

function CourseDetails() {
  const params = useParams();
  const { dispatch } = useMyContext();
  useEffect(() => {
    if (params.code) {
      dispatch({ type: "UPDATE_CODE", payload: params.code });
    }
  }, [params.code, dispatch]);
  return <div className="md:ml-36 md:mt-0 mt-14">CourseDetails</div>;
}

export default CourseDetails;
