export const CurrentUser = {
  id: '081ccaa1-5595-4621-8074-ede4927e67b0',
  name: 'Binh An',
  avatarUrl:
    'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405731/spiderman_zlrtx0.jpg',
  createdAt: '2020-06-16T16:00:00.000Z',
  updatedAt: '2020-06-16T16:00:00.000Z',
};

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}
