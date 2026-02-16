import { Mail, Phone, MapPin, Linkedin, Globe, Award, Briefcase, GraduationCap, Code, Zap } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-xl">
            {/* Header - Modern accent banner */}
            <header className="p-10 text-white" style={{ backgroundColor: accentColor }}>
                <div className="mb-6">
                    <h1 className="text-4xl font-light mb-3 tracking-wide">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    {data.personal_info?.profession && (
                        <p className="text-xl opacity-90 font-light">
                            {data.personal_info.profession}
                        </p>
                    )}
                </div>

                {/* Contact - Clean vertical layout */}
                <div className="space-y-4 text-sm opacity-90">
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-3">
                            <Mail className="size-5" />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-3">
                            <Phone className="size-5" />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-3">
                            <MapPin className="size-5" />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <div className="flex items-center gap-3">
                            <Linkedin className="size-5" />
                            <span className="break-all">{data.personal_info.linkedin}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center gap-3">
                            <Globe className="size-5" />
                            <span className="break-all">{data.personal_info.website}</span>
                        </div>
                    )}
                </div>
            </header>

            <div className="p-10">
                {/* Executive Summary */}
                {data.professional_summary && (
                    <section className="mb-10 p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl border-l-8" 
                             style={{ borderLeftColor: accentColor }}>
                        <div className="flex items-center gap-4 mb-6">
                            <Award className="size-7" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-light tracking-wide">
                                CAREER PROFILE
                            </h2>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed pl-12">
                            {data.professional_summary}
                        </p>
                    </section>
                )}

                {/* Strategic Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-10">
                        <div className="flex items-center gap-4 mb-8">
                            <Briefcase className="size-7" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-light tracking-wide">
                                WORK EXPERIENCE
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="relative pl-12">
                                    {/* Decorative dot */}
                                    <div className="absolute left-0 top-2 size-3 rounded-full" 
                                         style={{ backgroundColor: accentColor }}></div>
                                    
                                    <div className="border-b border-gray-100 pb-8">
                                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                                            <div>
                                                <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.position}</h3>
                                                <p className="text-lg font-medium" style={{ color: accentColor }}>{exp.company}</p>
                                            </div>
                                            <div className="text-sm px-4 py-2 bg-gray-100 rounded-full inline-flex">
                                                <span className="font-medium text-gray-600">
                                                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                                </span>
                                            </div>
                                        </div>
                                        {exp.description && (
                                            <div className="text-gray-700 leading-relaxed whitespace-pre-line mt-4 pl-4 border-l-2 border-gray-200">
                                                {exp.description}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

{/* Key Initiatives */}
{data.project && data.project.length > 0 && (
    <section className="mb-10">
        <div className="flex items-center gap-4 mb-8">
            <Zap className="size-7" style={{ color: accentColor }} />
            <h2 className="text-2xl font-light tracking-wide">
                PROJECTS & ACHIEVEMENTS
            </h2>
        </div>

        <div className="space-y-6">
            {data.project.map((p, index) => (
                <div key={index} className="p-6 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-gray-100">
                            <Code className="size-5" style={{ color: accentColor }} />
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
                                {p.type && (
                                    <span className="text-sm px-3 py-1 bg-gray-100 rounded-full" style={{ color: accentColor }}>
                                        {p.type}
                                    </span>
                                )}
                            </div>
                            
                            {p.technologies && (
                                <p className="text-sm text-gray-600 mt-2">
                                    <span className="font-medium">Technologies:</span> {p.technologies}
                                </p>
                            )}
                            
                            {p.description && (
                                <div className="text-gray-700 leading-relaxed text-sm mt-3">
                                    {p.description}
                                </div>
                            )}
                            
                            {p.link && (
                                <div className="mt-4">
                                    <a 
                                        href={p.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm flex items-center gap-2 font-medium"
                                        style={{ color: accentColor }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                        </svg>
                                        Explore Project
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
)}

                {/* Education & Development */}
                {data.education && data.education.length > 0 && (
                    <section className="mb-10">
                        <div className="flex items-center gap-4 mb-8">
                            <GraduationCap className="size-7" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-light tracking-wide">
                                EDUCATION & PROFESSIONAL DEVELOPMENT
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {data.education.map((edu, index) => (
                                <div key={index} className="p-6 border-l-4 rounded-r-lg bg-white" 
                                     style={{ borderLeftColor: accentColor, borderLeftWidth: '4px' }}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-medium text-gray-900 text-lg">
                                                {edu.degree} {edu.field && `in ${edu.field}`}
                                            </h3>
                                            <p className="font-medium mt-1" style={{ color: accentColor }}>{edu.institution}</p>
                                        </div>
                                        <div className="text-sm text-gray-600 bg-gray-50 px-4 py-1 rounded-full">
                                            <span>{formatDate(edu.graduation_date)}</span>
                                        </div>
                                    </div>
                                    {edu.gpa && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <span className="text-sm font-medium text-gray-700">GPA: {edu.gpa}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Strategic Competencies */}
                {data.skills && data.skills.length > 0 && (
                    <section className="pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-light tracking-wide mb-8 text-center">
                            COMPETENCIES
                        </h2>

                        <div className="flex flex-wrap justify-center gap-3">
                            {data.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-5 py-2 text-sm font-medium text-white rounded-full shadow-sm"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

export default ModernTemplate;