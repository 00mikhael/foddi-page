import React from 'react'

interface layoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: layoutProps) => {
    return (
        <main className={`min-h-screen flex flex-col overflow-hidden`}>
            {children}
        </main>
    )
}

export default Layout
