import { InterpolationFunction, SimpleInterpolation } from 'styled-components';

import { isString, isFunction, isObject } from '@/types';
import {
  TComponentProps,
  TModifierKeys,
  TModifierName,
  TModifierNames,
  IModifiersConfig,
  TModifiersProp,
  IModifierObjValue,
} from './styles.types';

const isModifierObjValue = (val: unknown): val is IModifierObjValue =>
  isObject(val) && !!val.styles;

const normalizeModifiers = (modifierKeys: TModifierKeys): TModifierNames => {
  return (Array.isArray(modifierKeys) ? modifierKeys : [modifierKeys]).filter(
    (i) => isString(i) && !!i
  );
};

const modifiedStyles = (
  modifierKeys: TModifierKeys = [],
  modifierConfig: IModifiersConfig = {},
  componentProps: TComponentProps
): SimpleInterpolation => {
  const stylesArr = normalizeModifiers(modifierKeys).reduce(
    (
      acc: SimpleInterpolation[],
      modifierName: TModifierName
    ): SimpleInterpolation[] => {
      const modifierConfigValue = modifierConfig[modifierName];

      if (isFunction(modifierConfigValue)) {
        const config = modifierConfigValue(componentProps);

        const styles = isModifierObjValue(config) ? config.styles : config;

        return Array.isArray(styles)
          ? acc.concat((styles as SimpleInterpolation[]).join(''))
          : acc.concat(styles);
      }

      return acc;
    },
    []
  );

  return stylesArr.join(' ');
};

const applyStyleModifiers = (
  modifiersConfig: IModifiersConfig,
  modifiersPropName = 'modifiers'
): InterpolationFunction<TComponentProps> => {
  return (
    props: TComponentProps & {
      [modifiersPropName: string]: TModifiersProp<IModifiersConfig>;
    }
  ): SimpleInterpolation => {
    const modifiers = props[
      modifiersPropName
    ] as TModifiersProp<IModifiersConfig>;

    return modifiedStyles(modifiers as TModifierKeys, modifiersConfig, props);
  };
};

export { applyStyleModifiers };
