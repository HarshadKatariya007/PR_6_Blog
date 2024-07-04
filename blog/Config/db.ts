import mongoose from 'mongoose'

export const Connect = async () =>
{   
    const db_URL:any = process.env.DB_URL
    await mongoose.connect(db_URL)
    console.log("MongoDB SuccessFully Connected...");
}

