/**
 * everyone can see
 * @type{string[]}
 **/
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * authentication routes
 * this will redirect logg ed in users to dashboard
 * @type{string[]}
 **/
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/new-password",
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
