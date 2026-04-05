import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import ModernHome from "./pages/ModernHome";
import ModernDashboard from "./pages/ModernDashboard";
import ModernProjects from "./pages/ModernProjects";
import ModernAbout from "./pages/ModernAbout";
import ModernContact from "./pages/ModernContact";
import ModernGuestbook from "./pages/ModernGuestbook";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: ModernHome },
      { path: "dashboard", Component: ModernDashboard },
      { path: "projects", Component: ModernProjects },
      { path: "about", Component: ModernAbout },
      { path: "contact", Component: ModernContact },
      { path: "guestbook", Component: ModernGuestbook },
    ],
  },
]);