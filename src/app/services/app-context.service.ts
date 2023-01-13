import { Injectable } from '@angular/core';

// this can be extended for future features
interface AppContext {
  isInitialized: boolean;
}

const initialState = {
  isInitialized: false,
};

@Injectable({
  providedIn: 'root',
})
export class AppContextService {
  constructor() {}

  private appContext: AppContext = initialState;

  getAppContext() {
    return this.appContext;
  }

  setAppContext(
    newState: AppContext | ((prevState: AppContext) => AppContext)
  ) {
    if (typeof newState === 'function') {
      this.appContext = newState(this.appContext);
      return;
    }

    this.appContext = newState;
  }
}
