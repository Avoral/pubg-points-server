import { Module } from '@nestjs/common';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';
import { PubgApiModule } from '../pubg-api/pubg-api.module';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService],
  imports: [PubgApiModule]
})
export class TournamentModule {}
