import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-screen"
    >
      <h1 className="text-3xl font-extrabold">404</h1>
      <p>Sorry, the requested page does not exist.</p>
      <Link to="/">Home</Link>
    </div>
  );
}
