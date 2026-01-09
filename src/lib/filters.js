// Categories are used to group the filters
const categories = {
    FRAMEWORK: "Framework",
    LANGUAGE: "Language",
    PATTERN_TYPE: "Pattern Type",
    PLATFORM: "Platform",
    USE_CASE: "Use Case",
};

const filters = [
    {
        name: "OAuth2",
        category: categories.FRAMEWORK,
        tag: "framework:oauth2",
    },
    {
        name: "React",
        category: categories.FRAMEWORK,
        tag: "framework:react",
    },
    {
        name: "Go",
        category: categories.LANGUAGE,
        tag: "language:go",
    },
    {
        name: "Java",
        category: categories.LANGUAGE,
        tag: "language:java",
    },
    {
        name: "JavaScript",
        category: categories.LANGUAGE,
        tag: "language:javascript",
    },
    {
        name: "JSON",
        category: categories.LANGUAGE,
        tag: "language:json",
    },
    {
        name: "Ruby",
        category: categories.LANGUAGE,
        tag: "language:ruby",
    },
    {
        name: "TypeScript",
        category: categories.LANGUAGE,
        tag: "language:typescript",
    },
    {
        name: "YAML",
        category: categories.LANGUAGE,
        tag: "language:yaml"
    },
    {
        name: "Literal",
        category: categories.PATTERN_TYPE,
        tag: "pattern_type:literal",
    },
    {
        name: "Regular Expression",
        category: categories.PATTERN_TYPE,
        tag: "pattern_type:regexp",
    },
    {
        name: "Structural",
        category: categories.PATTERN_TYPE,
        tag: "pattern_type:structural",
    },
    {
        name: "Docker",
        category: categories.PLATFORM,
        tag: "platform:docker",
    },
    {
        name: "GitHub",
        category: categories.PLATFORM,
        tag: "platform:github",
    },
    {
        name: "Kubernetes",
        category: categories.PLATFORM,
        tag: "platform:kubernetes"
    },
    {
        name: "Code Health",
        category: categories.USE_CASE,
        tag: "use_case:code_health",
    },
    {
        name: "Code Intelligence",
        category: categories.USE_CASE,
        tag: "use_case:code_intelligence",
    },
    {
        name: "Code Reuse",
        category: categories.USE_CASE,
        tag: "use_case:code_reuse",
    },
    {
        name: "DevOps",
        category: categories.USE_CASE,
        tag: "use_case:devops",
    },
    {
        name: "Security",
        category: categories.USE_CASE,
        tag: "use_case:security",
    }
];

function CreateFilterCategories() {
    return categories;
}

// createFilters returns the filters
function CreateFilters() {
    let f = filters;
    f.forEach(filter => filter.selected = false)
    return f;
}

export { CreateFilterCategories, CreateFilters }