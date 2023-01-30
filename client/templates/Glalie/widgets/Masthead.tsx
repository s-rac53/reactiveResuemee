import { Cake, Email, Phone, Public, Room } from '@mui/icons-material';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import Markdown from '@/components/shared/Markdown';
import { useAppSelector } from '@/store/hooks';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import getProfileIcon from '@/utils/getProfileIcon';
import { addHttp, formatLocation, getPhotoClassNames } from '@/utils/template';

export const MastheadSidebar: React.FC = () => {
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const primaryColor: string = useAppSelector((state) => get(state.resume.present, 'metadata.theme.primary'));
  const {name, photo, email, phone, birthdate, location, placeofbirth, genderandnationality, profiles} = useAppSelector(
    (state) => state.resume.present.basics
  );

  return (
    <div className="col-span-2 grid justify-items-center gap-4">
      {photo.visible && !isEmpty(photo.url) && (
        <img
          alt={name}
          src={photo.url}
          width={photo.filters.size}
          height={photo.filters.size}
          className={getPhotoClassNames(photo.filters)}
        />
      )}

      <div className="text-center">
        <h1>{name}</h1>
        <p className="mt-1 opacity-75">{headline}</p>
      </div>

      <DataDisplay className="text-xs">
         <Markdown> {birthdate} </Markdown>
        </DataDisplay>

      <DataDisplay className="text-xs">
         <Markdown> {placeofbirth} </Markdown>
        </DataDisplay>


      <div className="flex flex-col gap-2 rounded border-2 p-4" style={{ borderColor: primaryColor }}>
        <DataDisplay className="text-xs">
         <Markdown> {location} </Markdown>
        </DataDisplay>

      <DataDisplay className="text-xs" link={`tel:${phone}`}>
         <Markdown> {phone} </Markdown>
        </DataDisplay>

      <DataDisplay
          className="!gap-2 text-xs"
          link={`mailto:${email}`}
          textClassName={clsx({ invert: contrast === 'light' })}
        >
         <Markdown> {email} </Markdown>
        </DataDisplay>

      <DataDisplay className="text-xs">
         <Markdown> {genderandnationality} </Markdown>
        </DataDisplay>


        {profiles.map(({ id, username, network, url }) => (
          <DataDisplay key={id} icon={getProfileIcon(network)} link={url && addHttp(url)} className="text-xs">
            {username}
          </DataDisplay>
        ))}
      </div>
    </div>
  );
};

export const MastheadMain: React.FC = () => {
  const { summary } = useAppSelector((state) => state.resume.present.basics);

  return <Markdown>{summary}</Markdown>;
};
