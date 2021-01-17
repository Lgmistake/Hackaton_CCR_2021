import { Comment } from './comment';
export class Document {
  id?: number;
  contractNumber?: string;
  title?: string;
  description?: string;
  beginDate?: Date;
  version?: number;
  endDate?: Date;
  parent?: Document;
  blocks: Document[] = [];
  order?: number;
  approve?: boolean;
  comments?: Comment[];
  publico?: boolean;

}
