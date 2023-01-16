import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'form-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-comment.component.html',
})

export class FormCommentComponent implements OnInit {

  constructor(
    private authSvc: AuthService,
    private fb: FormBuilder
  ) { }

  public allowedToPost = false

  commentForm = this.fb.group({
    comment: ['', Validators.required]
  })

  onChange() {
    console.log('hla');
  }

  ngOnInit() {
    if (this.authSvc.auth.isAuthenticated) {
      this.allowedToPost = true
    }
  }

}
