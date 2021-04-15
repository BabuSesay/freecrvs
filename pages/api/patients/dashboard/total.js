import { getTotalDosesByType } from "../../../../services/dashboard";
import { getSession } from "next-auth/client";

export default async (req, res) => {
  // const { db } = await connectToDatabase();
  const session = await getSession({ req });
  // const token = await jwt.getToken({ req, secret });
  console.log("session", session);
  if (!session) {
    res.status(401).json({ msg: "unauthorized" });
  } else {
    const results = await getTotalDosesByType();
    res.json(results);
  }
};
