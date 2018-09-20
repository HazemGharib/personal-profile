import { FormsModule } from '@angular/forms';
import { Inject, Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TrainingExperienceEntry } from './../../../experience/experience';

@Component({
    selector: 'app-training-experience-dialog',
    templateUrl: 'training-experience-dialog.html',
    styleUrls: ['./dialogs.css']
})
export class TrainingExperienceDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<TrainingExperienceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: TrainingExperienceEntry) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
