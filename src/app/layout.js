import {Roboto_Mono} from "next/font/google"
import "./globals.css"
import {NextUIProvider} from "@nextui-org/react"

const inter = Roboto_Mono({subsets: ["vietnamese"]})

export default function RootLayout({children}) {
    return (
        <NextUIProvider>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </NextUIProvider>
    )
}
