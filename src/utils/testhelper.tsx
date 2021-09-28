import React, { JSXElementConstructor } from 'react';
import {
    render
} from '@testing-library/react-native';
import { SGThemeProvider } from '../components/theme';

export const renderWithWrapper = (
    children: React.ReactElement<any, string | JSXElementConstructor<any>>,
    wrapperTestID: string,
    themeProp = {},
) => {
    const renderer = render(
        (
            <SGThemeProvider theme={themeProp}>
                {children}
            </SGThemeProvider>
        )
    )

    const wrapper = renderer.queryByTestId(wrapperTestID);
    return { wrapper, ...renderer };
};
