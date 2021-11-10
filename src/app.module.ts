import { Module } from '@nestjs/common';
import { CheckController } from './controller/check.controller';
import { CheckRepository } from './repository/check.repository';
import {CheckService} from './service/check.service';


@Module({
  imports: [],
  controllers: [CheckController],
  providers: [CheckService, CheckRepository],
})
export class AppModule {}
