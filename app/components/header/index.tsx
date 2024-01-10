import { cn } from "../../lib/utils";
import { NavLink } from "@remix-run/react";

export default function Header() {
  const items = [
    {
      name: "Dashboard",
      to: "/",
    },
    {
      name: "Music",
      to: "/music",
    },
    {
      name: "Mail",
      to: "/mail",
    },
    {
      name: "Tasks",
      to: "/tasks",
    },
    {
      name: "Forms",
      to: "/forms",
    },
  ];

  return (
    <div className="flex my-4">
      {items.map((item) => (
        <NavLink
          key={item.name}
          className={({ isActive }) =>
            cn(
              "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
              isActive
                ? "bg-muted font-medium text-primary"
                : "text-muted-foreground"
            )
          }
          to={item.to}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}
