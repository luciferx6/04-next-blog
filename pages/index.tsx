import { useEffect, useState } from "react";

import { Card } from "../components/album/Card";
import { DefaultLayout } from "../layouts/DefaultLayout";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const r = await fetch("/api/users");
    const users = await r.json();

    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DefaultLayout>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {users.map((i, index) => {
          return (
            <div key={index} className="col">
              <Card {...i} />
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
