import Header from "../components/Header"
import Footer from "../components/Footer"
import classes from "./Error.module.scss"
import { Link } from "react-router-dom"
const ErrorPage = () => {
return <div className={classes.Wrapper}>
    <div className={classes.Header}>
    <Header />

    </div>
    <main className={classes.Content}>
        <h1 className={classes.Error}>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retournez sur la page d'accueil</Link>
    </main>
    <Footer />
</div>
}

export default ErrorPage