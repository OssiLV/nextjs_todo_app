import React from "react";
import { providerMap } from "@/lib/auth";
import SocialButtonComponent from "@/components/social-button";

export default function SignInPage() {
  return (
    <div className="w-[24rem] h-[28rem] border-2 border-dashed rounded-lg">
      {Object.values(providerMap).map((provider) => (
        <SocialButtonComponent key={provider.id} provider={provider} />
      ))}
    </div>
  );
}
