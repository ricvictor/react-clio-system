export type VariantProps = 'outlined' | 'text' | 'contained';
export type AlertProps = "success" | "error" | "warning" | "successLigth" | "errorLigth" | "warningLigth"

export interface ChipsProps {
    label: string;
    variant?: VariantProps;
    alert?: AlertProps;
    onClose?: () => void;
}

