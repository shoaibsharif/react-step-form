import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useStoreActions } from "easy-peasy";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Landlord = () => {
  const [addManger, setManger] = useState("no");
  const history = useHistory();
  // @ts-ignore
  const setProgress = useStoreActions((x) => x.setProgress);
  useEffect(() => {
    setProgress(33);
  }, []);
  return (
    <div className="mt-6">
      <h3>Do you want to add landlord/property manager to your policy?</h3>

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
        onClick={() => history.push("/insurance")}
      >
        Next
      </Button>
      <Button variant="contained"> Back </Button>
    </div>
  );
};

export default Landlord;
