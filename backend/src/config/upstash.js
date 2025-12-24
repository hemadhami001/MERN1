import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

import dotenv from 'dotenv';
dotenv.config();

// Create a new ratelimiter, that allows 10 requests per 30 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "10 s"), // 5 requests per 10 seconds

})

export default ratelimit;