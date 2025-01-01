import { auth, signIn, signOut } from "@/app/auth";

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  return user ? (
    <>
      {" "}
      <h2 className="text-3xl">Welcome {user.name}</h2>
      <form
        action={async () => {
          await signOut();
        }}
      >
        <button type="submit" className="btn btn-primary">
          signOut
        </button>
      </form>
    </>
  ) : (
    <>
      <h2 className="">
        {" "}
        you are not authenticated. click signup button below
      </h2>

      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit" className="btn btn-success">
          Sign up
        </button>
      </form>
    </>
  );
}
