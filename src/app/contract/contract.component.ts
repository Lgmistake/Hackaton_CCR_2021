import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup, MatTabChangeEvent } from '@angular/material';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  activeTab = 0;
  constructor(private activeRoute: ActivatedRoute, private route: Router) {}

  ngOnInit() {
  }
}
