import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule}  from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent }  from './homepage/homepage.component';
import { LoginComponent }  from './login/index';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { ProposalService } from './proposal/proposal.service';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';


import { PostclipComponent } from './postclip/postclip.component';
import { PostclipService } from './postclip/postclip.service';
import { BoardShowComponent } from './board/board-show.component';
import { BoardService } from './board/board.service';
import { BoardNewComponent } from './board/board-new/board-new.component';
import { PostclipNewComponent } from './postclip/postclip-new/postclip-new.component';
import { WallComponent } from './wall/wall.component';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonalWallComponent } from './wall/personal-wall/personal-wall.component';

//import { LocalStorageModule } from 'angular-2-local-storage';







@NgModule({

  imports:      [
     BrowserModule,
     AppRoutingModule,
     FormsModule,
     NgbModule.forRoot(),
     HttpModule//,
    //  LocalStorageModule.withConfig({
    //         prefix: 'postclipfront',
    //         storageType: 'localStorage'
    //     })

    ],

  declarations: [
    HomepageComponent,
    LoginComponent,
    AlertComponent,
    AppComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent,
    PostclipComponent,
    BoardShowComponent,
    BoardNewComponent,
    WallComponent,
    PostclipNewComponent,
    PersonalWallComponent


   ],
   providers:[
     AuthGuard,
     AlertService,
     AuthenticationService,
     UserService,
     DocumentService,
     ProposalService,
     PostclipService,
     BoardService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
