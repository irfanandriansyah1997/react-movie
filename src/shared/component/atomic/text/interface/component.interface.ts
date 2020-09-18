import { HTMLAttributes } from 'react';
import { Property } from 'csstype';

/**
 * Text Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
export type TextPropsInterace = HTMLAttributes<
    HTMLHeadingElement
> &
    BasePropsInterface;

/**
 * Base Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
interface BasePropsInterface {
    color?: string;
    align?: Property.TextAlign;
    styling?: ComponentStylingTypography;
    fontWeight?: ComponentFontWeightTypography;
}

/**
 * Type component for styling
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.18
 */
export type ComponentStylingTypography =
    | 'heading'
    | 'default'
    | 'caption';

/**
 * Type component for font weight type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
export type ComponentFontWeightTypography =
    | 300
    | 400
    | 500
    | 600
    | 700;
