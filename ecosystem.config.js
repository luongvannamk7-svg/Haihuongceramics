// PM2 config for Hostinger VPS deployment
module.exports = {
  apps: [
    {
      name: 'hai-huong-ceramics',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/haihuongceramics',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
