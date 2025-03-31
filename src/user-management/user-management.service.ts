import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  UserManagement,
  UserManagementDocument,
} from './user-management.schema';
@Injectable()
export class UserManagementService {
  constructor(
    @InjectModel(UserManagement.name)
    private readonly commonCategoryModel: Model<UserManagementDocument>,
  ) {}

  async create(data: Partial<UserManagement>){
    const newUser = new this.commonCategoryModel(data);
    return newUser.save();
  }
}
