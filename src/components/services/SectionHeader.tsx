
import React from 'react';

interface SectionHeaderProps {
  badge: string;
  badgeColor: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ badge, badgeColor, title, subtitle }: SectionHeaderProps) => {
  const getBadgeClasses = () => {
    switch (badgeColor) {
      case 'peach':
        return 'bg-beach-peach/20 text-beach-peach';
      case 'blue':
        return 'bg-beach-blue/20 text-beach-blue';
      case 'sage-green':
        return 'bg-theme-sage-green/20 text-theme-sage-green';
      default:
        return 'bg-theme-sage-green/20 text-theme-sage-green';
    }
  };

  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className={`inline-block mb-5 ${getBadgeClasses()} px-4 py-2 rounded-full`}>
        <span className="font-medium">{badge}</span>
      </div>
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-theme-vivid-red">
        {title}
      </h2>
      {subtitle && (
        <p className="text-beach-text/90 italic">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
