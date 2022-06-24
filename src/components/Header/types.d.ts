import React from "react";

export interface HeaderProps {
    logo: React.ReactNode
    headerItens?: React.ReactNode
    branchName?: string
    version?: string
    theme?: string
}