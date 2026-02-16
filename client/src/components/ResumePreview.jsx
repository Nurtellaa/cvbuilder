import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'
import ExecutiveTemplate from './templates/ExecutiveTemplate'
import TechnicalTemplate from './templates/TechnicalTemplate'

const ResumePreview = ({data, template, accentColor, classes = ""}) => {

  const renderTemplate = () => {
    switch (template) {
      case "classic":
        return <ClassicTemplate data={data} accentColor={accentColor} />;

      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;

      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;

      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;

      case "executive":
        return <ExecutiveTemplate data={data} accentColor={accentColor} />;

      case "technical":
        return <TechnicalTemplate data={data} accentColor={accentColor} />;

      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };


  return (
    <div className='w-full bg-gray-100'>
      <div id="resume-preview" className={classes}>
        {renderTemplate()}
      </div>
    </div>
  )
}

export default ResumePreview
