import { Account, Avatars, Client, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") 
  .setProject("6945354c000dbc82f34a")
  .setPlatform("dev.mo.shelfi");

export const account = new Account(client);
export const avatar = new Avatars(client);
export const database = new Databases(client);
