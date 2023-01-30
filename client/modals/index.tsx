import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppDispatch } from '@/store/hooks';
import { ModalName, setModalState } from '@/store/modal/modalSlice';

import ForgotPasswordModal from './auth/ForgotPasswordModal';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import ResetPasswordModal from './auth/ResetPasswordModal';
import InterestModal from './builder/sections/InterestModal';
import ProfessionalTrainingModal from './builder/sections/ProfessionalTrainingModal';
import VocationalTrainingModal from './builder/sections/VocationalTrainingModal';
import EducationModal from './builder/sections/EducationModal';
import ECActivityModal from './builder/sections/ECActivityModal';
import LanguageModal from './builder/sections/LanguageModal';
import ProfileModal from './builder/sections/ProfileModal';
import ProjectModal from './builder/sections/ProjectModal';
import EntranceExamModal from './builder/sections/EntranceExamModal';
import SkillModal from './builder/sections/SkillModal';
import WorkModal from './builder/sections/WorkModal';
import CustomModal from './builder/sections/CustomModal';
import CreateResumeModal from './dashboard/CreateResumeModal';
import ImportExternalModal from './dashboard/ImportExternalModal';
import RenameResumeModal from './dashboard/RenameResumeModal';

type QueryParams = {
  modal?: ModalName;
};

const ModalWrapper: React.FC = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const { modal, ...rest } = router.query as QueryParams;

    if (!modal) return;

    dispatch(setModalState({ modal, state: { open: true, payload: { item: rest } } }));
  }, [router.query, dispatch]);

  return (
    <>
      {/* Authentication */}
      <LoginModal />
      <RegisterModal />
      <ForgotPasswordModal />
      <ResetPasswordModal />

      {/* Dashboard */}
      <CreateResumeModal />
      <ImportExternalModal />
      <RenameResumeModal />

      {/* Builder */}

      {/* Sections */}
      <ProfileModal />
      <WorkModal />
      <EducationModal />
      <InterestModal />
      <ProfessionalTrainingModal />
      <VocationalTrainingModal />
      <SkillModal />
      <LanguageModal />
      <ECActivityModal />
      <EntranceExamModal />
      <ProjectModal />

      {/* Custom Sections */}
      <CustomModal />
    </>
  );
};

export default ModalWrapper;
