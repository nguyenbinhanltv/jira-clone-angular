import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth/auth.controller';
import { ProjectController } from './controllers/project/project.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ProjectController],
  providers: [AppService],
})
export class AppModule {}
