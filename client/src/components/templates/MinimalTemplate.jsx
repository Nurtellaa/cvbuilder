import { Star, Target, Zap, Award, BookOpen } from "lucide-react";

const MinimalTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-light mb-2 tracking-tight">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                
                {data.personal_info?.profession && (
                    <p className="text-gray-600 font-normal mb-6 text-lg">
                        {data.personal_info.profession}
                    </p>
                )}

                {/* Contact - Minimal vertical layout */}
                <div className="space-y-1 text-sm text-gray-600">
                    {data.personal_info?.email && (
                        <div className="flex items-center">
                            <span className="w-24 text-gray-500 font-normal">Email:</span>
                            <span className="ml-2">{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center">
                            <span className="w-24 text-gray-500 font-normal">Phone:</span>
                            <span className="ml-2">{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center">
                            <span className="w-24 text-gray-500 font-normal">Location:</span>
                            <span className="ml-2">{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <div className="flex items-center">
                            <span className="w-24 text-gray-500 font-normal">LinkedIn:</span>
                            <span className="ml-2 break-all">{data.personal_info.linkedin}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center">
                            <span className="w-24 text-gray-500 font-normal">Website:</span>
                            <span className="ml-2 break-all">{data.personal_info.website}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Professional Summary - With subtle icon */}
            {data.professional_summary && (
                <section className="mb-8 py-4 border-t border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <Target className="size-4" style={{ color: accentColor }} />
                        <h2 className="text-xs uppercase tracking-widest font-normal text-gray-500">
                            PROFILE SUMMARY
                        </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience - Minimal timeline */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap className="size-4" style={{ color: accentColor }} />
                        <h2 className="text-xs uppercase tracking-widest font-medium" style={{ color: accentColor }}>
                            WORK EXPERIENCE
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="relative pl-6">
                                {/* Minimal timeline dot */}
                                <div className="absolute left-0 top-2 size-2 rounded-full" 
                                     style={{ backgroundColor: accentColor }}></div>
                                
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                    <div className="mb-2 sm:mb-0">
                                        <h3 className="text-base font-normal text-gray-900">{exp.position}</h3>
                                        <p className="text-sm text-gray-600 font-normal">{exp.company}</p>
                                    </div>
                                    <div className="text-xs text-gray-500 font-light">
                                        <span>{formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}</span>
                                    </div>
                                </div>
                                {exp.description && (
                                    <div className="text-gray-700 leading-relaxed text-sm whitespace-pre-line mt-2 pl-4 border-l border-gray-200">
                                        {exp.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

{/* Projects - Clean list */}
{data.project && data.project.length > 0 && (
    <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
            <Star className="size-4" style={{ color: accentColor }} />
            <h2 className="text-xs uppercase tracking-widest font-medium" style={{ color: accentColor }}>
                SELECTED PROJECTS
            </h2>
        </div>

        <div className="space-y-4">
            {data.project.map((proj, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                        <div>
                            <h3 className="text-base font-normal text-gray-900">{proj.name}</h3>
                            {proj.type && (
                                <span className="text-xs text-gray-500 italic">{proj.type}</span>
                            )}
                        </div>
                    </div>
                    
                    {proj.technologies && (
                        <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Tech:</span> {proj.technologies}
                        </p>
                    )}
                    
                    {proj.description && (
                        <p className="text-gray-600 text-sm mt-1">{proj.description}</p>
                    )}
                    
                    {proj.link && (
                        <a 
                            href={proj.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs flex items-center gap-1 mt-2"
                            style={{ color: accentColor }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg>
                            View Project
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
)}

            {/* Education - Simple list */}
            {data.education && data.education.length > 0 && (
                <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="size-4" style={{ color: accentColor }} />
                        <h2 className="text-xs uppercase tracking-widest font-medium" style={{ color: accentColor }}>
                            Education
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-4 border-b border-gray-100 last:border-b-0">
                                <div>
                                    <h3 className="text-base font-normal text-gray-900">
                                        {edu.degree} {edu.field && <span className="text-gray-600">in {edu.field}</span>}
                                    </h3>
                                    <p className="text-sm text-gray-600">{edu.institution}</p>
                                    {edu.gpa && <p className="text-xs text-gray-500 mt-1">GPA: {edu.gpa}</p>}
                                </div>
                                <div className="text-xs text-gray-500 font-light mt-1 sm:mt-0">
                                    <span>{formatDate(edu.graduation_date)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills - Clean tags */}
            {data.skills && data.skills.length > 0 && (
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Award className="size-4" style={{ color: accentColor }} />
                        <h2 className="text-xs uppercase tracking-widest font-medium" style={{ color: accentColor }}>
                            CORE SKILLS
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-light text-gray-700 border border-gray-300 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default MinimalTemplate;