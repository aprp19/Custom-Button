import {Box, Button, Tooltip} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface CustomButtonProps {
    variant?: 'text' | 'outlined' | 'contained';
    backgroundColor?: 'success' | 'error' | 'warning' | 'info' | 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    iconSrc?: string;
    iconPosition?: 'left' | 'right';
    enableTooltip?: boolean;
    tooltipText?: string;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    sx?: SxProps<Theme>;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const CustomButton = ({
                                 variant,
                                 backgroundColor,
                                 size,
                                 iconSrc,
                                 iconPosition = 'left',
                                 enableTooltip = false,
                                 tooltipText = '',
                                 tooltipPosition = 'top',
                                 sx,
                                 children,
                                 onClick,
                             }: CustomButtonProps) => {
    const buttonContent = (
        <Button
            onClick={onClick}
            size={size}
            variant={variant}
            color={backgroundColor}
            sx={{
                ...sx,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
            }}
        >
            {iconSrc && <Box component={'img'} src={iconSrc} alt="button icon" sx={{ width: '1rem'}} />}
            {children}
        </Button>
    );

    return enableTooltip ? (
        <Tooltip title={tooltipText} placement={tooltipPosition}>
            {buttonContent}
        </Tooltip>
    ) : buttonContent;
};
