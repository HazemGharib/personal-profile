import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WorkExperienceDialogComponent } from './dialogs/work-experience-dialog.component';
import { TrainingExperienceDialogComponent } from './dialogs/training-experience-dialog.component';
import { ExperienceService } from './../../experience/experience.service';
import { Experience, WorkExperienceEntry, TrainingExperienceEntry } from './../../experience/experience';

@Component({
  selector: 'app-experience-settings',
  templateUrl: './experience-settings.component.html',
  styleUrls: ['./experience-settings.component.css']
})
export class ExperienceSettingsComponent implements OnInit {

    dataReady: boolean;
    experience: Experience;

    @Output()
    valueChange: EventEmitter<Experience> = new EventEmitter<Experience>();

    constructor(private experienceService: ExperienceService, public workDialog: MatDialog, public trainingDialog: MatDialog) { }

    ngOnInit() {
        this.experienceService.getExperience().subscribe(experience => {
            this.experience = experience;
            this.dataReady = true;
        });
    }

    openWorkExperienceDialog(workExperienceEntry: WorkExperienceEntry): void {
        let _workExperienceEntry = workExperienceEntry;
        let updating = false;
        let index;

        if (_workExperienceEntry !== undefined && _workExperienceEntry !== null) {
            updating = true;
            index = this.experience.workExperience.indexOf(_workExperienceEntry);
        } else {
            _workExperienceEntry = {
                        employerName: '',
                        employerLogo: '',
                        role: '',
                        responsibilities: '',
                        isCurrent: false,
                        startDate: new Date(),
                        endDate: new Date(),
                    };
        }

        const dialogRef = this.workDialog.open(WorkExperienceDialogComponent, {
            width: '450px',
            data: [_workExperienceEntry, {isUpdating: updating}]
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                _workExperienceEntry = {
                    employerName: result.employerName,
                    employerLogo: result.employerLogo,
                    role: result.role,
                    responsibilities: result.responsibilities,
                    isCurrent: result.isCurrent,
                    startDate: result.startDate,
                    endDate: result.endDate,
                };
                if (updating) {
                    this.experience.workExperience[index] = _workExperienceEntry;
                } else {
                    this.experience.workExperience.push(_workExperienceEntry);
                }
                this.valueChange.emit(this.experience);
            }
        });
    }
    removeWorkExperienceEntry(workExperienceEntry: WorkExperienceEntry) {
        this.experience.workExperience.splice(this.experience.workExperience.indexOf(workExperienceEntry), 1);
        this.valueChange.emit(this.experience);
    }

    openTrainingExperienceDialog(trainingExperienceEntry: TrainingExperienceEntry): void {
        let _trainingExperienceEntry = trainingExperienceEntry;
        let updating = false;
        let index;

        if (_trainingExperienceEntry !== undefined && _trainingExperienceEntry !== null) {
            updating = true;
            index = this.experience.trainingExperience.indexOf(_trainingExperienceEntry);
        } else {
            _trainingExperienceEntry = {
                organizationName: '',
                organizationLogo: '',
                field: '',
                startDate: new Date(),
                endDate: new Date(),
            };
        }

        const dialogRef = this.trainingDialog.open(TrainingExperienceDialogComponent, {
            width: '450px',
            data: [_trainingExperienceEntry, {isUpdating: updating}]
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                _trainingExperienceEntry = {
                    organizationName: result.organizationName,
                    organizationLogo: result.organizationLogo,
                    field: result.field,
                    startDate: result.startDate,
                    endDate: result.endDate,
                };
                if (updating) {
                    this.experience.trainingExperience[index] = _trainingExperienceEntry;
                } else {
                    this.experience.trainingExperience.push(_trainingExperienceEntry);
                }
                this.valueChange.emit(this.experience);
            }
        });
    }
    removeTrainingExperienceEntry(trainingExperienceEntry: TrainingExperienceEntry) {
        this.experience.trainingExperience.splice(this.experience.trainingExperience.indexOf(trainingExperienceEntry), 1);
        this.valueChange.emit(this.experience);
    }
}
