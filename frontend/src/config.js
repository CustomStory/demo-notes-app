const config = {
    SENTRY_DSN: "https://7c5cf7741f094604bea3da80869911ff@o4505343041011712.ingest.sentry.io/4505343043633152",
    STRIPE_KEY: "pk_test_51NHC1fDej5nMCl4Gv5U3ICPnkmad023YiRb5YOe3Z1XeE2RWiYKZKnyVJwLMRdrq1ryFiV61d9fFKdxFmxdkDLXm00thJGyHrv",
    MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;