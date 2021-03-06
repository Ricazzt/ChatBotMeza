import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users.routing';
import { StartModule } from '../_start/start.module';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatSnackBarModule,
  MatSnackBar,
  MatTableModule,
  MatPaginatorModule,
} from '@angular/material';

@NgModule({
    declarations: [
        UsersComponent,

    ],
    imports: [
        StartModule, UsersRoutingModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
    MatDialogModule,
    ],
    entryComponents: [],
    providers: [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
    ],
    exports: [
    ]
})
export class UsersModule { }
