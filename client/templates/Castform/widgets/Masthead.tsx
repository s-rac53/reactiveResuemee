import { css } from '@emotion/css';
import { Cake, Email, Phone, Public, Room } from '@mui/icons-material';
import { ThemeConfig } from '@reactive-resume/schema';
import clsx from 'clsx';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { useMemo } from 'react';

import Markdown from '@/components/shared/Markdown';
import { useAppSelector } from '@/store/hooks';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import getProfileIcon from '@/utils/getProfileIcon';
import { getContrastColor } from '@/utils/styles';
import { addHttp, formatLocation, getPhotoClassNames } from '@/utils/template';

export const MastheadSidebar: React.FC = () => {
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const { name, photo, email, phone, birthdate, location, placeofbirth, genderandnationality, profiles } = useAppSelector(
    (state) => state.resume.present.basics
  );
  const theme: ThemeConfig = useAppSelector((state) => get(state.resume.present, 'metadata.theme', {} as ThemeConfig));
  const contrast = useMemo(() => getContrastColor(theme.primary), [theme.primary]);
  const color = useMemo(() => (contrast === 'dark' ? theme.text : theme.background), [theme, contrast]);

  return (
    <div className="col-span-2 grid justify-items-start gap-3 px-4 pt-4">
      {photo.visible && !isEmpty(photo.url) && (
        <img
          alt={name}
          src={photo.url}
          width={photo.filters.size}
          height={photo.filters.size}
          className={getPhotoClassNames(photo.filters)}
        />
      )}

      <div className={clsx({ invert: contrast === 'light' })}>
        <h1 className="mb-1">{name}</h1>
      </div>

      <DataDisplay className="!gap-2 text-xs" textClassName={clsx({ invert: contrast === 'light' })}>
         <Markdown> {birthdate} </Markdown>
        </DataDisplay>

      <DataDisplay className="!gap-2 text-xs" textClassName={clsx({ invert: contrast === 'light' })}>
         <Markdown> {placeofbirth} </Markdown>
        </DataDisplay>
 
      <div className={clsx('flex flex-col gap-2.5', css(`svg { color: ${color} }`))}>
        <DataDisplay className="!gap-2 text-xs" textClassName={clsx({ invert: contrast === 'light' })}>
         <Markdown> {location} </Markdown>
        </DataDisplay>

        <DataDisplay
          className="!gap-2 text-xs"
          link={`tel:${phone}`}
          textClassName={clsx({ invert: contrast === 'light' })}
        >
         <Markdown> {phone} </Markdown>
        </DataDisplay>
       
        <DataDisplay
          className="!gap-2 text-xs"
          link={`mailto:${email}`}
          textClassName={clsx({ invert: contrast === 'light' })}
        >
         <Markdown> {email} </Markdown>
        </DataDisplay>

         <DataDisplay className="!gap-2 text-xs" textClassName={clsx({ invert: contrast === 'light' })}>
         <Markdown> {genderandnationality} </Markdown>
        </DataDisplay>


       

        {profiles.map(({ id, username, network, url }) => (
          <DataDisplay
            key={id}
            icon={getProfileIcon(network)}
            link={url && addHttp(url)}
            className="!gap-2 text-xs"
            textClassName={clsx({ invert: contrast === 'light' })}
          >
            {username}
          </DataDisplay>
        ))}
      </div>
    </div>
  );
};


