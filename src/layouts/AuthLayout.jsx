import { Outlet } from "react-router-dom"

export default function AuthLayout() {
    return (
        <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">
            <img
                src="../img/logo.png"
                alt="logo"
                className="max-w-xs mx-auto mb-4"
            />

            <div className="p-10 w-full">
                <Outlet />
            </div>
        </main>
    )
}