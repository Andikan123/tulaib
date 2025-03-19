import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

import { store } from "./store";
import Menu from "./pages/Menu";
import Reservation from "./pages/reservation";
import CreateOrders from "./pages/CreateOrder";
import Confirmation from "./pages/ConfirmPage";
import Contact from "./pages/ContactPage";

import Dashboard from "./pages/Dashboard";
import AdminReservations from "./pages/AdminReservations";
import AdminOrders from "./pages/AdminOrders";
import AdminMenu from "./pages/AdminMenu";
import AdminDash from "./pages/AdminDash";
import AdminCustomer from "./pages/AdminCustomer";
import AdminAnalytic from "./pages/AdminAnalytic";
import AdminStaff from "./pages/AdminStaff";
import AdminInvent from "./pages/AdminInvent";

const isAdmin = false; // Change based on authentication

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

// ✅ Home Loader (Handles Redirection)
const homeLoader = async () => {
  if (isAdmin) {
    return redirect("/admin");
  }
  return null; // Continue to HomeLayout
};

// ✅ Admin Loader (Handles Unauthorized Access)
const adminLoader = async () => {
  if (!isAdmin) {
    return redirect("/");
  }
  return null; // Continue to Admin Dashboard
};

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: homeLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "createorders",
        element: <CreateOrders />,
      },
      {
        path: "confirm",
        element: <Confirmation />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: "/admin",
    element: <Dashboard />,
    loader: adminLoader,
    errorElement: <Error />,
    children: [
      {
        path: "adminreserve",
        element: <AdminReservations />,
      },
      {
        index: true,
        element: <AdminDash/>,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: "adminmenu",
        element: <AdminMenu />,
      },
      {
        path: "adminorder",
        element: <AdminOrders />,
      },
      {
        path: "admincustomer",
        element: <AdminCustomer/>,
      },
      {
        path: "adminanalytics",
        element: <AdminAnalytic/>,
      },
      {
        path: "adminstaff",
        element: <AdminStaff/>,
      },
      {
        path: "admininventory",
        element: <AdminInvent/>,
      },
    ],
  },
]);

// App Component
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
