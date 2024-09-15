import { connect } from "mongoose";
export const url: string = "mongodb://127.0.0.1:27017/SkillScapeDB";

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
