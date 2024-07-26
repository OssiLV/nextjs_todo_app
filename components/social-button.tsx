import React from "react";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa6";
import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

interface SocialButtonComponentProps {
  provider: {
    id: string;
    name: string;
  };
}
export default function SocialButtonComponent({
  provider,
}: SocialButtonComponentProps) {
  return (
    <form
      key={provider.id}
      action={async () => {
        "use server";
        try {
          await signIn(provider.id, { redirectTo: "/" });
        } catch (error) {
          if (error instanceof AuthError) {
            return redirect(`/auth/error?error=${error.type}`);
          }
          console.log(error);

          throw error;
        }
      }}
    >
      <Button type="submit">
        <span>Sign in with {provider.name}</span>
        <FaGoogle className="ml-2" />
      </Button>
    </form>
  );
}
