import { find } from 'lodash';
import get from 'lodash/get';
import React from 'react';
import { validate } from 'uuid';

export type SectionProps = {
  path: string;
  titlePath?: string | string[];
  subtitlePath?: string | string[];
  headlinePath?: string | string[];
  keywordsPath?: string;
};

const sectionMap = (Section: React.FC<SectionProps>): Record<string, JSX.Element> => ({
  work: <Section key="work" path="sections.work" titlePath="name" subtitlePath="position" />,
  
 });
console.log(sectionMap)
export const getSectionById = (id: string, Section: React.FC<SectionProps>): JSX.Element => {
  // Check if section id is a custom section (an uuid)
  if (validate(id)) {
    return <Section key={id} path={`sections.${id}`} />;
  }

  // Check if section id is a predefined seciton in config
  const predefinedSection = get(sectionMap(Section), id);

  if (predefinedSection) {
    return predefinedSection;
  }
  console.log(`sections.${id}`)
  // Other ways section should be a cloned section
  const section = find(sectionMap(Section), (element, key) => id.includes(key));
  return React.cloneElement(section!, { path: `sections.${id}` });
};

export default sectionMap;
