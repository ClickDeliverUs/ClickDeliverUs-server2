import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventEmitterProvider extends EventEmitter2 {
  private static instance: EventEmitterProvider;
  eventEmitter: EventEmitter2;

  constructor() {
    super();
    this.eventEmitter = new EventEmitter2();
  }

  static getInstance(): EventEmitterProvider {
    if (!EventEmitterProvider) {
      EventEmitterProvider.instance = new EventEmitterProvider();
    }
    return EventEmitterProvider.instance;
  }
}
