const nodemailer = require('nodemailer');

exports.main = async (event, context) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'thequeensheadfarnham@gmail.com',
            pass: 'Rojwillfixit1'
        }
    });

    let mailOptions = {
        from: 'thequeensheadfarnham@gmail.com',
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'Currently Working'
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent', info })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email', error })
        };
    }
};