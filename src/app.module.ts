import {TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { MatchingModule } from './matching/matching.module';
import { GroupsModule } from './groups/groups.module'; 
import { Message } from './messages/entities/messages.entity';
import { User } from './users/entities/user.entity';
import { Group } from './groups/entities/group.entity';  

@Module({
 
  imports: [
ConfigModule.forRoot({ isGlobal: true }),
TypeOrmModule.forRootAsync({
imports: [ConfigModule],
inject: [ConfigService],
useFactory: (config: ConfigService) => ({
type: 'oracle',
host: config.get('DB_HOST'),
port: parseInt(config.get('DB_PORT', '1521')),
username: config.get('DB_USERNAME'),
password: config.get('DB_PASSWORD'),
serviceName: config.get('DB_SERVICE_NAME'),
synchronize: config.get('DB_SYNCHRONIZE') === 'true',
entities: [ User, Message, Group],
logging: true,
}),
}),
    UsersModule,
    AuthModule,
    UsersModule,
    MessagesModule,
    GroupsModule,
    MatchingModule,

  ],
})
export class AppModule {}

      

