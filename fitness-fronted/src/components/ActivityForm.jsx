import React, { useState } from "react";   
import Box from '@mui/material/Box';
import { FormControl, TextField, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { addActivities } from "../service/api";

const ActivityForm = ({ onActivityAdded }) => {
  const [activity, setActivity] = useState({   
    type: "RUNNING",duration: '',caloriesBurned: '',
    addionalMetrics: {}
  });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await addActivities(activity);
    onActivityAdded(activity);

    setActivity({
      type: "RUNNING",
      duration: '',
      caloriesBurned: '',
      addionalMetrics: {}
    });
  } catch (error) {
    console.error(error);
  }
};

  return (
    <Box component="form" sx={{ mb: 2 }} onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ mb: 2 }}>   
        <InputLabel>Activity Type</InputLabel>
        <Select
          value={activity.type}
          onChange={(e) => setActivity({ ...activity, type: e.target.value })}
        >
          <MenuItem value="RUNNING">Running</MenuItem>
          <MenuItem value="WALKING">Walking</MenuItem>
          <MenuItem value="CYCLING">Cycling</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Duration (Minutes)"
        type="number"
        sx={{ mb: 2 }}
        value={activity.duration}
        onChange={(e) => setActivity({ ...activity, duration: e.target.value })}
      />

      <TextField
        fullWidth
        label="Calories Burned"
        type="number"
        sx={{ mb: 2 }}
        value={activity.caloriesBurned}
        onChange={(e) => setActivity({ ...activity, caloriesBurned: e.target.value })}
      />

      <Button type="submit" variant="contained">
        Add Activity
      </Button> 
    </Box>
  );
};

export default ActivityForm;
