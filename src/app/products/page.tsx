"use client";
import ConfirmModal from "@/components/modal/confirm-modal";
import { Button } from "@/components/ui/button";
import { useSearchStore } from "@/store/search-store";

export default function ProductsPage() {
  const { openSearch } = useSearchStore();
  return (
    <div>
      <h1 className="text-3xl">Products</h1>
      <Button onClick={openSearch}>Open Search</Button>

      <ConfirmModal
        onConfirm={() => {
          console.log("action delete");
        }}
      >
        <Button variant={"destructive"}>Delete</Button>
      </ConfirmModal>
    </div>
  );
}
