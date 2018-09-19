import { FormsModule } from '@angular/forms';
import { Inject, Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WorkExperienceEntry } from '../../../experience/experience';

@Component({
    selector: 'app-work-experience-dialog.html',
    templateUrl: 'work-experience-dialog.html',
    styleUrls: ['./dialogs.css']
})
export class WorkExperienceDialogComponent {
    isCurrent = true;

    constructor(
        public dialogRef: MatDialogRef<WorkExperienceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: WorkExperienceEntry) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
