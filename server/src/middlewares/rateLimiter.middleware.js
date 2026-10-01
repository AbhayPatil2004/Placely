import redis from "../config/redis.js";
import { GetStudentId } from "../utils/studentDetails.js";
import ApiError from "../utils/apiError.js";

const rateLimiter = ({ key, limit, window }) => {

    return async (req, res, next) => {

        try {

            const studentId = GetStudentId(req);

            const redisKey = `rate_limit:${key}:${studentId}`;

            const count = await redis.incr(redisKey);

            // Set expiry only for the first request
            if (count === 1) {
                await redis.expire(redisKey, window);
            }

            // Rate limit exceeded
            if (count > limit) {

                const ttl = await redis.ttl(redisKey);

                res.set("Retry-After", ttl.toString());

                return res.status(429).json(
                    new ApiError(
                        429,
                        "Too many requests. Please try again later.",
                        {
                            retryAfter: ttl
                        }
                    )
                );
            }

            next();

        } catch (error) {

            console.error("Rate limiter error:", error);

            next();
        }
    };
};

export default rateLimiter;