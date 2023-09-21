import { createBrowserRouter } from "react-router-dom";

import { HomePage, UserPage } from "@/components/pages";
import { getUser } from "@/core/data/getUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:userName",
    element: <UserPage getUser={getUser} />,
  },
]);
