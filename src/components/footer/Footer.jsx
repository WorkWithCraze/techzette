import "./footer.css"
import logo from "../../assets/wwc.png"

export default function Footer() {
    return (
        <footer>
            <section>
                <div>
                    <a href=""><img src={logo}/></a>
                    <span>
                        <a href="#"><h1>TECHZETTE</h1></a>
                        <a href="#"><h3>By WorkWithCraze</h3></a>
                    </span>
                </div>
                <div>
                    <h2>Latest Blogs</h2>
                    <ul>
                        <a href="#"><li>Lorem Ipsum 1</li></a>
                        <a href="#"><li>Lorem Ipsum 2</li></a>
                        <a href="#"><li>Lorem Ipsum 3</li></a>
                    </ul>
                </div>
                <div>
                    <h2>Follow us on</h2>
                    <ul>
                        <a href=""><li>Instagram</li></a>
                        <a href=""><li>Twitter</li></a>
                        <a href=""><li>Linkedin</li></a>
                    </ul>
                </div>
            </section>
            <section>
                <h5>No Copyright© or Reservations <a href="#">Techzette.com</a> | <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></h5>
            </section>
        </footer>
    )
}