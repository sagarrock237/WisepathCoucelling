import { Component, inject, TemplateRef  } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbarall',
  templateUrl: './navbarall.component.html',
  styleUrls: ['./navbarall.component.css']
})
export class NavbarallComponent {

  private modalService = inject(NgbModal);
	closeResult = '';
    
  opened:boolean = false

  openClose(){
    if(this.opened){
      this.opened = false
    }else{
      this.opened = true
    }

    // alert(this.opened)
  }


  //JOIN US MODAL

  
  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}


  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
  }

}
