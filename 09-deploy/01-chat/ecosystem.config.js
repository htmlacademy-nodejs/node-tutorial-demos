module.exports = {
  apps : [{
    script: 'app.js',
    name: 'chat',
    watch: true,
    env: {
        PORT: 4444,
    },
    max_memory_restart: '12M',
    exec_mode: 'fork'
  }],
};
