Bro, build the complete authentication module for **Admin, TP, and Student** according to the following requirements.

### 1. General Auth Requirements

Use:

* `bcryptjs` for password hashing/comparison
* `jsonwebtoken` for access/refresh JWT tokens
* HTTP-only cookies for storing tokens if that is our chosen auth mechanism
* Proper validation and error handling
* Never return the password in API responses
* Passwords must never be stored in plain text

Keep separate controllers/services for:

```text
auth/
├── admin/
├── tp/
└── student/
```

Common utilities can be shared:

```text
utils/
├── generateTokens.js
├── hashPassword.js
├── email.js
└── ...
```

JWT should contain only necessary information, for example:

```js
{
    userId,
    role
}
```

Roles:

```text
ADMIN
TP
STUDENT
```

---

# 2. ADMIN AUTH

### Admin Signup

Admin signup should accept:

```js
{
    fullname,
    email,
    profileImage,
    password
}
```

Schema:

```js
fullname: {
    type: String,
    required: true
},

email: {
    type: String,
    required: true,
    unique: true
},

profileImage: {
    type: String
},

password: {
    type: String,
    required: true
}
```

### Signup Flow

```text
Request
   ↓
Validate input
   ↓
Check whether email already exists
   ↓
Hash password using bcrypt
   ↓
Create Admin
   ↓
Generate JWT tokens
   ↓
Return user + tokens
```

Do not return the password.

---

### Admin Login

Request:

```js
{
    email,
    password
}
```

Flow:

```text
Email + Password
      ↓
Find Admin
      ↓
Compare password using bcrypt
      ↓
Generate JWT access + refresh tokens
      ↓
Return authenticated Admin
```

---

### Admin Logout

Invalidate/remove the authentication tokens.

If using cookies:

```text
Clear accessToken cookie
Clear refreshToken cookie
```

If implementing refresh-token storage, revoke/delete the refresh token as well.

---

# 3. TP AUTH

IMPORTANT:

**TP does NOT have signup.**

Only Admin can create a TP profile.

TP login credentials will be generated/provided when Admin creates the TP account.

### Admin creates TP

Admin will submit the required TP information.

After successful creation:

```text
Admin creates TP
       ↓
Generate TP account/password
       ↓
Hash password before DB storage
       ↓
Save TP
       ↓
Publish email job
       ↓
Email Service
       ↓
Send credentials to TP
```

The email should contain the TP's login email and temporary/generated password.

IMPORTANT:

Do not put email sending directly inside the controller.

Use our existing email service:

```js
publishEmail(...)
```

For example:

```js
await publishEmail({
    to: tp.email,
    subject: "Placely TP Account Created",
    template: "tp-account-created",
    data: {
        fullname: tp.fullname,
        email: tp.email,
        password: temporaryPassword
    }
});
```

The exact `publishEmail` function/signature should follow our existing email-service implementation.

### Security

The password sent through email should be a temporary/generated password.

Ideally, after first login, TP should be asked to change the password.

Never store the plaintext password in MongoDB.

---

### TP Login

Request:

```js
{
    email,
    password
}
```

Flow:

```text
TP enters credentials
       ↓
Find TP
       ↓
Compare hashed password
       ↓
Generate JWT tokens
       ↓
Return TP data
```

No TP signup endpoint.

---

### TP Logout

Same authentication logout mechanism:

```text
Clear/revoke access token
Clear/revoke refresh token
```

---

# 4. STUDENT AUTH

Student signup should accept:

```js
{
    fullname,
    studentId,
    email,
    password,
    branch,
    college,
    collegeId,
    currentYear,
    passingYear
}
```

Schema:

```js
fullname: {
    type: String,
    required: true,
    trim: true
},

studentId: {
    type: Number,
    required: true,
    unique: true
},

email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
},

password: {
    type: String,
    required: true,
    select: false
},

branch: {
    type: String,
    enum: [
        "COMP",
        "IT",
        "AIDS",
        "ENTC",
        "OTHER"
    ],
    required: true,
    index: true
},

college: {
    type: String,
    required: true
},

collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
},

currentYear: {
    type: Number,
    required: true
},

passingYear: {
    type: Number,
    required: true
}
```

### Student Signup Flow

```text
Signup request
      ↓
Validate all fields
      ↓
Check email uniqueness
      ↓
Check studentId uniqueness
      ↓
Hash password
      ↓
Create Student
      ↓
Generate JWT tokens
      ↓
Publish welcome email
      ↓
Return student data
```

Password must never be returned.

---

### Student Welcome Email

After successful signup, use our email service through:

```js
publishEmail(...)
```

Do NOT use Nodemailer directly from the main backend.

Flow:

```text
Student Signup
      ↓
Backend
      ↓
publishEmail()
      ↓
RabbitMQ
      ↓
Email Service
      ↓
Nodemailer
      ↓
Student receives welcome email
```

Example:

```js
await publishEmail({
    to: student.email,
    subject: "Welcome to Placely",
    template: "student-welcome",
    data: {
        fullname: student.fullname
    }
});
```

Follow our existing `publishEmail` implementation/signature.

---

# 5. STUDENT LOGIN

Request:

```js
{
    email,
    password
}
```

Flow:

```text
Email + Password
      ↓
Find Student
      ↓
Password comparison
      ↓
Generate JWT tokens
      ↓
Return Student
```

Because password has:

```js
select: false
```

make sure login explicitly selects it:

```js
.select("+password")
```

Do not expose it in the response.

---

# 6. STUDENT LOGOUT

Implement the same logout mechanism:

```text
Student
   ↓
Logout
   ↓
Clear/revoke JWT authentication
```

---

# 7. FORGOT PASSWORD — ALL THREE ROLES

Implement forgot-password for:

```text
Admin
TP
Student
```

There should be a common secure flow.

### Step 1 — Forgot Password Request

Request:

```js
{
    email
}
```

Flow:

```text
User enters email
      ↓
Find account
      ↓
Generate secure random reset token
      ↓
Store hashed reset token
      ↓
Set expiration time
      ↓
Publish reset-password email
      ↓
Return generic success response
```

IMPORTANT:

Do not reveal whether the email exists.

Always return something like:

```text
"If an account exists with this email, a password reset link has been sent."
```

This prevents email/account enumeration.

---

### Step 2 — Reset Password

Request:

```js
{
    token,
    newPassword
}
```

Flow:

```text
Reset token
      ↓
Hash token
      ↓
Find valid token
      ↓
Check expiration
      ↓
Hash new password
      ↓
Update password
      ↓
Remove reset token
      ↓
Invalidate existing refresh tokens/sessions
```

Reset token should expire, e.g.:

```text
15–30 minutes
```

Do not store the raw reset token in the database.

---

# 8. PASSWORD RESET EMAIL

Use the existing email service:

```js
publishEmail(...)
```

Never send email directly through Nodemailer from the main backend.

Example:

```js
await publishEmail({
    to: user.email,
    subject: "Reset your Placely password",
    template: "password-reset",
    data: {
        fullname: user.fullname,
        resetLink
    }
});
```

The reset link should contain the reset token.

---

# 9. AUTH API STRUCTURE

Use something similar to:

```text
/api/auth/admin/signup
/api/auth/admin/login
/api/auth/admin/logout
/api/auth/admin/forgot-password
/api/auth/admin/reset-password

/api/auth/tp/login
/api/auth/tp/logout
/api/auth/tp/forgot-password
/api/auth/tp/reset-password

/api/auth/student/signup
/api/auth/student/login
/api/auth/student/logout
/api/auth/student/forgot-password
/api/auth/student/reset-password
```

There is intentionally **NO**:

```text
/api/auth/tp/signup
```

because TP accounts are created by Admin.

---

# 10. RESPONSE FORMAT

Use our common `ApiResponse` structure consistently.

For example:

```js
{
    success: true,
    message: "Login successful",
    data: {
        user: {
            id,
            fullname,
            email,
            role
        }
    }
}
```

Never return:

```js
password
```

or:

```js
refreshToken
```

in the JSON response if tokens are being stored in HTTP-only cookies.

---

# 11. AUTH MIDDLEWARE

Create authentication middleware that:

```text
Request
   ↓
Read JWT
   ↓
Verify JWT
   ↓
Extract userId + role
   ↓
Attach authenticated user to req.user
   ↓
next()
```

Also create role-based authorization middleware:

```js
authorize("ADMIN")
authorize("TP")
authorize("STUDENT")
```

This will be useful later for Placely routes.

Example:

```text
Admin-only route
      ↓
authenticate
      ↓
authorize("ADMIN")
      ↓
Controller
```

---

# 12. IMPORTANT SECURITY RULES

1. Never store plaintext passwords.
2. Never return passwords.
3. Never log passwords/tokens.
4. Use bcrypt with an appropriate salt factor.
5. Validate email/password inputs.
6. Use generic forgot-password responses.
7. Reset tokens must expire.
8. Reset tokens should be stored hashed.
9. After password reset, invalidate old sessions/refresh tokens.
10. Use HTTP-only + Secure cookies in production.
11. Add rate limiting to login and forgot-password endpoints.
12. Keep Admin/TP/Student authorization separate.
13. TP has no signup endpoint.
14. Student signup triggers a welcome email through `publishEmail`.
15. TP creation triggers account-credentials email through `publishEmail`.
16. Don't make the main backend depend directly on Nodemailer.

First make the basic auth working properly, then we can add Google OAuth for Student later.


Bro, forgot-password ke liye **OTP Redis mein store karna hai**, MongoDB mein nahi.

We already have Redis setup using `ioredis`:

```js
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL, {
    tls: {}
});

redis.on("connect", () => {
    console.log("Redis connected successfully");
});

redis.on("ready", () => {
    console.log("Redis ready");
});

redis.on("error", (error) => {
    console.error("Redis Error:", error.message);
});

redis.on("close", () => {
    console.log("Redis Connection closed");
});

redis.on("reconnecting", () => {
    console.log("Redis reconnection...");
});

export default redis;
```

### Forgot Password Flow

```text
User enters email
       ↓
Find user in Admin / TP / Student
       ↓
Generate 6-digit OTP
       ↓
Hash OTP
       ↓
Store hashed OTP in Redis with TTL
       ↓
publishEmail()
       ↓
RabbitMQ
       ↓
Email Service
       ↓
OTP sent to email
```

Use Redis key like:

```text
password_reset_otp:{email}
```

For example:

```text
password_reset_otp:student@gmail.com
```

### Generate OTP

Use Node's crypto instead of `Math.random()`:

```js
import crypto from "crypto";

const otp = crypto
    .randomInt(100000, 1000000)
    .toString();
```

Hash it before Redis:

```js
import crypto from "crypto";

const hashedOtp = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");
```

Store it in Redis with **10-minute expiry**:

```js
await redis.set(
    `password_reset_otp:${email}`,
    hashedOtp,
    "EX",
    600
);
```

`600` = 10 minutes.

### Send OTP through Email Service

After storing OTP:

```js
publishEmail({
    type: "PASSWORD_RESET",
    to: user.email,
    subject: "Your Placely Password Reset OTP",
    data: {
        name: user.fullname,
        otp: otp
    }
});
```

The **raw OTP is only sent through the email queue**. Do not store raw OTP in Redis or MongoDB.

---

# Verify OTP

Create:

```text
POST /forgot-password/verify-otp
```

Request:

```js
{
    email,
    otp
}
```

Get OTP from Redis:

```js
const storedOtp = await redis.get(
    `password_reset_otp:${email}`
);
```

If it doesn't exist:

```js
if (!storedOtp) {
    throw new Error("OTP expired or invalid");
}
```

Hash the OTP entered by the user:

```js
const hashedOtp = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");
```

Compare:

```js
if (hashedOtp !== storedOtp) {
    throw new Error("Invalid OTP");
}
```

If valid:

```text
OTP valid
   ↓
Delete Redis OTP
   ↓
Generate JWT
   ↓
Login user
```

Delete it immediately so the OTP becomes **single-use**:

```js
await redis.del(
    `password_reset_otp:${email}`
);
```

Then generate JWT tokens and authenticate the user.

---

# IMPORTANT: OTP Security

Implement these protections:

### 1. OTP expiry

```text
10 minutes
```

Redis handles this automatically.

### 2. Single use

After successful verification:

```js
await redis.del(key);
```

### 3. Resend OTP

When user requests another OTP, overwrite the old one:

```js
await redis.set(key, hashedOtp, "EX", 600);
```

### 4. Rate limiting

Don't allow unlimited OTP requests.

For example:

```text
Maximum 3 OTP requests / 10 minutes
```

Use another Redis key:

```text
password_reset_attempts:{email}
```

### 5. Wrong OTP attempts

Also limit verification attempts, e.g.:

```text
Maximum 5 wrong OTP attempts
```

After that, invalidate/delete the OTP.

---

# Same system for Admin, TP and Student

Don't create three different OTP mechanisms.

Use the same Redis-based system:

```text
Admin
   ┐
TP  ├──→ Forgot Password → Redis OTP → Email Service
Student
   ┘
```

You can identify the account type internally while finding the user.

---

# Email Consumer

Add:

```js
case "PASSWORD_RESET":

    html = passwordResetEmailTemplate(
        emailData.data.name,
        emailData.data.otp
    );

    break;
```

And template:

```js
export const passwordResetEmailTemplate = (name, otp) => {

    return `
        <!DOCTYPE html>

        <html>

        <body>

            <h1>Placely Password Reset</h1>

            <p>Hello ${name},</p>

            <p>
                We received a request to reset your Placely account.
            </p>

            <p>
                Your One-Time Password (OTP) is:
            </p>

            <h2>${otp}</h2>

            <p>
                This OTP will expire in 10 minutes.
            </p>

            <p>
                Please do not share this OTP with anyone.
            </p>

            <p>
                If you did not request this OTP,
                you can safely ignore this email.
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
```

### Final architecture

```text
                    MAIN BACKEND
                         │
              Forgot Password API
                         │
                  Generate OTP
                         │
                  SHA-256 Hash
                         │
                         ▼
                      Redis
                  (10 min TTL)
                         │
                         │
                  publishEmail()
                         │
                         ▼
                     RabbitMQ
                         │
                         ▼
                   Email Service
                         │
                     Nodemailer
                         │
                         ▼
                    User Email
                         │
                      Enter OTP
                         │
                         ▼
                Verify against Redis
                         │
                         ▼
                  Delete OTP
                         │
                         ▼
                  Generate JWT
                         │
                         ▼
                   Login User
```

Also, **don't put Redis code directly inside every controller**. Create a small reusable `otp.service.js` containing `generateOTP`, `storeOTP`, `verifyOTP`, `deleteOTP`, and rate-limit helpers. Then Admin/TP/Student auth can all use the same OTP service.
