import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false)
  isLoading$ = this.loading.asObservable()
  private processes = 0
  constructor() {}

  next(value: boolean) {
    value ? this.processes++ : this.processes--
    const nextState = this.processes > 0
    this.loading.next(nextState)
  }
}
