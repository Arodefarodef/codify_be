import { connect } from "mongoose";
export const url: string = process.env.MONGODB_ONLINE;

export const dbConfig = async () => {
  try {
    await connect(url).then(() => {
      console.log("Connected... ❤️❤️🚀🚀🎮🎮");
    });
  } catch (error) {
    console.log("Error connecting to database");
    process.exit(1);
  }
};
