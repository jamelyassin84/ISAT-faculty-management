import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ExtraOptions, PreloadAllModules, RouterModule} from '@angular/router'
import {MarkdownModule} from 'ngx-markdown'
import {FuseModule} from '@fuse'
import {FuseConfigModule} from '@fuse/services/config'
import {FuseMockApiModule} from '@fuse/lib/mock-api'
import {CoreModule} from 'app/core/core.module'
import {appConfig} from 'app/core/config/app.config'
import {mockApiServices} from 'app/mock-api'
import {LayoutModule} from 'app/layout/layout.module'
import {AppComponent} from 'app/app.component'
import {appRoutes} from 'app/app.routing'
import {SharedModule} from './shared/shared.module'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import {EffectsModule} from '@ngrx/effects'
import {initializeApp, provideFirebaseApp} from '@angular/fire/app'
import {provideAuth, getAuth} from '@angular/fire/auth'
import {provideFirestore, getFirestore} from '@angular/fire/firestore'
import {provideStorage, getStorage} from '@angular/fire/storage'
import {SETTINGS as AUTH_SETTINGS} from '@angular/fire/compat/auth'
import {FIREBASE_OPTIONS} from '@angular/fire/compat'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {ErrorInterceptor} from './shared/interceptor/error.interceptor'

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    useHash: true,
    onSameUrlNavigation: 'reload',
}

const modules = [
    FuseModule,
    CoreModule,
    BrowserModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    MarkdownModule.forRoot({}),
    StoreModule.forRoot({}, {}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    FuseConfigModule.forRoot(appConfig),
    StoreRouterConnectingModule.forRoot(),
    provideFirestore(() => getFirestore()),
    FuseMockApiModule.forRoot(mockApiServices),
    RouterModule.forRoot(appRoutes, routerConfig),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
    }),
]

@NgModule({
    declarations: [AppComponent],
    imports: [...modules],
    bootstrap: [AppComponent],
    providers: [
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: ErrorInterceptor,
        //     multi: true,
        // },
        {
            provide: AUTH_SETTINGS,
            useValue: {appVerificationDisabledForTesting: true},
        },
        {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
    ],
})
export class AppModule {}
