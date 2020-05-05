export interface Project {
    name: string;
    description: string;
    projectMembers: Members[]; 
}

export interface Members {
    email: string;
}