import { AuthButtomServer } from "../components/auth-buttom-server";

export default function Login() {
    return (
        <section className="grid place-content-center min-h-screen">
            <h1 className="text-xl font-bold">Sign in on Twitter clone</h1>
            <AuthButtomServer />
        </section>
    )
}