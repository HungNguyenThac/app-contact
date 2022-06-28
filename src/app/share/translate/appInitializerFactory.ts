import { Injector } from "@angular/core"
import { LOCATION_INITIALIZED } from "@angular/common"
import { MultiLanguageService } from "./multiLanguageService"

export function appInitializerFactory(
  translate: MultiLanguageService,
  injector: Injector
) {
  return () =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      )
      locationInitialized.then(() => {
        const langToSet = translate.getCurrentLanguage()
        translate.use(langToSet).subscribe(
          () => {
            console.info(`Successfully initialized '${langToSet}' language.'`)
          },
          (err) => {
            console.error(
              `Problem with '${langToSet}' language initialization.'`
            )
          },
          () => {
            resolve(null)
          }
        )
      })
    })
}
