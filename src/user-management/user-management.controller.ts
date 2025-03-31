import { Controller, Post, Req, Body } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { Response } from 'express';
@Controller('user-management')
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) {}

  @Post()
  async create(@Body() data: any, @Req() res: Response) {
    try {
      const userManagement = await this.userManagementService.create(data);
      return res.status(200).json({ userManagement });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
