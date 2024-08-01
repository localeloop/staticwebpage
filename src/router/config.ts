const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/food",
    exact: true,
    component: "Food",
  },
  {
    path: "/whatson",
    exact: true,
    component: "WhatsOn",
  },
  {
    path: "/livemusic",
    exact: true,
    component: "UnderConstruction",
  },
];

export default routes;
