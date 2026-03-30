import React, { useState } from 'react'

const CertificationsForm = ({ data = [], onChange }) => {
  const [newCertification, setNewCertification] = useState('')

  const addCertification = () => {
    const trimmed = newCertification.trim()
    if (!trimmed) return

    const exists = data.some(
      (item) => item.name?.trim().toLowerCase() === trimmed.toLowerCase()
    )

    if (exists) return

    onChange([...data, { name: trimmed }])
    setNewCertification('')
  }

  const removeCertification = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addCertification()
    }
  }

  return (
    <div className="space-y-8">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600">
              <path d="M12 15l-3.5 2 1-4-3-2.5 4-.5L12 6l1.5 4 4 .5-3 2.5 1 4z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
            <p className="text-slate-600 mt-1">Add licenses or certifications relevant to your resume</p>
          </div>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full"></div>
      </div>

      <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
        <div className="mb-6">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Add Certification</h4>
          <p className="text-slate-600">Only the name is required</p>
        </div>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Certification name"
            className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all"
            value={newCertification}
            onChange={(e) => setNewCertification(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={addCertification}
            disabled={!newCertification.trim()}
            className="px-6 py-3.5 bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
        <div className="mb-6">
          <h4 className="text-xl font-bold text-slate-900 mb-2">
            Your Certifications ({data.length})
          </h4>
          <p className="text-slate-600">Keep only relevant certifications for the role</p>
        </div>

        {data.length > 0 ? (
          <div className="space-y-3">
            {data.map((certification, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 px-4 py-3 bg-violet-50 border border-violet-200 rounded-xl"
              >
                <p className="font-medium text-slate-900">{certification.name}</p>

                <button
                  onClick={() => removeCertification(index)}
                  className="p-2 hover:bg-violet-100 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-700">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-600">
            No certifications added yet
          </div>
        )}
      </div>
    </div>
  )
}

export default CertificationsForm