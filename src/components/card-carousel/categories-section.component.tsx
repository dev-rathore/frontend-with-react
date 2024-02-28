import React from "react";

type CategoriesSectionProps = {
  categories: string[];
};

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
}) => (
  <div className="pt-5 pb-3 text-sm font-semibold">
    {categories.join(' • ')}
  </div>
);

export default CategoriesSection;
