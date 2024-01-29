// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type User = {
  username: string;
  password: string;
};

type UsersData = {
  users: User[];
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Load users from the JSON file
    const usersFilePath = path.join(process.cwd(), "users.json");
    const usersData: UsersData = JSON.parse(
      fs.readFileSync(usersFilePath, "utf-8")
    );

    // Find the user with the provided username
    const user = usersData.users.find((u) => u.username === username);

    // Validate the password
    if (user && user.password === password) {
      res.status(200).json({ success: true, message: "Login successful!" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
