import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
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
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
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
                  autoComplete="password"
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
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>

          <div className="flex justify-center flex-col items-center">
            <div className="py-3 flex items-center">
              <p>New User?</p>
              <Button
                onClick={() => navigate("/")}
                className="ml-5"
                size="small"
              >
                Register Here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
