export interface UsersWithoutId {
  name: string;
  surname: string;
  age: number;
  sex: string;
  occupation: string;
  isFriend: boolean;
  imageUrl: string;
}

export interface Users extends UsersWithoutId {
  id: number;
}
