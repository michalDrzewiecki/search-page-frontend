export interface CategoryTitlePropsInterface {
  displayName: string;
  isActive: boolean;
  handleTitleClick: (displayName: string) => void;
  count?: number;
}
