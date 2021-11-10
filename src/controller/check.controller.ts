import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { CheckService } from '../service/check.service';
import { CreateCheckDto } from '../dto/create-check.dto';
import { UpdateCheckDto } from '../dto/update-check.dto';
import {Response} from 'express'
@Controller('check')
export class CheckController {
  constructor(private readonly checkService: CheckService) {}; 



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckDto: UpdateCheckDto, @Res()response : Response) {
    response.send('Status da entrega atualizado')
    return this.checkService.update(+id, updateCheckDto);
  }

};
