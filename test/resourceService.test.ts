import * as service from "../src/api/v1/services/resourceService";

describe("Resource Service", () => {
    it("should get all resources", () => {
        const data = service.getAll();
        expect(data.length).toBeGreaterThan(0);
    });

    it("should get resource by id", () => {
        const resource = service.getById(1);
        expect(resource?.id).toBe(1);
    });

    it("should return undefined for invalid id", () => {
        const resource = service.getById(999);
        expect(resource).toBeUndefined();
    });

    it("should create resource", () => {
        const newResource = service.create({
            title: "Test",
            type: "article",
            url: "test.com"
        });
        expect(newResource.id).toBeDefined();
    });

    it("should delete resource", () => {
        const result = service.remove(1);
        expect(result).toBe(true);
    });
});