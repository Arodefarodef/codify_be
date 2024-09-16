import { connect } from "mongoose";
export const URL: string | any =
  "mongodb+srv://skillscapeofficier:skillscapeofficier@cluster0.0dubq.mongodb.net/skillScapeDb?retryWrites=true&w=majority&appName=Cluster0";

export const dbConfig = async () => {
  try {
    await connect(URL!).then(() => {
      console.log("Connected... ❤️❤️🚀🚀🎮🎮");
    });
  } catch (error: any) {
    console.error(error.message);
    console.log(`Error connecting to database ${error.message}`);
    process.exit(1);
  }
};
