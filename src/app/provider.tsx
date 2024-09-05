"use client"
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import ThemeProvider from '@/utils/ThemeContext'


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}