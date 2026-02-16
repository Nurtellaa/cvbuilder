import { Mail, Phone, MapPin, Linkedin, Globe, Code, Cpu, Database, GitBranch, Terminal, BookOpen, Layers } from "lucide-react";

const TechnicalTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-5xl mx-auto bg-white text-gray-900 font-mono">
        {/* Technical Header */}
        <header className="py-10 px-12 border-b border-gray-300 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Name + Profession */}
            <div className="min-w-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 font-sans">
                {data.personal_info?.full_name || "Your Name"}
            </h1>

            {data.personal_info?.profession && (
                <div className="flex items-center gap-2">
                <Terminal className="size-5 shrink-0" style={{ color: accentColor }} />
                <p className="text-lg text-gray-700 font-medium font-sans">
                    {data.personal_info.profession}
                </p>
                </div>
            )}
            </div>

            {/* Contact (stacked) */}
            <div className="w-full lg:w-auto">
            <div className="space-y-2 text-sm text-gray-700">
                {data.personal_info?.email && (
                <div className="flex items-start gap-2">
                    <Mail className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span className="font-medium break-all">{data.personal_info.email}</span>
                </div>
                )}
                {data.personal_info?.phone && (
                <div className="flex items-start gap-2">
                    <Phone className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span className="font-medium">{data.personal_info.phone}</span>
                </div>
                )}
                {data.personal_info?.location && (
                <div className="flex items-start gap-2">
                    <MapPin className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                    <span className="font-medium">{data.personal_info.location}</span>
                </div>
                )}
            </div>
            </div>
        </div>

        {/* Links (no hover emphasis, teal accent) */}
        {(data.personal_info?.linkedin || data.personal_info?.website || data.personal_info?.github) && (
            <div className="mt-6 flex flex-col gap-2 text-sm text-gray-700">
            {data.personal_info?.linkedin && (
                <div className="flex items-start gap-2">
                <Linkedin className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                <a
                    href={data.personal_info.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium break-all"
                    style={{ color: accentColor }}
                >
                    {data.personal_info.linkedin}
                </a>
                </div>
            )}

            {data.personal_info?.website && (
                <div className="flex items-start gap-2">
                <Globe className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                <a
                    href={data.personal_info.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium break-all"
                    style={{ color: accentColor }}
                >
                    {data.personal_info.website}
                </a>
                </div>
            )}

            {data.personal_info?.github && (
                <div className="flex items-start gap-2">
                <GitBranch className="size-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
                <a
                    href={data.personal_info.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium break-all"
                    style={{ color: accentColor }}
                >
                    {data.personal_info.github}
                </a>
                </div>
            )}
            </div>
        )}
        </header>


            {/* Main Content */}
            <div className="px-12 py-10">
                {/* Technical Summary */}
                {data.professional_summary && (
                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <Code className="size-6" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-bold text-gray-900 font-sans">
                                PROFILE
                            </h2>
                        </div>
                        <div className="pl-10">
                            <p className="text-gray-700 leading-relaxed font-sans">
                                {data.professional_summary}
                            </p>
                        </div>
                    </section>
                )}

                {/* Technical Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Cpu className="size-6" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-bold text-gray-900 font-sans">
                                EXPERIENCE
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="border-l-4 pl-6" style={{ borderLeftColor: accentColor }}>
                                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 font-sans">
                                                {exp.position}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <div className="size-1.5 rounded-full bg-gray-400"></div>
                                                <p className="text-gray-700 font-medium font-sans">{exp.company}</p>
                                            </div>
                                        </div>
                                        <div className="mt-2 lg:mt-0">
                                            <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                                                {formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {exp.description && (
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-line mt-4 pl-4 border-l border-gray-300">
                                            <div className="font-mono text-sm">
                                                {exp.description}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

{/* Projects & Technical Work */}
{data.project && data.project.length > 0 && (
    <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
            <Database className="size-6" style={{ color: accentColor }} />
            <h2 className="text-2xl font-bold text-gray-900 font-sans">
                PROJECTS
            </h2>
        </div>

        <div className="space-y-6">
            {data.project.map((proj, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 font-sans">
                                {proj.name}
                            </h3>
                            {proj.technologies && (
                                <p className="text-sm text-gray-600 font-medium mb-2">
                                    Tech: <span style={{ color: accentColor }}>{proj.technologies}</span>
                                </p>
                            )}
                        </div>
                        {proj.type && (
                            <span className="text-xs px-3 py-1 bg-gray-200 rounded-full font-medium">
                                {proj.type}
                            </span>
                        )}
                    </div>
                    {proj.description && (
                        <div className="text-gray-700 leading-relaxed text-sm mb-4 font-sans">
                            {proj.description}
                        </div>
                    )}
                    {proj.link && (
                        <a 
                            href={proj.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-2 font-medium font-sans"
                            style={{ color: accentColor }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg>
                            View Repository / Demo
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
)}

                {/* Single Column Layout for better technical readability */}
                
                {/* Technical Education - Single Column */}
                {data.education && data.education.length > 0 && (
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="size-6" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-bold text-gray-900 font-sans">
                                EDUCATION & CERTIFICATIONS
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {data.education.map((edu, index) => (
                                <div key={index} className="pl-8 border-l-2" style={{ borderLeftColor: accentColor }}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1 font-sans">
                                                {edu.degree} {edu.field && `in ${edu.field}`}
                                            </h3>
                                            <p className="text-gray-700 font-medium">{edu.institution}</p>
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full">
                                            {formatDate(edu.graduation_date)}
                                        </span>
                                    </div>
                                    {edu.gpa && (
                                        <div className="mt-3 flex items-center gap-2">
                                            <div className="size-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                                            <span className="text-sm font-bold px-3 py-1 bg-gray-50 rounded-lg border border-gray-200">
                                                GPA: {edu.gpa}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Technical Skills - Clean Grid List */}
                {data.skills && data.skills.length > 0 && (
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Layers className="size-6" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-bold text-gray-900 font-sans">
                                TECHNICAL SKILLS
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.skills.map((skill, index) => (
                                <div key={index} className="flex items-center py-2 px-4 bg-gray-50 rounded-lg">
                                    <div className="size-2 rounded-full mr-3 flex-shrink-0" 
                                         style={{ backgroundColor: accentColor }}></div>
                                    <span className="text-gray-800 font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

    
            </div>
        </div>
    );
}

export default TechnicalTemplate;