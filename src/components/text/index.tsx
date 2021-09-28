import React, { Children } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { useSGTheme } from '../theme';

export interface ITextProps {
    children?: any;
    style?: any;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    p?: boolean;
    bold?: boolean;
    italic?: boolean;
    center?: boolean;
    styles?: any;
    color?: string;
    muted?: boolean;
}

const Typography: React.FC<ITextProps> = (props: ITextProps) => {
    let theme: any = useSGTheme();
    console.log
    return (
        <Text style={[
            props.h1 && { fontSize: 44 },
            props.h2 && { fontSize: 38 },
            props.h3 && { fontSize: 30 },
            props.h4 && { fontSize: 24 },
            props.h5 && { fontSize: 21 },
            props.h6 && { fontSize: 18 },
            props.p && { fontSize: 16 },
            props.italic && { fontStyle: 'italic' },
            props.center && { textAlign: 'center' },
            props.bold && { fontWeight: 'bold' },
            props.color && { color: props.color },
            props.styles && props.styles,
            props.muted && { color: theme.COLORS.MUTED }
        ]}>
            {props.children}
        </Text>
    );
}

export default Typography;