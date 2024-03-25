import clientPromise from "@/utils/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Email");
    const collection = db.collection("emails");

    const data = await collection.insertOne(req.body);

    res.status(200).json({
      message: "Document inserted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
