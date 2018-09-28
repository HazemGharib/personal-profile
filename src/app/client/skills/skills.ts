export interface Skills {
    _id: string;
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
