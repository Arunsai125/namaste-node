const { MongoClient } = require("mongodb");

const url = "mongodb+srv://arunsainarla:9JuQd2hjeHGnwTkw@namastenode.mqnqf0a.mongodb.net/";

const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main(){
        await client.connect();
        console.log("Client Connection Successfull !");
        const db = client.db(dbName);
        const collection = db.collection("User");

        // Insert Data C 🟢
        const data = {
            firstName: 'Shikhar',
            lastName: 'Dhawan',
            city: 'Delhi',
            phoneNumber: '7981036993'
        }
        const insertResult = await collection.insertMany([data]);
        console.log("🟢 Inserted Documents =>", insertResult);

        // Read Documents R 🔵
        const findResult = await collection.find({}).toArray();
        console.log("🔵 Found Documents =>", findResult);

        // Update Data U 🟠
        const updatedResult = await collection.updateOne(
            {firstName : "Shikhar"}, { $set : {city: "Hyderabad", phoneNumber : "9246936313"}}
        );
        console.log("🟠 Updated Result =>", updatedResult.modifiedCount);

        // Delete Data D 🔴
        const deleteResult = await collection.deleteMany({firstName: "Shikhar"});
        console.log("🔴 Deleted data =>", deleteResult);



        
        // Count Documents
        const countResult = await collection.countDocuments({});
        console.log("Total Documents =>", countResult);

        // Find Documents with a Filter
        const filteredResult = await collection.find({firstName: "Shikhar"}).toArray();
        console.log("Filtered Result =>", filteredResult);



    return "done";
}

main().then(console.log).catch(console.error).finally(() => client.close());

