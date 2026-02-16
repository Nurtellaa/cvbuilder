import { Mail, Phone, MapPin, Linkedin, Globe, Award, Briefcase, GraduationCap, Code, Star } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
            {/* Header */}
            <header className="text-center mb-8 pb-6 border-b-2" style={{ borderColor: accentColor }}>
                <h1 className="text-3xl font-bold mb-2" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                
                {data.personal_info?.profession && (
                    <p className="text-gray-600 font-medium mb-6">
                        {data.personal_info.profession}
                    </p>
                )}

                {/* Contact - Stacked vertically */}
                <div className="space-y-3 text-sm text-gray-600 mt-6">
                    {data.personal_info?.email && (
                        <div className="flex items-center justify-center gap-2">
                            <Mail className="size-4" />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center justify-center gap-2">
                            <Phone className="size-4" />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center justify-center gap-2">
                            <MapPin className="size-4" />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <div className="flex items-center justify-center gap-2">
                            <Linkedin className="size-4" />
                            <span className="break-all">{data.personal_info.linkedin}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center justify-center gap-2">
                            <Globe className="size-4" />
                            <span className="break-all">{data.personal_info.website}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                        <Award className="size-5" style={{ color: accentColor }} />
                        <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                            CAREER PROFILE
                        </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-8">{data.professional_summary}</p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="size-5" style={{ color: accentColor }} />
                        <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                            PROFESSIONAL EXPERIENCE
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="border-l-3 pl-4" style={{ borderColor: accentColor }}>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-lg">{exp.position}</h3>
                                        <p className="text-gray-700 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-sm text-gray-600">
                                        <p>{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}</p>
                                    </div>
                                </div>
                                {exp.description && (
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line mt-3">
                                        {exp.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
                <section className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Code className="size-5" style={{ color: accentColor }} />
                        <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                            NOTABLE PROJECTS
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {data.project.map((proj, index) => (
                            <div key={index} className="border-l-3 pl-4" style={{ borderColor: accentColor }}>
                                <div className="flex items-start gap-3 mb-2">
                                    <Star className="size-4 mt-1" style={{ color: accentColor }} />
                                    <div className="w-full">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-semibold text-gray-900 text-lg">{proj.name}</h3>
                                            {proj.type && (
                                                <span className="text-sm text-gray-600 italic">{proj.type}</span>
                                            )}
                                        </div>
                                        
                                        {proj.technologies && (
                                            <p className="text-sm text-gray-600 mb-2">
                                                <span className="font-medium">Technologies:</span> {proj.technologies}
                                            </p>
                                        )}
                                        
                                        <p className="text-gray-600 mt-1">{proj.description}</p>
                                        
                                        {proj.link && (
                                            <div className="mt-2">
                                                <a 
                                                    href={proj.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-sm flex items-center gap-1"
                                                    style={{ color: accentColor }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                                    </svg>
                                                    View Project
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

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="size-5" style={{ color: accentColor }} />
                        <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                            EDUCATION & CREDENTIALS
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {data.education.map((edu, index) => (
                            <div key={index} className="border-l-3 pl-4" style={{ borderColor: accentColor }}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p className="text-gray-700">{edu.institution}</p>
                                        {edu.gpa && <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <p>{formatDate(edu.graduation_date)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
                        CORE COMPETENCIES
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {data.skills.map((skill, index) => (
                            <div key={index} 
                                 className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200"
                                 style={{ 
                                     backgroundColor: accentColor + '10',
                                     color: accentColor,
                                     borderColor: accentColor + '30'
                                 }}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default ClassicTemplate;