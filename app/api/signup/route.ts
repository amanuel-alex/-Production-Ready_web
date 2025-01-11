// app/api/signup/route.js
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import bcrypt from "bcryptjs";
import { User } from "@prisma/client";
import { handlers } from "../../auth";

export const { GET, POST } = handlers;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user: User = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Signup failed:", error);

      // Handle specific errors (example)
      if (
        error instanceof Error &&
        error.message.includes("email-already-in-use")
      ) {
        res.status(400).json({ error: "Email is already in use" });
      } else {
        res.status(500).json({ error: "Signup failed" });
      }
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
