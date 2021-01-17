import { Document } from './Document';
export class Block {
  id?: number;
  blockNumber?: string;
  title?: string;
  description?: string;
  type?: string;
  create?: Date;
  approve?: boolean;
  document?: Document;
}
