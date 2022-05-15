import React from "react";
import sizes from "../../utils/sizes";
import weights from "../../utils/weights";

export interface TypographyProps {
    size?: keyof typeof sizes;
    weight?: keyof typeof weights;
    children?: React.ReactNode
}