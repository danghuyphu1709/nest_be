import { Module } from '@nestjs/common';
import { UserManagementController } from './user-management.controller';
import { UserManagementService } from './user-management.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserManagement, UserManagementSchema } from './user-management.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserManagement.name, schema: UserManagementSchema },
    ])
  ],
  exports: [UserManagementService],
  controllers: [UserManagementController],
  providers: [UserManagementService]
})
export class UserManagementModule {}
