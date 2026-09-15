import { ElementType } from 'react';

export interface linkItems {
  id: number;
  title: string;

  href?: string;
}

export interface menuItems extends linkItems {
  icon: ElementType;
  subItems?: Items[];
}
