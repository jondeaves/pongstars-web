import IChangelogItem from './IChangelogItem';

export default interface IChangelogItems {
  date: string;
  items: IChangelogItem[];
}
