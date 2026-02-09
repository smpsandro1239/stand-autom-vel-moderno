import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto, UpdateVehicleDto, createVehicleSchema, updateVehicleSchema } from '@stand/shared';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiBearerAuth()
  @Roles('ADMIN', 'SELLER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @UsePipes(new ZodValidationPipe(createVehicleSchema))
  @ApiOperation({ summary: 'Criar um novo veículo' })
  @ApiResponse({ status: 201, description: 'Veículo criado com sucesso' })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto as any);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os veículos' })
  findAll(@Query() query: any) {
    const where: any = {};
    if (query.ownerId) where.ownerId = query.ownerId;
    if (query.type) where.type = query.type;
    return this.vehiclesService.findAll({ where });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de um veículo' })
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles('ADMIN', 'SELLER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @UsePipes(new ZodValidationPipe(updateVehicleSchema))
  @ApiOperation({ summary: 'Atualizar um veículo' })
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, updateVehicleDto as any);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Remover um veículo' })
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
