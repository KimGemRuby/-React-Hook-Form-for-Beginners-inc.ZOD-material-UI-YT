import React from 'react';
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

export function RHFAutocomplete({ control, name, options, label }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      )}
    />
  );
}

export default RHFAutocomplete;
