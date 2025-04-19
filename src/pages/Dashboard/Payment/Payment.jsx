import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// Make sure to call `loadStripe` outside of a component’s render to avoid recreating the `Stripe` object on every render.
const stripePromise = loadStripe();

const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="just one step away from deliciousness!"></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          
        </Elements>
      </div>
      
    </div>
  );
};

export default Payment;