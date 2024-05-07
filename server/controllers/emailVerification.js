import jwt from "jsonwebtoken";
import dotenv from 'dotenv' ;
import { studentModel as Student } from "../models/StudentModel.js";
import { verificationByAdmin } from "../middleware/authMiddleware.js";

dotenv.config() ;

export const emailVerificationByStudent = async (req, res) => {
  try {
    const adminEmail = "niyatigupta197@gmail.com";
    const token = req.query.token;
    if (!token) {
      return res.status(404).json({
        message: "Token is required!",
      });
    }
        // Verify JWT
    const decoded = await jwt.verify(token, process.env.JWT_SECRET) ; 
    const userEmail = decoded.email ;
    const student = await Student.findOne({ userEmail }) ;
    await verificationByAdmin(req, res, adminEmail, student, token) ;
    res.redirect("http://localhost:3000/confirmation") ;
  } catch (error) {
    console.log(`Error in emailVerificationByStudent, ${error.message}!`);
  }
} ; 

export const emailVerificationByAdmin = async(req, res, userEmail) => {
    try{
        const token = req.query.token ;
        if(!token){
            return res.status(400).json({
                message:"Token is required!",
            }) ; 
        }
        // verify JWT
        const decoded=await jwt.verify(token, process.env.JWT_SECRET) ;
        const userEmail = decoded.email; 
        await Student.findOneAndUpdate({email:userEmail},{verified:true}) ;
        sendVerificationConfirmationEmail(userEmail);
        res.send({message:"verification done"})

    }catch(error){
        console.log(`Error in emailVerificationByAdmin: ${error.message}`) ;
    }
}

const sendVerificationConfirmationEmail = (email)=>{
    console.log(email)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secureConnection:false,
        auth: {
            user: 'gniyati20@gmail.com',
            pass: "wxke nldd fpeu bzxa",
        }
    });

    const mailOptions = {
        from: 'gniyati20@gmail.com',
        to: email, // User's email
        subject: 'Registration Verified',
        text: 'Your registration has been verified. You can now log in to your account.'
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Verification confirmation email sent: ' + info.response);
        }
    });
}