import { Injectable } from '@nestjs/common';
import { CheckRepository } from 'src/repository/check.repository';
import { CreateCheckDto } from '../dto/create-check.dto';
import { UpdateCheckDto } from '../dto/update-check.dto';

@Injectable()
export class CheckService {

  constructor(private readonly checkRepository : CheckRepository){

  }
  update(id: number, updateCheckDto: UpdateCheckDto) {
    this.checkRepository.checkStatus(id);
  }


}
