export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  createdAt: Date;
  editedAt: Date;
}

export const products = [
  {
    id: 'uuid1',
    name: 'Sun glasses',
    price: 500,
    description: 'Sun glasses description ...',
    imgUrl: '',
    createdAt: new Date(),
    editedAt: new Date(),
  },
  {
    id: 'uuid2',
    name: 'solar cream',
    price: 20,
    description: 'Solar cream description ...',
    imgUrl: '',
    createdAt: new Date(),
    editedAt: new Date(),
  },
  {
    id: 'uuid3',
    name: 'cap',
    price: 150,
    description: 'cap description ...',
    imgUrl: '',
    createdAt: new Date(),
    editedAt: new Date(),
  },
  {
    id: 'uuid4',
    name: 'Bottle of water',
    price: 1,
    description: 'Bottle of water description ...',
    imgUrl: '',
    createdAt: new Date(),
    editedAt: new Date(),
  },
];
