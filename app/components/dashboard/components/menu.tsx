import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

export default function Menu({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </div>
  );
}
