import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  findTeamChosen : boolean = true;
  option : string = 'match'

  setOption(option: string){
    this.option = option;
  }

  setFindTeamChosen(findTeamChosen: boolean){
    this.findTeamChosen = findTeamChosen;
  }

  ngOnInit(): void {

  }

}
