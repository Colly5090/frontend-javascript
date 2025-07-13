/// <reference path="Subject.ts" />

namespace Subjects {
    // Declaration merging: add optional experienceTeachingReact to Teacher interface
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    // React class extends Subject
    export class React extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingReact > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }
