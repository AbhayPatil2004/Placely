export const welcomeEmailTemplate = (name) => {

    return `
        <!DOCTYPE html>

        <html>

        <body>

            <h1>Welcome to Placely </h1>

            <p>Hello ${name},</p>

            <p>
                Your Placely account has been created
                successfully.
            </p>

            <p>
                Start your placement preparation today.
            </p>

            <br>

            <p>
                Regards,<br>
                Placely Team
            </p>

        </body>

        </html>
    `;
};

export const passwordResetOtpTemplate = (name, otp) => {
    return `
        <!DOCTYPE html>
        <html>
        <body>
            <h1>Placely password reset</h1>
            <p>Hello ${name},</p>
            <p>Your password reset OTP is:</p>
            <h2>${otp}</h2>
            <p>This OTP expires in 10 minutes. If you did not request this, ignore this email.</p>
            <p>Regards,<br>Placely Team</p>
        </body>
        </html>
    `;
};