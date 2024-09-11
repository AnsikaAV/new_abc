import nodemailer from 'nodemailer';
import config from '../../../config';
import ApiError from '../../../errors/apiError';
import httpStatus from 'http-status';

const contactUs = async (data: any): Promise<{message: string}> => {
    const {firstName, lastName, email, subject, text } = data;
    console.log(data)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "subairasam8733260@gmail.com",
            pass: "eqhtnwqmqigztojv"
        }
    });

    const mailOptions = {
        from: `"${firstName + ' ' + lastName}" <${email}>`,
        to: 'ansikavishwajith11@gmail.com',
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
            throw new ApiError(httpStatus.NO_CONTENT, "Unable to send message !")
        } else {
            return
        }
    });
    return {
        message: "Successfull message has been sent !"
    }
    
}

export const ContactService = {
    contactUs
}