import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

type Unit = 'ms' | 's' | 'm' | 'h' | 'd';
type Duration = `${number} ${Unit}` | `${number}${Unit}`;

// A function to create a ratelimiter instance with a given configuration
export function createRateLimiter(requests: number, duration: Duration) {
  // During development, we don't want to rate-limit.
  if (process.env.NODE_ENV === 'development') {
    return {
      limit: () => {
        return {
          success: true,
          pending: Promise.resolve(),
          limit: requests,
          remaining: requests,
          reset: Date.now() + 1000,
        };
      },
    };
  }

  return new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(requests, duration),
    analytics: true,
    // Create a unique prefix for each ratelimiter to avoid collisions
    prefix: `@clndr/ratelimit/${requests}-requests/${duration.replace(' ', '')}`,
  });
}
