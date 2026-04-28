import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MatchingModule } from './matching/matching.module';
import { NotificationsModule } from './notifications/notifications.module';
import { MessagesModule } from './messages/messages.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [AuthModule, UsersModule, GroupsModule, MatchingModule, NotificationsModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
