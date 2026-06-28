module.exports = {
  apps: [{
    name: 'adobe-checker',
    script: 'server.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3005
    }
  }]
};
