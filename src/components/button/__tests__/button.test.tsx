import { fireEvent, RenderAPI } from '@testing-library/react-native';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import renderer from 'react-test-renderer';
import { renderWithWrapper } from '../../../utils/testhelper';
import Button from '../index';
import COLORS from '../../theme/colors';

jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
    return {
        get: jest.fn(() => { return {height: 100, width: 100 };})
    };
});

describe('Test for Button Component', () => {
    it('should match snapshot', () => {
        //Arrange
        const { queryByText, wrapper } = renderWithWrapper(
            <Button type="primary">Primary Button</Button>,
            'BTN_PRIMARY_'
        );
        
        //Act

        //Assertion
        expect(wrapper).not.toBeNull();
        expect(queryByText('Primary Button')).toBeTruthy();
    });

    it('verify disabled property works', () => {
        //Arrange
        let pressHandler = jest.fn();
        const { getByTestId, wrapper } = renderWithWrapper(
            <Button type="primary" disabled={true} onPress={pressHandler}>Primary Button</Button>,
            'BTN_PRIMARY_'
        );

        //Act
        fireEvent.press(getByTestId('BTN_PRIMARY_'));
        
        //Assertion
        expect(pressHandler).toHaveBeenCalledTimes(0);
    });

    describe('Validate button properties', () => {
        let pressHandler: jest.Mock<any, any> | ((event: GestureResponderEvent) => void) | null | undefined;
        let getByTestId: (arg0: string) => renderer.ReactTestInstance;
        let wrapper: renderer.ReactTestInstance | null;

        beforeEach(() => {
            pressHandler = jest.fn();
            ({ wrapper, getByTestId } = renderWithWrapper(
                <Button type="secondary" onPress= {pressHandler}>Secondary Button</Button>,
                'BTN_SECONDARY_'
            ));
            fireEvent.press(getByTestId('BTN_SECONDARY_'));
        });

        it('calls press handler', () => {
            expect(wrapper?.props.testID).toEqual('BTN_SECONDARY_');
            expect(pressHandler).toHaveBeenCalled();
        });

        it('Check for properties', () => {
            let componentInstance = getByTestId('BTN_SECONDARY_');
            expect(componentInstance.props.style.backgroundColor).toEqual(COLORS.SECONDARY);
            expect(componentInstance.props.style.width).toEqual(90);
        });

    });
});
