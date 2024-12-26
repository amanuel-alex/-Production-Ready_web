import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [],
  callbacks: {},
});

export { handler as GET, handler as POST };
