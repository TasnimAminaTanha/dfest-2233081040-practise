import Header from './components/Header'
import Dashboard from './components/Dashboard'
import ReportIssueForm from './components/ReportIssueForm'
import './App.css'
import './components/Dashboard.css'
import './components/ReportIssueForm.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Dashboard />
        <div className="section-gap" />
        <ReportIssueForm />
      </main>
    </div>
  )
}

export default App
