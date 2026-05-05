/*import { Controller } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {}
*/
import { Controller, Get } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Get()
  findAll() {
    return 'Notifications working';
  }
}