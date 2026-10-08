import { site } from '../../data/site.js'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="wordmark">{site.name}.</span>
        <p className="copyright">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
