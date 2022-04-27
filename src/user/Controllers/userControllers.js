import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const hashCode = process.env.HASHCODE;

export const getHealthControllers = (req, res) => {
  res.status(200).send({ message: "Health checked" });
};

export const getProfileControllers = (req, res) => {
  // demo user data
  const user = {
    firstName: "userFirstName",
    lastName: "userLastName",
    yearsOfExperience: 1.5,
    companyName: "userCompanyName",
    linkedInID: "useLinkedInId",
    twitterID: "userTwitterId",
    instagramID: "userInstagramId",
    phoneNumber: "userPhoneNumber",
    email: "userEmail",
    personalWebsite: "userPersonalWebsite",
  };
  res.status(200).send(user);
};

export const verifyUserControllers = async(req, res) => {
  const { salt } = req.body;
  if(salt) {
    const hashString = await bcrypt.hash(hashCode, salt);
    if (hashString) {
      res.status(200).send(hashString);
    }
    res.status(500).send("INTERNAL SERVER ERROR");
  } else {
    res.status(400).send("SALT NOT FOUND");
  }
};
