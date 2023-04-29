import { nanoid } from "nanoid"; //if using nanoid

export function makePayment(amount) {
  window.FlutterwaveCheckout({
    public_key: process.env.VUE_APP_FLUTTER_KEY,
    tx_ref: nanoid(15),
    amount: amount,
    currency: "NGN",
    payment_options: "card",
    redirect_url: "https://flutter-blog-one.vercel.app",

    customer: {
      email: "succy@gmail.com",
      phone_number: "08102909304",
      name: "Success Ahon",
    },
    customizations: {
      title: "Flutter Blog Membership Fee",
      description: "Payment for Flutter Blog Membership Fee",
      logo: "https://flutter-blog-one.vercel.app/img/logo.e1cdd1ef.svg",
    },
  });
}
