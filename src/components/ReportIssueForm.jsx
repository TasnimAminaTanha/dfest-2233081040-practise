import { useState } from 'react'

const EMPTY_FORM = {
  studentName: '',
  issueTitle: '',
  category: '',
  description: '',
  priority: '',
}

const CATEGORIES = ['Classroom', 'Lab', 'Library', 'Transport', 'Cleanliness', 'Other']
const PRIORITIES = ['Low', 'Medium', 'High']

function FormField({ label, required, error, children }) {
  return (
    <div className="form-field">
      <label className="form-field__label">
        {label}
        {required && <span className="form-field__required" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span className="form-field__error" role="alert">{error}</span>}
    </div>
  )
}

function ReportIssueForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function validate() {
    const newErrors = {}
    if (!form.studentName.trim())  newErrors.studentName  = 'Student name is required.'
    if (!form.issueTitle.trim())   newErrors.issueTitle   = 'Issue title is required.'
    if (!form.category)            newErrors.category     = 'Please select a category.'
    if (!form.description.trim())  newErrors.description  = 'Description is required.'
    if (!form.priority)            newErrors.priority     = 'Please select a priority.'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    // Submission successful — reset form and show success message
    setForm(EMPTY_FORM)
    setErrors({})
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="report-section">
      <div className="report-section__header">
        <h2 className="report-section__heading">Report an Issue</h2>
        <p className="report-section__subtitle">
          Fill in the form below to report a campus issue. All fields are required.
        </p>
      </div>

      <div className="report-card">
        {submitted && (
          <div className="success-message" role="status">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Issue reported successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <FormField label="Student Name" required error={errors.studentName}>
              <input
                className={`form-input ${errors.studentName ? 'form-input--error' : ''}`}
                type="text"
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </FormField>

            <FormField label="Issue Title" required error={errors.issueTitle}>
              <input
                className={`form-input ${errors.issueTitle ? 'form-input--error' : ''}`}
                type="text"
                name="issueTitle"
                value={form.issueTitle}
                onChange={handleChange}
                placeholder="Brief title of the issue"
              />
            </FormField>

            <FormField label="Category" required error={errors.category}>
              <select
                className={`form-select ${errors.category ? 'form-input--error' : ''}`}
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </FormField>

            <FormField label="Priority" required error={errors.priority}>
              <select
                className={`form-select ${errors.priority ? 'form-input--error' : ''}`}
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option value="">Select priority</option>
                {PRIORITIES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </FormField>
          </div>

          <FormField label="Description" required error={errors.description}>
            <textarea
              className={`form-textarea ${errors.description ? 'form-input--error' : ''}`}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the issue in detail"
              rows={4}
            />
          </FormField>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Report Issue
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ReportIssueForm
