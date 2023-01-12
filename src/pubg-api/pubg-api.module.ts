import { Global, Module } from '@nestjs/common';
import { PubgApiService } from './pubg-api.service';

@Global()
@Module({
  providers: [PubgApiService],
  exports: [PubgApiService]
})
export class PubgApiModule{}

