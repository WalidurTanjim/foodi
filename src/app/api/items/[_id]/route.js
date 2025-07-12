import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, params) {
    const { _id } = await params?.params;
    const query = { _id: new ObjectId(_id) };
    const result = await dbConnect(process.env.FOODS_COLLECTION).findOne(query || {});
    return Response.json(result);
}