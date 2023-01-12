import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PubgApiService } from '../pubg-api/pubg-api.service';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from './tournament.service';

@Controller('tournament')
export class TournamentController {
  constructor(private pubgApiService: PubgApiService, private tournamentService: TournamentService) {
  }

  @Get()
  getTournaments() {
    return this.tournamentService.getTournaments().then(a => a);
  }

  @Get(':id')
  getTournament(@Param('id') id: string) {
    return this.tournamentService.getTournament(id);
  }

  @Post()
  postTournaments(@Body() tournament: Tournament) {
    console.log(tournament);
    return this.tournamentService.addTournament(tournament).then(a => a);
  }


  @Post(':tournamentId/add/:matchId')
  addMatchToTournament(
    @Param('tournamentId') tournamentId: string,
    @Param('matchId') matchId: string
  ) {
    return this.tournamentService.addMatchToTournament(tournamentId, matchId);
  }

  @Get('match/:id')
  getMatch(@Param('id') id: string) {
    if (id) {
      return this.pubgApiService.getMatchData(id);
    }
  }

}
