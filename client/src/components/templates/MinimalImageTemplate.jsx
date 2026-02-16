import { Mail, Phone, MapPin, Palette, Briefcase, GraduationCap, Code, Sparkles } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    return (
        <div className="max-w-5xl mx-auto bg-white text-zinc-800">
            <div className="grid grid-cols-3">
                {/* Left Column - Profile & Contact */}
                <div className="col-span-1 py-8 px-6 border-r border-zinc-300">
                    {/* Profile Image */}
                    {data.personal_info?.image ? (
                        <div className="mb-8">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-zinc-200">
                                <img 
                                    src={typeof data.personal_info.image === 'string' 
                                        ? data.personal_info.image 
                                        : URL.createObjectURL(data.personal_info.image)} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="mb-8">
                            <div className="w-32 h-32 mx-auto rounded-full bg-zinc-100 border-2 border-zinc-200 flex items-center justify-center">
                                <Palette className="size-10 text-zinc-400" />
                            </div>
                        </div>
                    )}

                    {/* Contact Section */}
                    <section className="mb-8">
                        <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-4">
                            CONTACT
                        </h2>
                        <div className="space-y-3 text-sm">
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2">
                                    <Mail size={14} style={{ color: accentColor }} />
                                    <span className="break-all">{data.personal_info.email}</span>
                                </div>
                            )}
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone size={14} style={{ color: accentColor }} />
                                    <span>{data.personal_info.phone}</span>
                                </div>
                            )}
                            {data.personal_info?.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} style={{ color: accentColor }} />
                                    <span>{data.personal_info.location}</span>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Education */}
                    {data.education && data.education.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-4">
                                EDUCATION
                            </h2>
                            <div className="space-y-4 text-sm">
                                {data.education.map((edu, index) => (
                                    <div key={index}>
                                        <p className="font-medium text-zinc-800">{edu.degree}</p>
                                        <p className="text-zinc-600">{edu.institution}</p>
                                        <p className="text-xs text-zinc-500 mt-1">
                                            {formatDate(edu.graduation_date)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-4">
                                SKILLS
                            </h2>
                            <ul className="space-y-2 text-sm">
                                {data.skills.map((skill, index) => (
                                    <li key={index} className="flex items-center">
                                        <div className="size-1.5 rounded-full mr-2" 
                                             style={{ backgroundColor: accentColor }}></div>
                                        <span className="text-zinc-700">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                {/* Right Column - Main Content */}
                <main className="col-span-2 p-8">
                    {/* Name & Title */}
                    <div className="mb-8 pb-6 border-b border-zinc-300">
                        <h1 className="text-3xl font-bold text-zinc-800 mb-2">
                            {data.personal_info?.full_name || "Your Name"}
                        </h1>
                        <p className="text-lg font-medium text-zinc-600">
                            {data?.personal_info?.profession || "Creative Professional"}
                        </p>
                    </div>

                    {/* Summary */}
                    {data.professional_summary && (
                        <section className="mb-8">
                            <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }}>
                                PROFILE
                            </h2>
                            <p className="text-zinc-700 leading-relaxed text-sm">
                                {data.professional_summary}
                            </p>
                        </section>
                    )}

                    {/* Experience */}
                    {data.experience && data.experience.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-sm font-semibold tracking-widest mb-4" style={{ color: accentColor }}>
                                WORK EXPERIENCE
                            </h2>
                            <div className="space-y-6">
                                {data.experience.map((exp, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-semibold text-zinc-900">
                                                    {exp.position}
                                                </h3>
                                                <p className="text-sm mb-1" style={{ color: accentColor }}>
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className="text-xs text-zinc-500">
                                                {formatDate(exp.start_date)} -{" "}
                                                {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                            </span>
                                        </div>
                                        {exp.description && (
                                            <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1 pl-4">
                                                {exp.description.split("\n").map((line, i) => (
                                                    <li key={i}>{line}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {data.project && data.project.length > 0 && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest mb-4" style={{ color: accentColor }}>
                                FEATURED PROJECTS
                            </h2>
                            <div className="space-y-4">
                                {data.project.map((project, index) => (
                                    <div key={index} className="pb-4 border-b border-zinc-200 last:border-b-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-medium text-zinc-800">{project.name}</h3>
                                            {project.type && (
                                                <span className="text-xs text-zinc-500">{project.type}</span>
                                            )}
                                        </div>
                                        
                                        {project.technologies && (
                                            <p className="text-xs text-zinc-600 mb-2">
                                                <span className="font-medium">Tech:</span> {project.technologies}
                                            </p>
                                        )}
                                        
                                        {project.description && (
                                            <p className="text-sm text-zinc-700 mb-2">
                                                {project.description}
                                            </p>
                                        )}
                                        
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-xs flex items-center gap-1"
                                                style={{ color: accentColor }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                                </svg>
                                                View
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}

export default MinimalImageTemplate;