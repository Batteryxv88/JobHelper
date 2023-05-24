import { useState } from 'react';
import { makeAutoObservable } from 'mobx';
import { C6100 } from './C6100';
import { C14000 } from './C14000';
import { C7100 } from './C7100';
import { C4080 } from './C4080';
import { C3080 } from './C3080';
import { C6000 } from './C6000';

type FindErrorProps = {
  errNum: string;
  model: string | null;
};

class Errors {
  errorState: any = null;
  modelState: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectMachine (arr:any) {
    this.modelState = arr;
  }
  
  

  findError(errNum: string) {
    
      this.errorState = this.modelState.filter((item: any) => {
        return item.code === `C-${errNum}`;
      });
  }
}

export default new Errors();
