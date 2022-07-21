import React from "react";
import colors from "../..//patters/colors";
import sizes from "../../patters/sizes";
import weights from "../../patters/weights";
export interface TypographyProps {
    size?: keyof typeof sizes;
    weight?: keyof typeof weights;
    children?: React.ReactNode
    color?: keyof typeof colors;
}