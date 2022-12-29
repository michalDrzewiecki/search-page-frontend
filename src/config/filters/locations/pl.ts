import { FilterElementTypeEnum } from '../../../enum/filter-element-type.enum';
import { FilterElementType } from '../types';
import { validatePrice, validateRamMemory } from '../validators';


const filterConfig: FilterElementType[] = [
  {
    type: FilterElementTypeEnum.range,
    title: 'Cena',
    filterElementName: 'price.current',
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
      {
        displayName: 'HP',
        value: 'HP'
      },
      {
        displayName: 'Dell',
        value: 'Dell'
      },
      {
        displayName: 'Acer',
        value: 'Acer'
      },
      {
        displayName: 'ASUS',
        value: 'ASUS'
      },
      {
        displayName: 'Lenovo',
        value: 'Lenovo'
      },
      {
        displayName: 'Apple',
        value: 'Apple'
      },
      {
        displayName: 'MSI',
        value: 'MSI'
      }
    ],
    selectAllOption: true,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.select,
    title: 'Gwarancja',
    filterElementName: 'guarantee',
    options: [
      {
        displayName: 'Wybierz długość gwarancji',
        value: ''
      },
      {
        displayName: '6 miesięcy',
        value: 'months6'
      },
      {
        displayName: '12 miesięcy',
        value: 'months12'
      },
      {
        displayName: '24 miesięcy',
        value: 'months24'
      },
      {
        displayName: '36 miesięcy',
        value: 'months36'
      }
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
      {
        displayName: 'Nowy',
        value: 'new'
      },
      {
        displayName: 'Używany',
        value: 'used'
      }
    ],
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.checkbox,
    title: 'Status',
    filterElementName: 'status',
    options: [
      {
        displayName: 'Promocja',
        value: 'specialOffer'
      },
      {
        displayName: 'Nowe',
        value: 'new'
      },
      {
        displayName: 'Polecane',
        value: 'recommended'
      },
      {
        displayName: 'Ostatnie',
        value: 'last'
      }
    ],
    selectAllOption: true,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.range,
    title: 'Pamięć RAM',
    filterElementName: 'ramAmount',
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
    filterElementName: 'locations',
    options: [
      {
        displayName: 'Wybierz salon',
        value: ''
      },
      {
        displayName: 'Gdańsk',
        value: 'Gdańsk'
      },
      {
        displayName: 'Kraków',
        value: 'Kraków'
      },
      {
        displayName: 'Łódź',
        value: 'Łódź'
      },
      {
        displayName: 'Wrocław',
        value: 'Wrocław'
      }
    ],
    introText: 'Wybierz lokację',
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.checkbox,
    title: 'Procesor',
    filterElementName: 'processor',
    options: [
      {
        displayName: 'Intel Core i3',
        value: 'Intel Core i3'
      },
      {
        displayName: 'Intel Core i5',
        value: 'Intel Core i5'
      },
      {
        displayName: 'Intel Core i7',
        value: 'Intel Core i7'
      },
      {
        displayName: 'Intel Pentium',
        value: 'Intel Pentium'
      },
    ],
    isHidden: true
  },
]

export default filterConfig;
