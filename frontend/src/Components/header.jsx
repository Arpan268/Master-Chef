import './header.css'

export default function Header() {
    const imgsrc = 'https://logowik.com/content/uploads/images/chef-restaurant5078.logowik.com.webp'
    return (
        <header className="header">
            <img src={imgsrc} alt="Chef Logo" className="logo" />
            <h2>Master Chef</h2>
        </header>
    )
}