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