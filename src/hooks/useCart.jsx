import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthInfo from "./useAuthInfo";


const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuthInfo();

  const {refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [carts, refetch];

  
};

export default useCart;
