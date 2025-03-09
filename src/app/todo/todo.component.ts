import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTask: string = '';
  tasks: { name: string, status: string }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, status: 'pending' });
      this.newTask = '';
    }
  }

  toggleTaskStatus(task: { name: string, status: string }) {
    task.status = task.status === 'pending' ? 'completed' : 'pending';
  }

  removeTask(task: { name: string, status: string }) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
