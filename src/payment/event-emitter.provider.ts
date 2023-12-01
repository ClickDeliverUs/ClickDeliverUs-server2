import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventEmitterProvider {
  private static instance: EventEmitterProvider = new EventEmitterProvider();
  eventEmitter: EventEmitter2;

  constructor() {
    this.eventEmitter = new EventEmitter2();
  }

  static getInstance(): EventEmitterProvider {
    return this.instance;
  }
}
