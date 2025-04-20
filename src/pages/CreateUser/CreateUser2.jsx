import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, IconButton, MenuItem, Snackbar, Stack } from '@mui/material';
import { useForm } from "react-hook-form"
import { GridCloseIcon } from '@mui/x-data-grid';


function CreateUser2() {

  const regexValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/gi;

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data, "Donne");
    handleClick();
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <GridCloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const currencies = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'User',
      label: 'User',
    },
    {
      label: 'Manager',
      value: 'Manager',
    },
  ];



  return (
    <section style={{position: "relative"}}>
      CreateUser2

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={100000}
        onClose={handleClose}
        message="Account Created Successfuly"
        action={action}
      />

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
    >
      <div>
        <div style={{display: "flex"}}>
          <TextField style={{flex: 1}}
            error={errors.firstName ? true : false}
            id="outlined-error"
            label="First Name"
            helperText={errors.firstName ? "Enter A Correct First Name" : null}
            {...register("firstName", { required: true, minLength: 3 })}
            />
          <TextField style={{flex: 1}}
            error={errors.lastName ? true : false}
            id="outlined-error-helper-text"
            label="Last Name"
            helperText={errors.lastName ? "Enter A Correct Last Name" : null}
            {...register("lastName", {required: true, minLength: 3 })}
            />
          </div>
        <Stack>
          <TextField style={{width: "100%"}}
            error={errors.age ? true : false}
            id="outlined-error"
            label="Age"
            helperText={errors.age ? "Enter A Valid Age" : null}
            type="number" {...register("age", { min: 1, max: 99 })}
            />
          <TextField style={{width: "100%"}}
            error={errors.email ? true : false}
            id="outlined-error-helper-text"
            label="Email"
            helperText={errors.email ? "Enter A Valid Email" : null}
            type="email" {...register("email", { pattern: regexValidEmail })}
            />
          </Stack>
      </div>
      <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="User"
          helperText="Please select your choice"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className="btn_submit" style={{display: "flex", justifyContent: "center"}}>
          <Button type='submit' variant="contained" color="success">
            Submit
          </Button>
        </div>
    </Box>
    </section>
  )
}

export default CreateUser2;