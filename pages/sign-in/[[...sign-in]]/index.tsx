import AuthLayout from "@/components/layout/auth-layout";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
}
