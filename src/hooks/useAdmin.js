import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(
        `https://manufacturer-website-server-side-amb7.onrender.com/admin/${email}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
