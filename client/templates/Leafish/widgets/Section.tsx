import { Email, Link, Phone } from '@mui/icons-material';
import { ListItem, Section as SectionType } from '@reactive-resume/schema';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import { useMemo } from 'react';

import Markdown from '@/components/shared/Markdown';
import { useAppSelector } from '@/store/hooks';
import { SectionProps } from '@/templates/sectionMap';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import { parseListItemPath } from '@/utils/template';

import Heading from './Heading';

const Section: React.FC<SectionProps> = ({
  path,
  titlePath = 'title',
  subtitlePath = 'subtitle',
  headlinePath = 'headline',
  keywordsPath = 'keywords',
}) => {
  const section: SectionType = useAppSelector((state) => get(state.resume.present, path, {} as SectionType));
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const primaryColor: string = useAppSelector((state) => get(state.resume.present, 'metadata.theme.primary'));

  const sectionId = useMemo(() => section.id || path.replace('sections.', ''), [path, section]);

  if (!section.visible) return null;

  if (isArray(section.items) && isEmpty(section.items)) return null;

  return (
    <section id={`Leafish_${sectionId}`}>
      <Heading>{section.name}</Heading>

      <div
        className="grid items-start gap-4"
        style={{ gridTemplateColumns: `repeat(${section.columns}, minmax(0, 1fr))` }}
      >
        {section.items.map((item: ListItem) => {
          const id = item.id,
            title = parseListItemPath(item, titlePath),
            subtitle = parseListItemPath(item, subtitlePath),
            headline = parseListItemPath(item, headlinePath),
            keywords: string[] = get(item, keywordsPath),
            url: string = get(item, 'url', ''),
            level: string = get(item, 'level', ''),
            phone: string = get(item, 'phone', ''),
            email: string = get(item, 'email', ''),
            summary: string = get(item, 'summary', ''),
            name: string = get(item, 'name', ''),
            about: string = get(item, 'about', ''),
            score: string = get(item, 'score', ''),
            dateofpassing: string = get(item, 'dateofpassing', ''),
            skills: string = get(item, 'skills', ''),
            entry: string = get(item, 'entry', ''),
            date: string = get(item, 'date', '');

          return (
            <div key={id} className="mb-2 grid gap-1">
              <div className="grid gap-1">
                {title && <div className="font-bold"><Markdown>{title}</Markdown></div>}
                {subtitle && <div><Markdown>{subtitle}</Markdown></div>}
                {date && (
                  <div className="text-xs" style={{ color: primaryColor }}>
                    <Markdown>{date}</Markdown>
                  </div>
                )}
                {headline && <div className="opacity-50">{headline}</div>}
              </div>


              {summary && <Markdown>{summary}</Markdown>}
              {about && <Markdown>{about}</Markdown>}
              {entry && <Markdown>{entry}</Markdown>}
              {skills && <Markdown>{skills}</Markdown>}

              {url && (
                <DataDisplay link={url} className="text-xs">
                  {url}
                </DataDisplay>
              )}

              {keywords && <div>{keywords.join(', ')}</div>}

              {(phone || email) && (
                <div className="grid gap-1">
                  {phone && (
                    <DataDisplay link={`tel:${phone}`}>
                      {phone}
                    </DataDisplay>
                  )}

                  {email && (
                    <DataDisplay link={`mailto:${email}`}>
                      {email}
                    </DataDisplay>
                  )}
                
                 {name && (
                <DataDisplay>
                  <Markdown> {name} </Markdown>
                </DataDisplay>
             )}


           {score && (
                <DataDisplay>
                  <Markdown> {score} </Markdown>
                </DataDisplay>
              )}

             {dateofpassing && (
                <DataDisplay>
                 <Markdown> {dateofpassing} </Markdown>
                </DataDisplay>
              )}

                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
