import { Request, Response } from "express";
import * as service from "../services/resourceService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const health = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
};

export const getResources = (req: Request, res: Response) => {
    const data = service.getAll();
    res.status(HTTP_STATUS.OK).json({
        message: "Resources retrieved",
        count: data.length,
        data
    });
};

export const getResource = (req: Request, res: Response) => {
    const resource = service.getById(Number(req.params.id));
    if (!resource)
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Resource not found"
        });

    res.status(HTTP_STATUS.OK).json({
        message: "Resource retrieved",
        data: resource
    });
};

export const createResource = (req: Request, res: Response) => {
    const { title, type, url } = req.body;

    if (!title)
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Missing required field: title"
        });

    const resource = service.create(req.body);

    res.status(HTTP_STATUS.CREATED).json({
        message: "Resource created",
        data: resource
    });
};

export const updateResource = (req: Request, res: Response) => {
    const resource = service.update(
        Number(req.params.id),
        req.body
    );

    if (!resource)
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Resource not found"
        });

    res.status(HTTP_STATUS.OK).json({
        message: "Resource updated",
        data: resource
    });
};

export const deleteResource = (req: Request, res: Response) => {
    const deleted = service.remove(Number(req.params.id));

    if (!deleted)
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Resource not found"
        });

    res.status(HTTP_STATUS.OK).json({
        message: "Resource deleted"
    });
};