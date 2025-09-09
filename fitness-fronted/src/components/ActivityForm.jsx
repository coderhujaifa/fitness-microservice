import React from "react";
import Box from '@mui/material/Box';
import { FormControl } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@mui/material";

const ActivityForm = () => {
    return (
        <Box component="form" sx={{ mb : 2 }}>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={1}
    label="Age"
    onChange={() => {}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
        </Box>
    )
}

export default ActivityForm