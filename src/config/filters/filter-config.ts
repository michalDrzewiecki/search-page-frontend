import { FilterElementTypeEnum } from '../../enum/filter-element-type.enum';
import { FilterElementType } from './types';
import { validatePrice, validateRamMemory } from './validators';

export const filterConfig: FilterElementType[] = [
  {
    type: FilterElementTypeEnum.range,
    title: 'Cena',
    filterElementName: 'price',
    firstUnit: 'zł',
    secondUnit: 'zł',
    firstText: 'od',
    secondText: 'do',
    validation: validatePrice,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.checkbox,
    title: 'Producent',
    filterElementName: 'producer',
    options: [
      'HP',
      'Dell',
      'Acer',
      'ASUS',
      'Lenovo',
      'Apple',
      'MSI'
    ],
    selectAllOption: true,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.select,
    title: 'Gwarancja',
    filterElementName: 'guarantee',
    options: [
      '6 miesięcy',
      '12 miesięcy',
      '24 miesiące',
      '36 miesięcy'
    ],
    defaultOptionIndex: 2,
    details: 'Okres trwania gwaracnji zapewniony przez producenta',
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.radio,
    title: 'Stan',
    filterElementName: 'state',
    options: [
      'nowy',
      'używany'
    ],
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.checkbox,
    title: 'Status',
    filterElementName: 'status',
    options: [
      'Promocja',
      'Nowe',
      'Polecane',
      'Ostatnie'
    ],
    selectAllOption: true,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.range,
    title: 'Pamięć RAM',
    filterElementName: 'RAMAmount',
    firstUnit: 'GB',
    secondUnit: 'GB',
    firstText: '4',
    secondText: '128',
    validation: validateRamMemory,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.select,
    title: 'Dostępność',
    filterElementName: 'locationAvailability',
    options: [
      'Gdańsk',
      'Kraków',
      'Łódź',
      'Wrocław'
    ],
    introText: 'Wybierz lokację',
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.checkbox,
    title: 'Procesor',
    filterElementName: 'processor',
    options: [
      'Intel Core i3',
      'Intel Core i5',
      'Intel Core i7',
      'Intel Pentium'
    ],
    isHidden: true
  },
]
