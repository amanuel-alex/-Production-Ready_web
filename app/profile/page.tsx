import { auth, signIn, signOut } from "@/app/auth";
import { Button } from "@radix-ui/themes";

const SignInWithButton = ({ provider }: { provider: string }) => (
  <form
    action={async () => {
      "use server";
      await signIn(provider);
    }}
  ></form>
);

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  return user ? (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" className="btn btn-primary">
          Sign Out
        </Button>
      </form>
    </>
  ) : (
    <>
      <SignInWithButton provider="google" />
      <SignInWithButton provider="github" />
    </>
  );
}
