import { TextField, Paper, Box, Button, Typography } from "@material-ui/core";
import { create as createXMLDoc } from "xmlbuilder2";
import fileDownload from "js-file-download";
import React, { useState } from "react";

export default function XMLForm() {
  const health = [
    { value: "High Blood Pressure", isChecked: false },
    { value: "Heart Disease", isChecked: false },
    { value: "Cholesterol", isChecked: false },
  ];
  const [healthCheckbox, setHealthCheckbox] = useState(health);
  const checkedItems = healthCheckbox.filter(({ isChecked }) => isChecked);
  var viewChecked = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const { firstName, lastName, address, companyName } = e.target.elements;
    checkedItems.forEach((e) => {
      viewChecked.push(e.value);
    });
    const xmlDoc = createXMLDoc({ version: "1.0" })
      .ele("user")
      .ele("firstName")
      .txt(firstName.value)
      .up()
      .ele("lastName")
      .txt(lastName.value)
      .up()
      .ele("address")
      .txt(address.value)
      .up()
      .ele("companyName")
      .txt(companyName.value)
      .up()
      .ele("healthInfo")
      .txt(viewChecked.toString())
      .up();
    const xmlFile = xmlDoc.end({ prettyPrint: true });
    fileDownload(xmlFile, "xml-form.xml");
  };

  return (
    <Paper elevation={5} style={{ marginTop: 60, padding: 30 }}>
      <img src="/DataPassportsLogo.svg" style={{ marginLeft: 15 }} />
      <Box display="flex" flexDirection="column" style={{ margin: 20 }}>
        <form id="xml-form" onSubmit={handleSubmit}>
          <div>
            <TextField
              id="firstName"
              inputProps={{ "data-testid": "required-firstName" }}
              required
              label="First Name"
              style={{ marginBottom: 15 }}
            />
          </div>
          <div>
            <TextField
              id="lastName"
              inputProps={{ "data-testid": "required-lastName" }}
              required
              label="Last Name"
              style={{ marginBottom: 15 }}
            />
          </div>{" "}
          <div>
            <TextField
              id="address"
              inputProps={{ "data-testid": "required-address" }}
              required
              label="Address"
              style={{ marginBottom: 15 }}
            />
          </div>{" "}
          <div>
            <TextField
              id="companyName"
              inputProps={{ "data-testid": "required-companyName" }}
              required
              label="Company Name"
              style={{ marginBottom: 15 }}
            />
          </div>
          <Typography variant="h6">
            Please select all health issues that apply:
          </Typography>
          <ul className="list-group" style={{ marginBottom: 15 }}>
            {healthCheckbox.map((checkbox, index) => (
              <li className="list-group-item rounded-0" key={checkbox.value}>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="healthInfo"
                    onChange={(e) => {
                      const newCheckboxes = [...healthCheckbox];
                      newCheckboxes[index].isChecked = e.target.checked;
                      setHealthCheckbox(newCheckboxes);
                    }}
                    checked={checkbox.isChecked}
                  />
                  <label
                    className="cursor-pointer font-italic d-block custom-control-label"
                    htmlFor={checkbox.value}
                  >
                    {checkbox.value}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <Button
            type="submit"
            form="xml-form"
            color="primary"
            variant="contained"
            style={{ marginBottom: 15 }}
          >
            Generate XML
          </Button>
        </form>{" "}
      </Box>
    </Paper>
  );
}
