import { FilterElementTypeEnum } from '../../../enum/filter-element-type.enum';
import { FilterElementType } from '../types';
import { validatePrice, validateRamMemory } from '../validators';

const filterConfig: FilterElementType[] = [
  {
    type: FilterElementTypeEnum.range,
    title: 'Price',
    filterElementName: 'price.current',
    firstUnit: 'zł',
    secondUnit: 'zł',
    firstText: 'from',
    secondText: 'to',
    validation: validatePrice,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.checkbox,
    title: 'Producer',
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
    title: 'Guarantee',
    filterElementName: 'guarantee',
    options: [
      {
        displayName: 'Select warranty period ',
        value: ''
      },
      {
        displayName: '6 months',
        value: 'months6'
      },
      {
        displayName: '12 months',
        value: 'months12'
      },
      {
        displayName: '24 months',
        value: 'months24'
      },
      {
        displayName: '36 months',
        value: 'months36'
      }
    ],
    defaultOptionIndex: 2,
    details: 'Warranty period from producer',
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.radio,
    title: 'State',
    filterElementName: 'state',
    options: [
      {
        displayName: 'New',
        value: 'new'
      },
      {
        displayName: 'Used',
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
        displayName: 'Special Offer',
        value: 'specialOffer'
      },
      {
        displayName: 'New',
        value: 'new'
      },
      {
        displayName: 'Recommended',
        value: 'recommended'
      },
      {
        displayName: 'Lastly added',
        value: 'last'
      }
    ],
    selectAllOption: true,
    isHidden: false
  },
  {
    type: FilterElementTypeEnum.range,
    title: 'RAM',
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
    title: 'Availability',
    filterElementName: 'locations',
    options: [
      {
        displayName: 'Select location',
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
    title: 'Processor',
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
];

export default filterConfig;
