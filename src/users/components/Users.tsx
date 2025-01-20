import React from "react";
import { useForm } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";

export function Users() {
  const {
    register,
    formState: { errors },
    control,
  } = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete
        name="state"
        options={[]}
        label="State"
        control={control} // Ajout de la prop control
      />
    </Stack>
  );
}

export default Users;
