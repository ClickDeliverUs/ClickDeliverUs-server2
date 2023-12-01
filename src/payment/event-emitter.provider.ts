import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventEmitterProvider {
  private static instance: EventEmitterProvider;
  eventEmitter: EventEmitter2;

  constructor() {
    this.eventEmitter = new EventEmitter2();
  }

  static getInstance(): EventEmitterProvider {
    if (!EventEmitterProvider) {
      EventEmitterProvider.instance = new EventEmitterProvider();
    }
    return EventEmitterProvider.instance;
  }
}
