import { Cake, Email, Phone, Public, Room } from '@mui/icons-material';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

import { useAppSelector } from '@/store/hooks';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import getProfileIcon from '@/utils/getProfileIcon';
import { addHttp, formatLocation, getPhotoClassNames } from '@/utils/template';

const Masthead = () => {
  const dateFormat: string = useAppSelector((state) => get(state.resume.present, 'metadata.date.format'));
  const {name, photo, email, phone, birthdate, location, placeofbirth, genderandnationality, profiles } = useAppSelector(
    (state) => state.resume.present.basics
  );

  return (
    <div className="mb-4 grid justify-center gap-3 border-b pb-4 text-center">
      <div className="mx-auto">
        {photo.visible && !isEmpty(photo.url) && (
          <img
            alt={name}
            src={photo.url}
            width={photo.filters.size}
            height={photo.filters.size}
            className={getPhotoClassNames(photo.filters)}
          />
        )}
      </div>

      <div>
        <h1 className="mb-1">{name}</h1>
        
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <DataDisplay>{birthdate}</DataDisplay>

        <DataDisplay>{placeofbirth}</DataDisplay>

        <DataDisplay>{location}</DataDisplay>


        <DataDisplay link={`mailto:${email}`}>
          {email}
        </DataDisplay>

        <DataDisplay link={`tel:${phone}`}>
          {phone}
        </DataDisplay>


        <DataDisplay>{genderandnationality}</DataDisplay>



        {profiles.map(({ id, username, network, url }) => (
          <DataDisplay key={id} link={url && addHttp(url)}>
            {username}
          </DataDisplay>
        ))}
      </div>
    </div>
  );
};

export default Masthead;
