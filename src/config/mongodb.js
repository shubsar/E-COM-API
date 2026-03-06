import { MongoClient } from "mongodb";

const url="mongodb://localhost:27017/ecommerce";
let client;

const connectToMongoDB=()=>{
    MongoClient.connect(url)
    .then(clientInstance=>{
        client=clientInstance

        console.log("Mongodb is connected");

    })
    .catch(err=>{
        console.error("Failed to connect to MongoDB", err);
    })
}
export const getDB=()=>{
    return client.db();
}

export default connectToMongoDB;