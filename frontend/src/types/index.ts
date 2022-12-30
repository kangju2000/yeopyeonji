export interface ITemplate {
  id: number;
  name: string;
  path: string;
  title?: string;
  lists?: ITemplate[];
}
