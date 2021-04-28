import { Address } from './address';

export interface User {
  name: string;
  id: number;
  username?: string;
  website?: string;
  address?: Address;
}
