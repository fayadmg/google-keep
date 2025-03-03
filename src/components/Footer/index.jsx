import "./index.css"

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <ul>
                <li>copyright © {year}</li>
                <li>phone: +222 233222</li>
                <li>email: example@any.com</li>
            </ul>
        </footer>
    );
}

export default Footer;
