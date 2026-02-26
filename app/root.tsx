import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState, useMemo } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import type { Language } from "./i18n/translations";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Determine language from URL path
  const language: Language = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith("/en")) return "en";
    if (path.startsWith("/vi")) return "vi";
    return "vi"; // default to Vietnamese
  }, [location.pathname]);

  return (
    <html className={darkMode ? "dark" : ""} lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>

        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen overflow-x-hidden bg-main-bg-color">
        <LanguageProvider language={language}>
          <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
          <div className="pt-28">{children}</div>
          <ScrollRestoration />
          <Scripts />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
  console.error("error");
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container min-h-screen items-center justify-center flex mx-auto">
      <div className="text-center font-bold text-secondary-bg-color text-2xl">
        Comming Soon
      </div>
    </main>
  );
}
