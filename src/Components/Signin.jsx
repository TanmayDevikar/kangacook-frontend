import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    navigate("/registration-success");
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold mt-10 mb-20 text-green-600 text-2xl">
          Kangacook
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  className="w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>

          <div className="flex justify-center flex-col items-center">
            <div className="py-3 flex items-center">
              <p>Already Have An Account?</p>
              <Button
                onClick={() => navigate("/login")}
                className="ml-5"
                size="small"
              >
                Login Here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
