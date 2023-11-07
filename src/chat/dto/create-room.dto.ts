export class CreateRoomDto {
  cid: string;
  did: string;

  constructor(cid: string, did: string) {
    this.cid = cid;
    this.did = did;
  }
}
