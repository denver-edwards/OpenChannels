import clientPromise from "@/utils/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Project");
    const collection = db.collection("projects");

    const data = await collection
      .find({})
      .limit(10)
      .sort({ submitDate: -1 })
      .toArray();

    res.status(200).json({
      message: "Documents successfully found.",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
