import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Loader } from "@googlemaps/js-api-loader";
import { useStoreActions } from "../store";

const FindLocation = () => {
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>();
  const [location, setLocation] = useState("");
  const setProgress = useStoreActions((actions) => actions.setProgress);
  useEffect(() => {
    setProgress(95);
  }, []);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_LOCATION_API as string,
      libraries: ["places"],
      version: "weekly",
    });
    loader.load().then(() => {
      // const map = new google.maps.Map(inputRef.current as HTMLElement, {
      //   center: { lat: -33.8688, lng: 151.2195 },
      //   zoom: 13,
      // });
      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current as HTMLInputElement
      );
      autocomplete.setFields(["address_components", "formatted_address"]);

      autocomplete.addListener("place_changed", () => {
        setLocation(autocomplete.getPlace().formatted_address ?? "");
      });
    });
  }, []);
  return (
    <div className="mt-6">
      <div className="mt-2 mb-5">
        <TextField
          fullWidth
          label="Enter location"
          variant="outlined"
          autoFocus
          name="location"
          inputRef={inputRef}
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "10px" }}
      >
        Next
      </Button>
      <Button variant="contained" onClick={() => history.push("/insurance")}>
        Back
      </Button>
    </div>
  );
};

export default FindLocation;
