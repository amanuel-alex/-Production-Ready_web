import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    console.log("Received Data:", req.body);

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        error: "Both email and password are required.",
      });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(400).json({ error: "Invalid credentials." });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).json({ error: "Invalid credentials." });
      }

      const { password: _, ...userWithoutPassword } = user;

      console.log("Login successful for user:", userWithoutPassword);
      return res.status(200).json(userWithoutPassword); // Send back user details (except password)
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    // Handle unsupported HTTP methods
    console.error("Method Not Allowed:", req.method);
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
