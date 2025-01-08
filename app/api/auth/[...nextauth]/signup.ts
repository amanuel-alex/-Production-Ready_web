// pages/api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    console.log("Received Data:", req.body);

    // Validate input
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "All fields (username, email, password) are required" });
    }

    try {
      // Check if email already exists in the database
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: "Email already in use" });
      }

      // Hash password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 12);

      // Create the new user
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ error: "Error creating user" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
