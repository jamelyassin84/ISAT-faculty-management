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

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    useHash: true,
}

const modules = [
    FuseModule,
    CoreModule,
    BrowserModule,
    LayoutModule,
    SharedModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    MarkdownModule.forRoot({}),
    StoreModule.forRoot({}, {}),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    FuseConfigModule.forRoot(appConfig),
    StoreRouterConnectingModule.forRoot(),
    provideFirestore(() => getFirestore()),
    FuseMockApiModule.forRoot(mockApiServices),
    RouterModule.forRoot(appRoutes, routerConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
    }),
]

@NgModule({
    declarations: [AppComponent],
    imports: [...modules],
    bootstrap: [AppComponent],
})
export class AppModule {}
