import useAuthInfo from "../../../hooks/useAuthInfo";

const AdminHome = () => {
  const {user} = useAuthInfo();
  return (
    <div>
      <h1 className="text-3xl">
        <span>Hi, welcome admin </span>
        {
          user?.displayName ? user.displayName : 'Back'
        }
      </h1>
    </div>
  );
};

export default AdminHome;