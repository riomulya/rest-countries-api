"use client"
import { motion } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <nav className="font-bold text-xl bg-darkGray">
                Where in the world?
            </nav>
            {children}
        </ motion.main>
    )
}