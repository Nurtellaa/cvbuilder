import { Mail, Phone, MapPin, Linkedin, Globe, Award, Briefcase, GraduationCap, Target, Users, BarChart } from "lucide-react";

const ExecutiveTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-5xl mx-auto bg-white text-gray-900 font-sans">
            {/* Executive Header */}
            <header className="py-12 px-16 border-b border-gray-200">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-light tracking-wide text-gray-900 mb-3">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    {data.personal_info?.profession && (
                        <p className="text-xl text-gray-600 font-light tracking-wide">
                            {data.personal_info.profession}
                        </p>
                    )}
                </div>

                {/* Executive Contact */}
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                {data.personal_info?.email && (
                    <div className="flex items-start gap-2">
                    <Mail className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span className="break-all">{data.personal_info.email}</span>
                    </div>
                )}

                {data.personal_info?.phone && (
                    <div className="flex items-start gap-2">
                    <Phone className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span>{data.personal_info.phone}</span>
                    </div>
                )}

                {data.personal_info?.location && (
                    <div className="flex items-start gap-2">
                    <MapPin className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span>{data.personal_info.location}</span>
                    </div>
                )}

                {data.personal_info?.linkedin && (
                    <div className="flex items-start gap-2">
                    <Linkedin className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span className="break-all">{data.personal_info.linkedin}</span>
                    </div>
                )}

                {data.personal_info?.website && (
                    <div className="flex items-start gap-2">
                    <Globe className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span className="break-all">{data.personal_info.website}</span>
                    </div>
                )}
                </div>

            </header>

            {/* Main Content */}
            <div className="px-16 py-12">
                {/* Executive Summary */}
                {data.professional_summary && (
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <Target className="size-7" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-light text-gray-900 tracking-wide">
                                PROFILE
                            </h2>
                        </div>
                        <div className="pl-12">
                            <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
                                {data.professional_summary}
                            </p>
                        </div>
                    </section>
                )}

                {/* Leadership Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-10">
                            <Briefcase className="size-7" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-light text-gray-900 tracking-wide">
                                EXPERIENCE
                            </h2>
                        </div>

                        <div className="space-y-12">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="relative">
                                    {/* Elegant divider */}
                                    {index > 0 && (
                                        <div className="absolute -top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                                    )}
                                    
                                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                                        <div className="lg:w-2/3">
                                            <h3 className="text-xl font-medium text-gray-900 mb-1">
                                                {exp.position}
                                            </h3>
                                            <p className="text-lg font-medium mb-3" style={{ color: accentColor }}>
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="text-sm text-gray-600 bg-gray-50 px-5 py-2 rounded-full inline-flex items-center">
                                            <span className="font-medium">
                                                {formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {exp.description && (
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-line pl-6 border-l-2" 
                                             style={{ borderLeftColor: accentColor }}>
                                            {exp.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

{/* Strategic Initiatives */}
{data.project && data.project.length > 0 && (
    <section className="mb-16">
        <div className="flex items-center gap-4 mb-10">
            <BarChart className="size-7" style={{ color: accentColor }} />
            <h2 className="text-2xl font-light text-gray-900 tracking-wide">
                PROJECTS
            </h2>
        </div>

        <div className="space-y-8">
            {data.project.map((proj, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {proj.name}
                            </h3>
                            {proj.type && (
                                <p className="text-sm uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                                    {proj.type}
                                </p>
                            )}
                            {proj.technologies && (
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Technologies:</span> {proj.technologies}
                                </p>
                            )}
                        </div>
                    </div>
                    {proj.description && (
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {proj.description}
                        </p>
                    )}
                    {proj.link && (
                        <a 
                            href={proj.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-2"
                            style={{ color: accentColor }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg>
                            {proj.link} 
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
)}

                {/* Two Column Layout for Education & Skills */}
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Education & Credentials */}
                    {data.education && data.education.length > 0 && (
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <GraduationCap className="size-6" style={{ color: accentColor }} />
                                <h2 className="text-xl font-light text-gray-900 tracking-wide">
                                    EDUCATION & CREDENTIALS
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="pb-6 border-b border-gray-100 last:border-b-0">
                                        <h3 className="font-medium text-gray-900 text-lg mb-1">
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                                        <div className="flex justify-between items-center mt-3">
                                            <span className="text-sm text-gray-600">
                                                {formatDate(edu.graduation_date)}
                                            </span>
                                            {edu.gpa && (
                                                <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100">
                                                    GPA: {edu.gpa}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Leadership Competencies */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <Users className="size-6" style={{ color: accentColor }} />
                                <h2 className="text-xl font-light text-gray-900 tracking-wide">
                                    COMPETENCIES
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {data.skills.map((skill, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 rounded-full mr-4" 
                                             style={{ backgroundColor: accentColor }}></div>
                                        <span className="text-gray-700 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

            </div>
        </div>
    );
}

export default ExecutiveTemplate;