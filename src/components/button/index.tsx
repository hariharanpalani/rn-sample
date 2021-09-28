import * as React from 'react';
import { Dimensions, PressableProps, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native';
import { useSGTheme, withSGTheme } from '../theme';
const { width } = Dimensions.get('window');

export interface ButtonProps extends TouchableWithoutFeedbackProps {
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning',
    size?: 'lg' | 'md' | 'sm' | 'xs',
    shadow?: boolean
}

const Button: React.FC<ButtonProps> = ({
    type,
    size,
    shadow,
    disabled,
    children,
    style,
    ...rest
}: ButtonProps) => {
    let content = children;
    let theme: any = useSGTheme();

    let buttonType = 'primary';
    if (type != undefined)
        buttonType = type;
    let testID = `BTN_${buttonType.toUpperCase()}_`
    const buttonStyles = [
        styles.defaultButton,
        {
            backgroundColor: theme.COLORS[buttonType.toUpperCase()],
            width: theme.SIZES.BUTTON_WIDTH,
            height: theme.SIZES.BUTTON_HEIGHT,

        }, shadow && {
            shadowColor: theme.COLORS.BLOCK,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: theme.SIZES.OPACITY,
            shadowRadius: theme.SIZES.BUTTON_SHADOW_RADIUS,
        },
        size === 'lg' ? { width: width * 0.9 } : (size === "md" ? { width: width * 0.75 } : 
                    (size === "sm" ? { width: width * 0.5 } : { width: width * 0.3 })),
    ];

    const textStyle = [styles.textStyle, {
        fontSize: theme.SIZES.FONT,
        color: (type == 'primary') ? theme.COLORS.WHITE : theme.COLORS.BLACK
    }];
    
    return (
        <TouchableOpacity style={buttonStyles} testID={testID} disabled={disabled} {...rest}>
            <Text style={textStyle}>{content}</Text>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    type: 'primary',
    size: 'lg',
    disabled: false,
    shadow: false
};

const styles = StyleSheet.create({
    defaultButton: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4
    },
    textStyle: {
        alignItems: 'center',
        alignSelf: 'center',
    }
});

export default Button;

