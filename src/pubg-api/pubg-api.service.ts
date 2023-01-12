import { Injectable } from '@nestjs/common';
const pubg = require('pubg.js');
const apiInstance = new pubg.Client('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3Mzk0Mjc5MC1hZDMzLTAxMzctNTJhMS00M2ExNmM4YzJhZDIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTY3MTU2MDIxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImVtaWwtZHdvcmFrb3dzIn0.E0zkV-_nMOcFow4-tjO2ESzZWUroytb77p_g54kHZf4', 'pc-eu');

@Injectable({})
export class PubgApiService {

  getMatchData(id: string){
    return apiInstance.getMatch(id);
  }

  player(){}

  lastGame(){}
}
