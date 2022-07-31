import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../redux/apiRequest";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import { Typography } from "@mui/material";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";

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

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const userProfile = useSelector((state) => state.user?.currentUser);
  const isFetching = useSelector((state) => state.auth.isFetching);
  const cartItems = useSelector((state) => state.cartItems.value);

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  const productInfoPayment = cartItems.map((item) => {
    return {
      product: {
        price: item.price,
        name: item.name,
        quantity: item.quantity,
        subTotalPrice: totalPrice,
      },
      subTotalPrice: totalPrice,
    };
  });

  const [name, setName] = useState(userProfile?.name);
  const [mail, setEmail] = useState(userProfile?.email);
  const [address, setAddress] = useState(userProfile?.address);
  const [phone, setPhone] = useState(userProfile?.phone);

  useEffect(() => {
    if (!user) history.push("/login");
    if (!user?.token) return;
    if (user?.token) getUser(user?.token, dispatch);
  }, [isFetching]);

  return (
    <Grid container flex spacing={2}>
      <Grid item xs={5}>
        <h3 className="payment-title">Thong tin nhan hang</h3>
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
      <Grid item xs={2}>
        <h3 className="payment-title">Phuong thuc thanh toan</h3>
        <Item>
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gilad}
                      onChange={handleChange}
                      name="gilad"
                    />
                  }
                  label="COD"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jason}
                      onChange={handleChange}
                      name="jason"
                    />
                  }
                  label="VNPay"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={handleChange}
                      name="antoine"
                    />
                  }
                  label="Antoine Llorca"
                />
              </FormGroup>
              {/* <PayPalButtons style={{ layout: "horizontal" }} />; */}

              <div className="paypal-container-button">
                <PaypalCheckoutButton product={productInfoPayment} />
              </div>
            </FormControl>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <h3 className="payment-title">Thong tin san pham</h3>
        <Item>
          {cartItems.map((item, idx) => (
            <div key={idx} className="payment-product-container">
              <div className="payment-product-name">{`${item.name} - ${item.size}`}</div>
              <div className="payment-product-image">
                <img src={item.image} alt="deo co" />
              </div>
              <div className="payment-product-qty"> {item.quantity}</div>
              <div className="payment-product-price">{item.price}</div>
            </div>
          ))}
          <div className="payment-product-total">
            <Typography>Tong Cong</Typography>
            <Typography>{totalPrice}</Typography>
          </div>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Payment;
