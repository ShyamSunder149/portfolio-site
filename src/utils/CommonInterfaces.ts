interface Project {
    title: string;
    desc: string;
    githubLink: string;
    deploymentLink: string | null | undefined;
    tags: string[];
}

interface Status {
    title : string,
    color : string
}