import LoginModal from "@/components/modal/login-modal";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Home</h1>
      <LoginModal>
        <Button>Open Modal</Button>
      </LoginModal>
    </div>
  );
}
