import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { MatchingModule } from './matching/matching.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',

      host: 'localhost',
      port: 1521,
      username: 'STYDY_GROUP_APP',
      password: 'fossah12',
      serviceName: 'XEPDB1',

      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      autoLoadEntities: true,
      synchronize: true,
    }),

    AuthModule,
    UsersModule,
    GroupsModule,
    MatchingModule,
  ],
})
export class AppModule {}