import { joiResolver } from '@hookform/resolvers/joi';
import { Add, DriveFileRenameOutline } from '@mui/icons-material';
import { Button, Slider, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Custom } from '@reactive-resume/schema';
import dayjs from 'dayjs';
import Joi from 'joi';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

import ArrayInput from '@/components/shared/ArrayInput';
import BaseModal from '@/components/shared/BaseModal';
import MarkdownSupported from '@/components/shared/MarkdownSupported';
import { VALID_URL_REGEX } from '@/constants/index';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';
import { addItem, editItem } from '@/store/resume/resumeSlice';

type FormData = Custom;

export type CustomModalPayload = {
  path: string;
  item?: Custom;
};

const defaultState: FormData = {
  title: '',
  subtitle: '',
  date:'',
  url: '',
  summary: '',
  keywords: [],
};

const schema = Joi.object<FormData>().keys({
  id: Joi.string(),
  title: Joi.string().required(),
  subtitle: Joi.string().allow(''),
  date: Joi.string().allow(''),
  url: Joi.string().pattern(VALID_URL_REGEX, { name: 'valid URL' }).allow(''),
  summary: Joi.string().allow(''),
  keywords: Joi.array().items(Joi.string().optional()),
});

const CustomModal: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { open: isOpen, payload } = useAppSelector((state) => state.modal['builder.sections.custom']);

  const path: string = get(payload, 'path', 'sections.custom');
  const item: FormData = get(payload, 'item', null);
  const isEditMode = useMemo(() => !!item, [item]);

  const heading = useAppSelector((state) => get(state.resume.present, `${path}.name`));

  const addText = useMemo(() => t<string>('builder.common.actions.add', { token: heading }), [t, heading]);
  const editText = useMemo(() => t<string>('builder.common.actions.edit', { token: heading }), [t, heading]);

  const { reset, control, handleSubmit } = useForm<FormData>({
    defaultValues: defaultState,
    resolver: joiResolver(schema),
  });

  const onSubmit = (formData: FormData) => {
    if (isEditMode) {
      dispatch(editItem({ path: `${path}.items`, value: formData }));
    } else {
      dispatch(addItem({ path: `${path}.items`, value: formData }));
    }

    handleClose();
  };

  const handleClose = () => {
    dispatch(
      setModalState({
        modal: 'builder.sections.custom',
        state: { open: false },
      })
    );

    reset(defaultState);
  };

  useEffect(() => {
    if (!isEmpty(item)) {
      reset(item);
    }
  }, [item, reset]);

  return (
    <BaseModal
      icon={isEditMode ? <DriveFileRenameOutline /> : <Add />}
      isOpen={isOpen}
      handleClose={handleClose}
      heading={isEditMode ? editText : addText}
      footerChildren={<Button onClick={handleSubmit(onSubmit)}>{isEditMode ? editText : addText}</Button>}
    >
      <form className="my-2 grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              required
              autoFocus
              label={t<string>('builder.common.form.title.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="subtitle"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label={t<string>('builder.common.form.subtitle.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

         <Controller
          name="date"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label={t<string>('builder.common.form.subtitle.label')}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />


        <Controller
          name="url"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label={t<string>('builder.common.form.url.label')}
              placeholder="https://"
              className="col-span-2"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />
    

        <Controller
          name="summary"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              multiline
              minRows={3}
              maxRows={6}
              className="col-span-2"
              error={!!fieldState.error}
              label={t<string>('builder.common.form.summary.label')}
              helperText={fieldState.error?.message || <MarkdownSupported />}
              {...field}
            />
          )}
        />

        <Controller
          name="keywords"
          control={control}
          render={({ field, fieldState }) => (
            <ArrayInput
              label={t<string>('builder.common.form.keywords.label')}
              value={field.value as string[]}
              onChange={field.onChange}
              errors={fieldState.error}
              className="col-span-2"
            />
          )}
        />
        <input type="submit" style={{ display: 'none' }} />
      </form>
    </BaseModal>
  );
};

export default CustomModal;
