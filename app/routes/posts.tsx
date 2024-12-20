import { Outlet } from "@remix-run/react";

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}
