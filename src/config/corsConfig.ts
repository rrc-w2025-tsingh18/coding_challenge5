import cors from "cors";

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

export const corsConfig = cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 600 
});