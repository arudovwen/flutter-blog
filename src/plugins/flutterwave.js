import { useFlutterwave } from "flutterwave-vue3";
import { nanoid } from "nanoid"; //if using nanoid
import store from "../store";

export default function flutterPayment(data) {
  useFlutterwave({
    amount: data.amount, //amount
    callback() {
      store.commit("clearCart");

      //  TODO: handle callbacks
    },
    country: "NG",
    currency: "NGN",
    customer: {
      email: data.email,
      name: data.name,
      phone_number: data.phoneNumber,
    },
    customizations: {
      description: "Payment to Matta",
      logo: "https://matta-trade.herokuapp.com/img/logo.80ab8c96.svg",
      title: "Matta",
    },
    meta: {
      user_id: data.userId,
      token: nanoid(11),
    },
    onclose: () => {},
    payment_options: "card",
    public_key: process.env.VUE_APP_FLUTTER_KEY,
    redirect_url: "http://matta-trade.herokuapp.com/transaction/successful",
    tx_ref: nanoid(15),
  });
}
