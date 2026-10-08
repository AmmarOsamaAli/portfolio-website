export default function SectionHeader({ label, title, children }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{label}</p>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}
