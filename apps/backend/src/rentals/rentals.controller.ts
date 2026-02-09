import { Controller, Get, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RentalsService } from './rentals.service';
import { CreateRentalDto, createRentalSchema } from '@stand/shared';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@ApiTags('rentals')
@Controller('rentals')
export class RentalsController {
  constructor(private readonly rentalsService: RentalsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ZodValidationPipe(createRentalSchema))
  @ApiOperation({ summary: 'Criar uma nova reserva de aluguer' })
  @ApiResponse({ status: 201, description: 'Reserva criada com sucesso' })
  create(@Body() createRentalDto: CreateRentalDto) {
    return this.rentalsService.create(createRentalDto as any);
  }

  @Get()
  @ApiBearerAuth()
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Listar todas as reservas (apenas Admin)' })
  findAll() {
    return this.rentalsService.findAll();
  }
}
