import clientPromise from "@/utils/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Project");
    const collection = db.collection("projects");

    const data = await collection.findOne({ slug: req.body.slug });

    res.status(200).json({
      message: "Document successfully found.",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
