import { Controller, Get, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TraderService } from '../services';

@ApiTags('trader')
@Controller('trader')
export class TraderController {
  private readonly logger = new Logger(TraderController.name);

  constructor(private readonly service: TraderService) {}

  @Get()
  @ApiOperation({ summary: 'Get all traders' })
  @ApiResponse({ status: 200, description: 'Success' })
  getAllTraders(): Array<any> {
    return this.service.getAllTraders();
  }
}
