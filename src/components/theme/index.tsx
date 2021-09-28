import React from 'react';
import PropTypes from 'prop-types';
import SG_COLORS from './colors';
import SG_SIZES from './sizes';

const SGTheme = {
    COLORS: SG_COLORS,
    SIZES: SG_SIZES
};

export default SGTheme;

const SGThemeContext = React.createContext({});

export function useSGTheme() {
    const theme = React.useContext(SGThemeContext);

    if (theme === undefined) {
        throw new Error(
            'useSGTheme must be used within a component wrapped under SGThemeProvider'
        );
    }

    return theme;
}

interface PrivateProps<T> {
    forwardedRef?: React.RefObject<T>;
}

export function withSGTheme<P extends object, S extends object>(Component: any, styles: any) {
    class EnhancedComponent extends React.Component<PrivateProps<any>, any> {
        render() {
            const { forwardedRef, ...rest } = this.props;
            return (
                <SGThemeContext.Consumer>
                    {theme => (
                        <Component
                            ref={forwardedRef}
                            {...rest}
                            theme={{ ...SGTheme, ...theme }}
                            styles={styles && styles({ ...SGTheme, ...theme })}
                        />
                    )}
                </SGThemeContext.Consumer>
            );
        }
    }

    return React.forwardRef((props, ref: any) => {
        return <EnhancedComponent forwardedRef={ref} {...props} />;
    });
}

export type ThemeProps = {
    children: any,
    theme: any,
}

export class SGThemeProvider extends React.Component<ThemeProps, {}> {
    static defaultProps = {
        children: null,
        theme: {},
    };

    render() {
        const { theme, children } = this.props;
        const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;

        const providerTheme = {
            COLORS: { ...SGTheme.COLORS, ...CUSTOM_COLORS },
            SIZES: { ...SGTheme.SIZES, ...CUSTOM_SIZES },
            ...customTheme,
        };

        return <SGThemeContext.Provider value={providerTheme}>{children}</SGThemeContext.Provider>;
    }
}



