module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ded98dba1b4c3236cda2d73f23be6af5'),
  },
});
