import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth/auth.controller';
import { ProjectController } from './controllers/project/project.controller';
import { AuthService } from './services/auth.service';
import { ProjectService } from './services/project.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ProjectController],
  providers: [AppService, AuthService, ProjectService],
})
export class AppModule {}
