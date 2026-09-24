"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
type LoginModalProps = {
  children: Readonly<React.ReactNode>;
};
export default function LoginModal({ children }: LoginModalProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children as React.ReactElement} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleClick}>Submit</Button>
        <hr />
        <DialogClose render={<Button variant={"destructive"}>Close</Button>} />
      </DialogContent>
    </Dialog>
  );
}
