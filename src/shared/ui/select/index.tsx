import { ChangeEvent } from 'react';
import cl from './styles.module.scss';

type Allowed = string | number;

interface BaseProps<Value> {
  value: Value
  defaultValue: string
  onChange: (newValue: Value) => void
  options: readonly Value[]
  mapOptionToLabel?: (option: Value) => Allowed
  mapOptionToValue?: (option: Value) => Allowed
}

// mappers required only in certain cirumstances
// we could get fancier here and also not require if `Value` has `value`/`label` properties
type Props<Value> = Value extends Allowed
  ? BaseProps<Value>
  : Required<BaseProps<Value>>;

// type guard function checks value and refines type
const isAllowed = (v: any): v is Allowed =>
  typeof v === 'string' || typeof v === 'number';

export function Select<Value> ({
  value,
  defaultValue,
  onChange,
  options,
  mapOptionToLabel,
  mapOptionToValue
}: Props<Value>) {
  const toLabel = (option: Value): Allowed => {
    if (mapOptionToLabel) {
      return mapOptionToLabel(option);
    }
    // if our props are provided correctly, this should never be false
    return isAllowed(option) ? option : String(option);
  };

  const toValue = (option: Value): Allowed => {
    if (mapOptionToValue) {
      return mapOptionToValue(option);
    }
    return isAllowed(option) ? option : String(option);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(options[e.target.selectedIndex]);
  };
  return (
    <select value={toValue(value)} onChange={handleChange} className={cl.select}>
      <option disabled>{defaultValue}</option>
      {options.map((value) => (
        <option value={toValue(value)} key={toValue(value)}>
          {toLabel(value)}
        </option>
      ))}
    </select>
  );
};

export default Select;
