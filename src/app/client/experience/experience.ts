export interface Experience {
    workExperience: WorkExperienceEntry [];
    trainingExperience: TrainingExperienceEntry [];
}

export interface WorkExperienceEntry {
    employerName: string;
    employerLogo: string;
    role: string;
    responsibilities: string;
    isCurrent: boolean;
    startDate: Date;
    endDate: Date;
}
export interface TrainingExperienceEntry {
    organizationName: string;
    organizationLogo: string;
    field: string;
    startDate: Date;
    endDate: Date;
}
