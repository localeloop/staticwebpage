const nodemailer = require('nodemailer');
const validator = require('validator');

// The entry point for the serverless function
module.exports = async (req, res) => {
    const { name, email, content } = req.body;

    // Validate input
    if (!name || !email || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (!validator.isEmail(email) || !validator.isAlphanumeric(name.replace(/\s/g, '')) || !validator.isLength(content, { min: 1 })) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    try {
        // Create a transporter object using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email options
        const mailOptions = {
            from: `Contact Form <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER, // Your email address
            subject: 'New Contact Form Submission',
            text: `You have received a new message from your website's contact form.\n\nName: ${name}\nEmail: ${email}\nContent: ${content}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};