import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: ':memory:',
      dropSchema: true,
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
