import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("en", "routes/home.tsx", { id: "home-en" }),
  route("vi", "routes/home.tsx", { id: "home-vi" }),
] satisfies RouteConfig;
