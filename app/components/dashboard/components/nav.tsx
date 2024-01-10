import TeamSwitch from "./teamSwitch";
import Menu from "./menu";
import Search from "./search";
import UserMenu from "./userMenu";

export default function DashboardPage() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitch />
        <Menu className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
