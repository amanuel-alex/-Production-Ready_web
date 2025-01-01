import { auth, signIn, signOut } from "@/app/auth";

const SignInWithButton = ({ provider }: { provider: string }) => (
  <form
    action={async () => {
      "use server";
      await signIn(provider);
    }}
  >
    <button type="submit" className="btn btn-success">
      Sign in with {provider}
    </button>
  </form>
);

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  return user ? (
    <>
      <h2 className="text-3xl">Welcome {user.email}</h2>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="btn btn-primary">
          Sign Out
        </button>
      </form>
    </>
  ) : (
    <>
      <h2>You are not authenticated. Click the sign-in button below.</h2>
      <SignInWithButton provider="google" />
      <SignInWithButton provider="github" />
    </>
  );
}
