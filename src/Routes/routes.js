import Dashboard from "../Screens/Dashboard/Dashboard";
import Upgrade from "../Screens/Upgrade/Upgrade";
import { AppRoutes } from "./AppRoutes";

const PublicRoutes = [
  {
    exact: "",
    component: "",
    name: "",
  },
];

const ProtectedRoutes = [
  {
    exact: "",
    component: Dashboard,
    name: "Dashboard",
    path: AppRoutes.Dashboard,
  },
  {
    exact: "",
    component: Upgrade,
    name: "Upgrade",
    path: AppRoutes.Upgrade,
  },
  {
    exact: "",
    component: "",
    name: "Clients",
    path: AppRoutes.Clients,
  },
  {
    exact: "",
    component: "",
    name: "Products",
    path: AppRoutes.Products,
  },
  {
    exact: "",
    component: "",
    name: "Invoices",
    path: AppRoutes.Invoices,
  },
  {
    exact: "",
    component: "",
    name: "Recurring Invoices",
    path: AppRoutes.RecurringInvoices,
  },
  {
    exact: "",
    component: "",
    name: "Payments",
    path: AppRoutes.Payments,
  },
  {
    exact: "",
    component: "",
    name: "Quotes",
    path: AppRoutes.Quotes,
  },
  {
    exact: "",
    component: "",
    name: "Credits",
    path: AppRoutes.Credits,
  },
  {
    exact: "",
    component: "",
    name: "Projects",
    path: AppRoutes.Projects,
  },
  {
    exact: "",
    component: "",
    name: "Tasks",
    path: AppRoutes.Tasks,
  },
  {
    exact: "",
    component: "",
    name: "Vendors",
    path: AppRoutes.Vendors,
  },
  {
    exact: "",
    component: "",
    name: "Purchase Orders",
    path: AppRoutes.PurchaseOrders,
  },
  {
    exact: "",
    component: "",
    name: "Expenses",
    path: AppRoutes.Expenses,
  },
  {
    exact: "",
    component: "",
    name: "Recurring Expenses",
    path: AppRoutes.RecurringExpenses,
  },
  {
    exact: "",
    component: "",
    name: "Transactions",
    path: AppRoutes.Transactions,
  },
  {
    exact: "",
    component: "",
    name: "Reports",
    path: AppRoutes.Reports,
  },
  {
    exact: "",
    component: "",
    name: "Settings",
    path: AppRoutes.Settings,
  },
];

export { PublicRoutes, ProtectedRoutes };
