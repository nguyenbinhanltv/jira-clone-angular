import { Controller, Get, Post, Body } from '@nestjs/common';
import { Project } from './project';

import * as admin from 'firebase-admin';

@Controller('project')
export class ProjectController {
  db = admin.firestore();
  
  @Get()
  async getProject(): Promise<FirebaseFirestore.DocumentData> {
    const currentProject = await this.db.collection('projects').get();

    return currentProject.docs.map(doc => doc.data())[0] || null;
  }

  @Post()
  updatePorject(@Body() body: Project): Promise<FirebaseFirestore.WriteResult> {
    const projectRef = this.db.doc(`projects/${body.id}`);
    
    return projectRef.set(body, { merge: true });
  }
}
