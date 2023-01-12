import { Module } from '@nestjs/common';
import { PubgApiModule } from './pubg-api/pubg-api.module';
import { TournamentModule } from './tournament/tournament.module';
import { FirebaseModule } from './firebase/firebase.module';
import { FirebaseService } from './firebase/firebase.service';

@Module({
  imports: [PubgApiModule, TournamentModule, FirebaseModule],
  providers: [FirebaseService]
})
export class AppModule {}
