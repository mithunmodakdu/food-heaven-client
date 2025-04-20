import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuthInfo from "../../../hooks/useAuthInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments);

  return (
    <div>
      <SectionTitle
        heading="Payment History"
        subHeading="Know about your payments"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Transaction Date</th>
                <th>Transaction Time</th>
                <th>Price</th>
                <th>Transaction Id</th>
                
              </tr>
            </thead>
            <tbody>
              {
                payments.map((payment, index) => <tr key={payment._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{payment.date.toString().split('T')[0]}</td>
                  <td>{payment.date.toString().split('T')[1].split('.')[0]}</td>
                  <td>${payment.price}</td>
                  <td>{payment.transactionId}</td>
                </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
