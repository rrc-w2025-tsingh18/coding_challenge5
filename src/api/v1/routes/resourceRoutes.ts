import express from "express";
import * as controller from "../controllers/resourceController";

const router = express.Router();

/**
 * @openapi
 * /api/v1/resources:
 *   get:
 *     summary: Get all resources
 */
router.get("/resources", controller.getResources);

/**
 * @openapi
 * /api/v1/resources/{id}:
 *   get:
 *     summary: Get resource by ID
 */
router.get("/resources/:id", controller.getResource);

router.post("/resources", controller.createResource);
router.put("/resources/:id", controller.updateResource);
router.delete("/resources/:id", controller.deleteResource);

router.get("/health", controller.health);

export default router;