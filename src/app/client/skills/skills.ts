export interface Skills {
    technicalSkills: TechnicalSkillEntry [];
    nonTechnicalSkills: NonTechnicalSkillEntry [];
    languageSkills: LanguageSkillEntry[];
}

export interface TechnicalSkillEntry {
    name: string;
    rating: number;
}

export interface NonTechnicalSkillEntry {
    name: string;
    rating: number;
}

export interface LanguageSkillEntry {
    name: string;
    rating: number;
}
