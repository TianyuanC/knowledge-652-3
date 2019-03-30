const reactBlogTags = Object.keys(reactBlogRoutes)
    .reduce((tagSys, route) => {
        const { title, tags } = reactBlogRoutes[route];
        tags.forEach(tag => {
            if (!tagSys[tag]) {
                tagSys[tag] = [];
            }
            tagSys[tag].push({ route, title });
        });
        return tagSys;
}, {});
