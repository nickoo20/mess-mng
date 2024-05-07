import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

export const verificationByStudent = async (req, res, useremail, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "gniyati20@gmail.com",
        pass: "wxke nldd fpeu bzxa",
      },
    });
    const mailOptions = {
      from: "gniyati20@gmail.com",
      to: useremail,
      subject: "Email verification",
      html: `<p>Please click the following link to verify the email <a href= "http://localhost:4000/api/v1/auth/verify/user?token=${token}">Verify Email</a></p>`,
    };
    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      message: "User created successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal Server error!",
    });
  }
};

export const verificationByAdmin = async (req, res, admin, user, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "gniyati20@gmail.com",
        pass: "wxke nldd fpeu bzxa",
      },
    }) ;

    const mailOptions = {
      from: "gniyati20@gmail.com",
      to: admin,
      subject: "Email verifictaion",
      html: `<p>Please click the following link to verify the student name: ${user.name} 
      reg.no: ${user.registrationNo} : <a href="http://localhost:4000/api/v1/auth/verify/admin?token=${token}">Verify Email</a></p>`,
    };
    await transporter.sendMail(mailOptions);
    return res.status(201).json({ message: 'User created. Verification email sent.' });
  } catch (error) {
    console.log(`Error in verificationByAdmin middleware, ${error.message}`);
    return res.status(500).json({
      error: error.message,
    });
  }
};

/*
//protected Routes token base.. PQRS
import jwt from "jsonwebtoken";
import AsynkErrorHandler from "../error/CatchAsyncError.js";
import Errorhandler from "../error/errorHandler.js";
// import { userModel as User } from "../models/userModel.js";
import { studentModel as Student } from "../models/StudentModel.js";
import { adminModel as Admin } from "../models/AdminModel.js";
const requireSignIn = AsynkErrorHandler(async (req, res, next) => {
  const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
  req.user = decode;
  next();
});

//check for admin...

// const isAdmin = AsynkErrorHandler(async (req, res, next) => {
//   const user = await User.findById(req.user._id);

//   if (user.role !== 1) {
//     return next(new Errorhandler("UnAuthorized Access", 401));
//   }
//   next();
// });

export { requireSignIn };
*/
