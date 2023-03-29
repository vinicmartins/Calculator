import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const handleClick = (value: string) => {
    setResult(result.concat(value));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <Grid container spacing={2} style={{ height: "100vh", border: "1px solid #ccc", background: "#f2f2f2", fontFamily: "Helvetica" }}>
      <Grid item xs={12}>
        <TextField variant="outlined" fullWidth value={result} style={{ fontFamily: "monospace", fontSize: "2rem", marginBottom: "1rem" }} />
      </Grid>
      {[["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], ["C", "0", "=", "/"]].map((row, rowIndex) => (
        <Grid container item xs={12} spacing={2} key={rowIndex}>
          {row.map((button, buttonIndex) => (
            <Grid item xs={3} key={buttonIndex}>
              <Button color={button === "=" ? "primary" : "default"} fullWidth onClick={() => {
                if (button === "C") {
                  handleClear();
                } else if (button === "=") {
                  handleCalculate();
                } else {
                  handleClick(button);
                }
              }} style={{ fontFamily: "monospace", fontSize: "2rem", background: "#fff", boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}>
                {button}
              </Button>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Calculator;