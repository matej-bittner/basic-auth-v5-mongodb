/**
 * everyone can see
 * @type{string[]}
 **/
export const publicRoutes = ["/"];

/**
 * authentication routes
 * this will redirect logg ed in users to dashboard
 * @type{string[]}
 **/
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/error",
  "/auth/new-verification",
];

/**
 * we can never block this, everyone need to be able to lo gin or register
 * @type{string}
 **/
export const apiAuthPrefix = "/api/auth";

/**
 * @type{string}
 **/
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
