"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSearchStore } from "@/store/search-store";
export default function SearchModal() {
  const { isOpenSearch, closeSearch } = useSearchStore();
  return (
    <Dialog open={isOpenSearch} onOpenChange={closeSearch}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search Modal</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
