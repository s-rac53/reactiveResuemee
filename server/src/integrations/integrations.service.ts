import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ECActivity,	
  Education,
  EntranceExam,
  Interest,
  Language,
  ProfessionalTraining,
  Project,
  Resume,
  Skill,
  VocationalTraining,
  WorkExperience,
} from '@reactive-resume/schema';
import csv from 'csvtojson';
import dayjs from 'dayjs';
import { readFile, unlink } from 'fs/promises';
import { cloneDeep, get, isEmpty, merge } from 'lodash';
import StreamZip from 'node-stream-zip';
import { DeepPartial } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { FILENAME_TIMESTAMP } from '@/constants/index';
import defaultState from '@/resume/data/defaultState';
import { Resume as ResumeEntity } from '@/resume/entities/resume.entity';
import { ResumeService } from '@/resume/resume.service';

@Injectable()
export class IntegrationsService {
  constructor(private resumeService: ResumeService) {}

  


  async reactiveResume(userId: number, path: string): Promise<ResumeEntity> {
    try {
      const jsonResume = JSON.parse(await readFile(path, 'utf8'));

      const resume: Partial<Resume> = cloneDeep(jsonResume);

      // Metadata
      const timestamp = dayjs().format(FILENAME_TIMESTAMP);
      merge<Partial<Resume>, DeepPartial<Resume>>(resume, {
        name: `Imported from Reactive Resume (${timestamp})`,
        slug: `imported-from-reactive-resume-${timestamp}`,
      });

      return this.resumeService.import(resume, userId);
    } catch {
      throw new HttpException('You must upload a valid JSON Resume file.', HttpStatus.BAD_REQUEST);
    } finally {
      await unlink(path);
    }
  }

} 
