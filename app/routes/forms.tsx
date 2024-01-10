import { Outlet } from "@remix-run/react";
import FormsPage from "~/components/forms";

export default function Forms() {
  return (
    <FormsPage>
      <Outlet />
    </FormsPage>
  );
}
