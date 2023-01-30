import { Cake, Email, Phone, Public, Room } from '@mui/icons-material';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { useAppSelector } from '@/store/hooks';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import getProfileIcon from '@/utils/getProfileIcon';
import { addHttp, formatLocation, getPhotoClassNames } from '@/utils/template';

const Masthead: React.FC = () => {
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const {name, photo, email, phone, birthdate, location, placeofbirth, genderandnationality, profiles } = useAppSelector(
    (state) => state.resume.present.basics
  );

  return (
    <div className="flex items-center gap-4">
      {photo.visible && !isEmpty(photo.url) && (
        <img
          alt={name}
          src={photo.url}
          width={photo.filters.size}
          height={photo.filters.size}
          className={getPhotoClassNames(photo.filters)}
        />
      )}

      <div className="grid flex-1 gap-1">
        <h1>{name}</h1>

       <div className="flex items-center gap-2">
            <DataDisplay className="text-xs">
             <Markdown> {birthdate} </Markdown>
            </DataDisplay>

        <div className="flex items-center gap-2">
            <DataDisplay className="text-xs">
             <Markdown> {placeofbirth} </Markdown>
            </DataDisplay> 

        <div className="mt-2 grid gap-2">
          <DataDisplay className="text-xs">
           <Markdown> {location}</Markdown>
          </DataDisplay>

        <DataDisplay className="text-xs" link={`tel:${phone}`}>
             <Markdown> {phone} </Markdown>
            </DataDisplay>



            <DataDisplay icon={<Email />} className="text-xs" link={`mailto:${email}`}>
              <Markdown>{email}</Markdown>
            </DataDisplay>

            <DataDisplay className="text-xs">
              {genderandnationality}
            </DataDisplay>
          </div>
        </div>
      </div>


        {profiles.map(({ id, username, network, url }) => (
          <DataDisplay key={id} icon={getProfileIcon(network)} link={url && addHttp(url)} className="text-xs">
            {username}
          </DataDisplay>
        ))}
      </div>
    </div>
  );
};

export default Masthead;
