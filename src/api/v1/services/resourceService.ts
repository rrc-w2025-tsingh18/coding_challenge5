interface Resource {
    id: number;
    title: string;
    type: string;
    url: string;
    description: string;
    createdAt: string;
}

let resources: Resource[] = [
    {
        id: 1,
        title: "Express.js Guide",
        type: "documentation",
        url: "https://expressjs.com/en/guide",
        description: "Official Express.js documentation",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "TypeScript Basics",
        type: "video",
        url: "https://example.com/ts-basics",
        description: "Introduction to TypeScript",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        title: "REST API Design",
        type: "article",
        url: "https://example.com/rest-design",
        description: "Best practices for REST API design",
        createdAt: new Date().toISOString()
    },
    {
        id: 4,
        title: "Jest Testing Tutorial",
        type: "tutorial",
        url: "https://example.com/jest-tutorial",
        description: "Complete guide to testing with Jest",
        createdAt: new Date().toISOString()
    }
];

export const getAll = () => resources;

export const getById = (id: number) =>
    resources.find(r => r.id === id);

export const create = (data: Partial<Resource>) => {
    const newResource: Resource = {
        id: resources.length + 1,
        title: data.title!,
        type: data.type!,
        url: data.url!,
        description: data.description || "",
        createdAt: new Date().toISOString()
    };
    resources.push(newResource);
    return newResource;
};

export const update = (id: number, data: Partial<Resource>) => {
    const resource = getById(id);
    if (!resource) return null;
    Object.assign(resource, data);
    return resource;
};

export const remove = (id: number) => {
    const index = resources.findIndex(r => r.id === id);
    if (index === -1) return false;
    resources.splice(index, 1);
    return true;
};