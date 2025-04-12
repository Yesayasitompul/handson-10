import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Add your entities here
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
