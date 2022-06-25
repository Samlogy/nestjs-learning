export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  createdAt: Date;
  editedAt: Date;
}

export const data: IProduct[] = [
  {
    id: 'uuid1',
    name: 'Sun glasses',
    price: 7500,
    description: 'Sun glasses description ...',
    imgUrl: '',
    createdAt: new Date(),
    editedAt: new Date(),
  },
  {
    id: 'uuid2',
    name: 'solar cream',
    price: 7500,
    description: 'Solar cream description ...',
    imgUrl: '',
    createdAt: new Date(),
    editedAt: new Date(),
  },
  {
    id: 'uuid3',
    name: 'cap',
    price: 7500,
    description: 'cap description ...',
    imgUrl: '',
    createdAt: new Date(),
    editedAt: new Date(),
  },
];
