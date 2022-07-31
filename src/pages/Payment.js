import { makeStyles } from "@material-ui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../redux/apiRequest";
const Payment = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const useStyles = makeStyles((theme) => ({
    marginBottonf: {
      marginBotton: "20px",
    },
  }));
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const userProfile = useSelector((state) => state.user?.currentUser);

  const [name, setName] = useState(userProfile?.name);
  const [mail, setEmail] = useState(userProfile?.email);
  const [address, setAddress] = useState(userProfile?.address);
  const [phone, setPhone] = useState(userProfile?.phone);

  useEffect(() => {
    if (!user) history.push("/login");
    if (!user?.token) return;
    if (user?.token) getUser(user?.token, dispatch);
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <h1 className="payment-title">Thong tin nhan hang</h1>
          <Item>
            <TextField
              value={name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Dia chi"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="SDT"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Email"
              value={mail}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <h1 className="payment-title">Phuong thuc thanh toan</h1>
          <Item>
            <TextField
              id="outlined-basic"
              label="pt"
              variant="outlined"
              fullWidth
              //   onChange={(e) => handleOnChange(e)}
            />
            <TextField
              id="outlined-basic"
              label="Dia chi"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="SDT"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Payment;
