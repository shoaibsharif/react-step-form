import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStoreActions } from "../store";

const InsurancePolicy = () => {
  const [addManger, setManger] = useState("no");
  const { register } = useForm();
  const history = useHistory();
  const setProgress = useStoreActions((actions) => actions.setProgress);
  useEffect(() => {
    setProgress(66);
  }, []);

  return (
    <div className="mt-6">
      <h3>Do you currently have renter insurance insurance policy?</h3>

      <RadioGroup
        onChange={(e) => {
          setManger(e.target.value);
        }}
        value={addManger}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "10px" }}
        onClick={() => history.push("/location")}
      >
        Next
      </Button>
      <Button variant="contained" onClick={() => history.push("/landlord")}>
        {" "}
        Back{" "}
      </Button>
    </div>
  );
};

export default InsurancePolicy;
