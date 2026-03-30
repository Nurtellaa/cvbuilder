import React, { useState } from 'react'

const levelOptions = [
  'Native',
  'C2',
  'C1',
  'B2',
  'B1',
  'A2',
  'A1',
]

const LanguagesForm = ({ data = [], onChange }) => {
  const [newLanguage, setNewLanguage] = useState({
    name: '',
    level: '',
  })

  const addLanguage = () => {
    const trimmedName = newLanguage.name.trim()
    const trimmedLevel = newLanguage.level.trim()

    if (!trimmedName) return

    const exists = data.some(
      (lang) => lang.name?.trim().toLowerCase() === trimmedName.toLowerCase()
    )

    if (exists) return

    onChange([
      ...data,
      {
        name: trimmedName,
        level: trimmedLevel,
      },
    ])

    setNewLanguage({ name: '', level: '' })
  }

  const removeLanguage = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addLanguage()
    }
  }

  return (
    <div className="space-y-8">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
              <path d="M5 8l6 6" />
              <path d="m4 14 6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="m22 22-5-10-5 10" />
              <path d="M14 18h6" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Languages</h3>
            <p className="text-slate-600 mt-1">Add the languages you speak and optionally your level</p>
          </div>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
      </div>

      <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
        <div className="mb-6">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Add Language</h4>
          <p className="text-slate-600">Name is required, level is optional</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <input
            type="text"
            placeholder="Language name (e.g. English)"
            className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
            value={newLanguage.name}
            onChange={(e) =>
              setNewLanguage((prev) => ({ ...prev, name: e.target.value }))
            }
            onKeyDown={handleKeyDown}
          />

          <select
            className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all bg-white"
            value={newLanguage.level}
            onChange={(e) =>
              setNewLanguage((prev) => ({ ...prev, level: e.target.value }))
            }
          >
            <option value="">Select level (optional)</option>
            {levelOptions.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={addLanguage}
          disabled={!newLanguage.name.trim()}
          className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Language
        </button>
      </div>

      <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              Your Languages ({data.length})
            </h4>
            <p className="text-slate-600">List only the ones relevant to your profile</p>
          </div>
        </div>

        {data.length > 0 ? (
          <div className="space-y-3">
            {data.map((language, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 px-4 py-3 bg-cyan-50 border border-cyan-200 rounded-xl"
              >
                <div>
                  <p className="font-medium text-slate-900">{language.name}</p>
                  {language.level && (
                    <p className="text-sm text-slate-600">{language.level}</p>
                  )}
                </div>

                <button
                  onClick={() => removeLanguage(index)}
                  className="p-2 hover:bg-cyan-100 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-700">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-600">
            No languages added yet
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguagesForm