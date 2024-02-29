export type VerticalCardItem = {
  categories: string[];
  description: string;
  previewImage: string;
};

export type HorizontalCardItem = {
  description: string;
  previewImage: string;
  title: string;
}

export type TertiaryCardItem = {
  previewImage: string;
  timeLeft: string;
  title: string;
  viewMoreUrl: string;
}

export enum CarouselType {
  HORIZONTAL = 'horizontal',
  TERTIARY = 'tertiary',
  VERTICAL = 'vertical',
};
