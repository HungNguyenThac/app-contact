import { MultiLanguageService } from "./share/translate/multiLanguageService"
import { TranslateLoader, TranslateModule } from "@ngx-translate/core"
import {
  HttpClient,
  HttpClientJsonpModule,
  HttpClientModule,
} from "@angular/common/http"
import {
  APP_INITIALIZER,
  Injector,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { RouterModule } from "@angular/router"
import { ModalModule } from "ngx-bootstrap/modal"
import { ngxLoadingAnimationTypes, NgxLoadingModule } from "ngx-loading"
import { ToastrModule } from "ngx-toastr"
import { routes } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { LoadingComponent } from "./components/loading/loading.component"
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { appInitializerFactory } from "./share/translate/appInitializerFactory"
import { throwIfAlreadyLoaded } from "./core/module-import-guard"

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    "./assets/i18n/",
    ".json?cacheBuster=" + new Date().toISOString().replace(/\.|:|-/g, "")
  )
}

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.cubeGrid,
      backdropBackgroundColour: "rgba(0, 0, 0, 0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [MultiLanguageService, Injector],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Optional() @SkipSelf() parentModule: AppModule) {
    throwIfAlreadyLoaded(parentModule, "AppModule")
  }
}
