import { Injectable } from '@nestjs/common';
import { Tournament } from '../models/tournament.model';
import { doc, setDoc } from "firebase/firestore";

const admin = require('firebase-admin');

const serviceAccount = require("../../pubg-points-system-firebase-adminsdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pubg-points-system-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.firestore();

@Injectable()
export class FirebaseService {
  constructor() {

  }

  async addItemToCollection(collectionName: string, item: any) {
    return await db.collection(collectionName).add(item).then( (a)=>{
      return {id: a.id};
    }).catch( (e)=>{
      return `Error ${e}`;
    });
  }

  async addItemToCollectionWithId(collectionName: string, item: any, id: string) {
    // return await setDoc(doc(db.collection(collectionName), collectionName, id), item).then( a => a);
  }

  async getTournaments(id?: string) {
    let tournamentRef =  db.collection('tournaments');
    let tournamentArray = [];
    if (id) {
      let singleTournamentRef = db.doc(`/tournaments/${id}`);
      return singleTournamentRef.get().then( a => a.data());
    } else {
    return await tournamentRef.get().then( (querySnapshot) => {
      querySnapshot.forEach( document => {
        tournamentArray.push({...document.data(), id: document.id});
      });
      return tournamentArray;
    });
    }
  }


}
