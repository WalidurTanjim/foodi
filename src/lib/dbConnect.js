import { MongoClient, ServerApiVersion } from "mongodb";

const dbConnect = (collection_name) => {
    const uri = process.env.MONGODB_URI;
    const db_name = process.env.DATABASE_NAME;
    // console.log("Collection name:", collection_name, db_name, uri)

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(db_name).collection(collection_name);
}
export default dbConnect;