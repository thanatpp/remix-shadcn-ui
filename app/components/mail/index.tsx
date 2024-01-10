import { Fragment } from "react";
import { accounts, mails } from "./data/mails";
import Mail from "~/components/mail/components/mail";

export default function MailPage() {
  return (
    <Fragment>
      <div className="hidden flex-col md:flex">
        <Mail accounts={accounts} mails={mails} navCollapsedSize={4} />
      </div>
    </Fragment>
  );
}
