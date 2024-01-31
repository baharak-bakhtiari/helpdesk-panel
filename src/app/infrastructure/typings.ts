export interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
  icon?: string;
  active?: boolean;
}
