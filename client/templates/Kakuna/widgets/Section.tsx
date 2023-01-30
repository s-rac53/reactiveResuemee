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

import BadgeDisplay from './BadgeDisplay';
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
    <section id={`Kakuna_${sectionId}`}>
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
            date:string = get(item, 'date', '');

          return (
            <div key={id} id={id} className="grid gap-1">
              {title && <span className="font-bold"><Markdown>{title}</Markdown></span>}

              {subtitle && <span className="opacity-75"><Markdown>{subtitle}</Markdown></span>}

              {headline && <span className="opacity-75"><Markdown>{headline}</Markdown></span>}


              {date && <div className="opacity-50"><Markdown>{date}</Markdown></div>}

              {summary && <Markdown>{summary}</Markdown>}
              {about && <Markdown>{about}</Markdown>}
              {entry && <Markdown>{entry}</Markdown>}
              {skills && <Markdown>{skills}</Markdown>}

              {url && (
                <div className="inline-flex justify-center">
                  <DataDisplay link={url}>
                    {url}
                  </DataDisplay>
                </div>
              )}

              {keywords && <BadgeDisplay items={keywords} />}

              {(phone || email) && (
                <div className="grid gap-1">
                  {phone && (
                    <div className="inline-flex items-center justify-center gap-x-2">
                      <Phone />
                      <span>{phone}</span>
                    </div>
                  )}

                  {email && (
                    <div className="inline-flex items-center justify-center gap-x-2">
                      <Email />
                      <span>{email}</span>
                    </div>
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
