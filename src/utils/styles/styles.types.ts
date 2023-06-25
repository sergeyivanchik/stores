import { SimpleInterpolation, StyledProps } from 'styled-components';

type TModifierName = string;
type TModifierNames = TModifierName[];

type TModifierKeys = TModifierNames | TModifierName;

type TModifiersProp<MC> = keyof MC | (keyof MC)[];

// eslint-disable-next-line
type TComponentProps = StyledProps<any>;

interface IModifierObjValue {
  styles: SimpleInterpolation;
}

type TModifierConfigValue = (props: TComponentProps) => SimpleInterpolation;

interface IModifiersConfig {
  [key: string]: TModifierConfigValue;
}

export {
  IModifiersConfig,
  TComponentProps,
  TModifierKeys,
  TModifiersProp,
  TModifierName,
  TModifierNames,
  IModifierObjValue,
};
