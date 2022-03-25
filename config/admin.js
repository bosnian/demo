module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6338c26b78ff801a377106dcb3ad318e'),
  },
});
