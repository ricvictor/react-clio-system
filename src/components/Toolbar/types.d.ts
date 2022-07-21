import React from "react";

export interface ToolbarProps {
    logo: React.ReactNode
    headerItens?: React.ReactNode
    branchName?: string
    version?: string
    theme?: string
}