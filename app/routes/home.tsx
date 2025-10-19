import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Landing from "~/landing/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "REAL TIME FINANCE" },
    { name: "description", content: "test" },
  ];
}

export default function Home() {
  return <Landing />;
}
