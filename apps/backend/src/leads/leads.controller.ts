import { Controller, Get, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LeadsService } from './leads.service';
import { CreateLeadDto, createLeadSchema } from '@stand/shared';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@ApiTags('leads')
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createLeadSchema))
  @ApiOperation({ summary: 'Criar um novo lead de contacto' })
  @ApiResponse({ status: 201, description: 'Lead criado com sucesso' })
  create(@Body() createLeadDto: CreateLeadDto) {
    return this.leadsService.create(createLeadDto as any);
  }

  @Get()
  @ApiBearerAuth()
  @Roles('ADMIN', 'SELLER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Listar todos os leads (apenas Admin/Seller)' })
  findAll() {
    return this.leadsService.findAll();
  }
}
