import { useState } from "react";
import { Check, ChevronsUpDown, PlusCircleIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const groups = [
  { value: "personal_account", label: "Personal Account" },
  { value: "teams", label: "Teams" },
];

const accounts = [
  { id: "1", name: "Alicia Koch", type: "personal_account" },
  { id: "2", name: "Acme Inc.", type: "teams" },
  { id: "3", name: "Monsters Inc.", type: "teams" },
];

interface account {
  id: string;
  name: string;
  type: string;
}

interface DisplayAccountProps {
  onSelect: (account: account) => void;
  account: account;
}

interface CreateTeamDialogProps {
  onCancel: () => void;
}

function DisplayAccount({ onSelect, account }: DisplayAccountProps) {
  return groups.map((g) => {
    return (
      <CommandGroup key={g.value} heading={g.label}>
        {accounts
          .filter((acc) => acc.type === g.value)
          .map((acc) => (
            <CommandItem
              key={acc.id}
              value={acc.name}
              onSelect={() => onSelect(acc)}
            >
              {acc.name}
              <Check
                className={cn(
                  "ml-auto h-4 w-4",
                  account.id === acc.id ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
      </CommandGroup>
    );
  });
}

function CreateTeamDialog({ onCancel }: CreateTeamDialogProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create team</DialogTitle>
        <DialogDescription>
          Add a new team to manage products and customers.
        </DialogDescription>
      </DialogHeader>
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Label htmlFor="name">Team name</Label>
            <Input id="name" placeholder="Acme Inc." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan">Subscription plan</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">
                  <span className="font-medium">Free</span> -{" "}
                  <span className="text-muted-foreground">
                    Trial for two weeks
                  </span>
                </SelectItem>
                <SelectItem value="pro">
                  <span className="font-medium">Pro</span> -{" "}
                  <span className="text-muted-foreground">
                    $9/month per user
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Continue</Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default function TeamSwitch() {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(accounts[0]);
  const [showDialog, setShowDialog] = useState(false);

  const onSelectAccount = (acc: account) => {
    setAccount(acc);
    setOpen(false);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/gray.png`}
                className="grayscale"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <p className="w-full text-left">{account.name}</p>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search team..." />
            <CommandEmpty>No team found.</CommandEmpty>
            <DisplayAccount onSelect={onSelectAccount} account={account} />
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      setShowDialog(true);
                    }}
                  >
                    <PlusCircleIcon className="mr-2 h-5 w-5" />
                    Create Team
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <CreateTeamDialog onCancel={() => setShowDialog(false)} />
    </Dialog>
  );
}
