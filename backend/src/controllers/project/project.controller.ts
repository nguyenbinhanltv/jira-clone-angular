import { Controller, Get } from '@nestjs/common';
import { Project } from './project';
import * as admin from 'firebase-admin';

@Controller('project')
export class ProjectController {
  db = admin.firestore();
  @Get()
  getProject(): any {
    return Project;
  }
}
