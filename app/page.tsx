import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/auth/sign-in">SignIn</Link>
      <br />
      <Link href="/auth/sign-up">SignUp</Link>
      <br />
      <Link href="/auth/sign-out">SignOut</Link>
    </div>
  );
}
