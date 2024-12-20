import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <>
      <h1>Auth layout</h1>
      <Outlet />
    </>
  );
}
