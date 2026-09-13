const forgotPasswordOtpTemplate = (name, otp) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Placely Password Reset</title>
        </head>

        <body style="
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            font-family: Arial, Helvetica, sans-serif;
        ">

            <div style="
                max-width: 600px;
                margin: 40px auto;
                background-color: #ffffff;
                border-radius: 10px;
                padding: 30px;
            ">

                <h2 style="
                    color: #333333;
                    margin-bottom: 20px;
                ">
                    Reset Your Placely Password
                </h2>

                <p style="
                    color: #555555;
                    font-size: 16px;
                ">
                    Hello ${name},
                </p>

                <p style="
                    color: #555555;
                    font-size: 16px;
                    line-height: 1.6;
                ">
                    We received a request to reset your Placely account
                    password.
                </p>

                <p style="
                    color: #555555;
                    font-size: 16px;
                    line-height: 1.6;
                ">
                    Use the following OTP to continue:
                </p>

                <div style="
                    text-align: center;
                    margin: 30px 0;
                ">

                    <span style="
                        display: inline-block;
                        background-color: #f0f0f0;
                        padding: 15px 30px;
                        border-radius: 8px;
                        font-size: 32px;
                        font-weight: bold;
                        letter-spacing: 8px;
                        color: #222222;
                    ">
                        ${otp}
                    </span>

                </div>

                <p style="
                    color: #777777;
                    font-size: 14px;
                    line-height: 1.5;
                ">
                    This OTP is valid for <strong>10 minutes</strong>.
                </p>

                <p style="
                    color: #777777;
                    font-size: 14px;
                    line-height: 1.5;
                ">
                    If you did not request a password reset, you can
                    safely ignore this email.
                </p>

                <hr style="
                    border: none;
                    border-top: 1px solid #eeeeee;
                    margin: 30px 0;
                ">

                <p style="
                    color: #999999;
                    font-size: 12px;
                    text-align: center;
                ">
                    © ${new Date().getFullYear()} Placely. All rights reserved.
                </p>

            </div>

        </body>
        </html>
    `;
};

export default forgotPasswordOtpTemplate;