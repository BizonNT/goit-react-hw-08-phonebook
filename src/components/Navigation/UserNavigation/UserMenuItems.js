import { nanoid } from "nanoid";

const userMenuItems = [
  {
    id: nanoid(),
    to: '/',
    title: 'Main',
    private: false,
  },
  {
    id: nanoid(),
    to: '/contacts',
    title: 'Contacts',
    private: true,
  },
  {
    id: nanoid(),
    to: '/add',
    title: 'Add Contact',
    private: true,
  },
];
export default userMenuItems;