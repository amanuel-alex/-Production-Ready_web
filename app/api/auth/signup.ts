import { NextApiRequest, NextApiResponse } from "next";

export default async function signupHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save user to database
    console.log("New user details:", { username, email, password });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in signup API:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
