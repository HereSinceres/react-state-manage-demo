import { createService } from 'hook-service';
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { makeAutoObservable } from 'mobx';

// Model the application state.
export class Timer {
  public secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  public increase() {
    this.secondsPassed += 1;
  }

  public reset() {
    this.secondsPassed = 0;
  }
}
export const ins = new Timer();
export const MyTimerService = createService(() => ins);
