import clientPromise from "@/utils/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const data = JSON.parse(req.body);

  try {
    const client = await clientPromise;
    const db = client.db("Project");
    const collection = db.collection("projects");

    const { insertedId } = await collection.insertOne(data);

    return res
      .status(201)
      .json({ id: insertedId, message: "Post created successfully" });
  } catch (e) {
    return res.status(500).json({ error: "Unable to update post." });
  }
}
