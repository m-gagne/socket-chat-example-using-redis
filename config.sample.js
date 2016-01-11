var config = {};

config.redis = {};
config.server = {};

// Redis Configuration
config.redis.uri = process.env.REDIS_URI || 'YOUR REDIS URI HERE';
config.redis.port = process.env.REDIS_PORT || 6379;
config.redis.key = process.env.REDIS_KEY || 'YOUR REDIS KEY HERE';
config.redis.channel = process.env.REDIS_CHANNEL || 'chat';

// Server Configuration
config.server.port = process.env.port || 8080;
config.server.id = process.env.WEBSITE_INSTANCE_ID || "n/a";

module.exports = config;