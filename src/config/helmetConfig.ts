import helmet from "helmet";

export const helmetConfig = helmet({
    contentSecurityPolicy: false,
    frameguard: { action: "deny" },
    hidePoweredBy: true,
    hsts:
        process.env.NODE_ENV === "production"
            ? { maxAge: 31536000 }
            : false
});