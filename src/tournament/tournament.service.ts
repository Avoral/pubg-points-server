import { Injectable } from '@nestjs/common';
import { Tournament } from '../models/tournament.model';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class TournamentService {

  constructor(private firebaseService: FirebaseService) {
  }

  async getTournament(id: string) {
   return await this.firebaseService.getTournaments(id).then(a => a);
  }

  async getTournaments() {
    return await this.firebaseService.getTournaments().then(a => a);
  }

  async addTournament(tournament: Tournament){
    return await this.firebaseService.addItemToCollectionWithId('tournaments', tournament, '1243513');
  }

  async addMatchToTournament(tournamentId: string, matchId: string){
    console.log(tournamentId, matchId);
  }

}
