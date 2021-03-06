// @flow
export type Interpolation =
  | ((executionContext: Object) => Interpolation)
  | string
  | number
  | Array<Interpolation>

export type RuleSet = Array<Interpolation>

export type Styles = Array<string> | Object

/* eslint-disable no-undef */
export type Target = string | ReactClass<*>

export type NameGenerator = (hash: number) => string

export type Flattener = (
  chunks: Array<Interpolation>,
  executionContext: ?Object
) => Array<Interpolation>

export type Stringifier = (
  rules: Array<Interpolation>,
  selector: ?string,
  prefix: ?string
) => Array<string>

export type StyleSheet = {
  create: Function,
}
