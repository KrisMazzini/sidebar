import React from 'react'
import './styles.css'

import { Sidebar } from '../../components/Sidebar'
import { Profile } from '../../components/Profile'

export function Home() {
    return (
        <div className="container">
            <Sidebar />
            <main><h1>Dashboard</h1></main>
        </div>
    )
}