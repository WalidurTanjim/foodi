import dbConnect from "@/lib/dbConnect";

export async function GET() {
    const result = await dbConnect(process.env.FOODS_COLLECTION).find().toArray();
    return Response.json(result);
}