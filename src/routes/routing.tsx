import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../main/Layout";
import AdminList from "../pages/admin-list/Admin-List";
import Group from "../pages/Group";

type RoutingProps = {
  toggleTheme: () => void
}

const Routing: React.FC<RoutingProps> = ({toggleTheme}) => {

  const routing = useRoutes([
    {
      path: "/",
      element: <Layout toggleTheme={toggleTheme} />,
      children: [
        {
          path: "admin-list",
          element: <AdminList />,
        },
        {
          path: "group",
          element: <Group />,
        },
      ],
    },
  ]);

  return <>{routing}</>;
};

export default Routing;
