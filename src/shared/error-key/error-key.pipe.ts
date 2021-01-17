import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'errorKey'
})
export class ErrorKeyPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: any, args?: any): any {
    const errorCode = value ? Object.keys(value) : [];
    switch (errorCode[0]) {
      case 'email':
        return 'Email inválido';

      case 'matDatepickerParse':
        return `Data inválida: ${value.matDatepickerParse.text}`;

      case 'matDatepickerMax':
        return `Data superior à: ${this.datePipe.transform(
          value.matDatepickerMax.max,
          'dd/MM/yyyy'
        )} `;

      case 'matDatepickerMin':
        return `Data inferior à: ${this.datePipe.transform(
          value.matDatepickerMin.min,
          'dd/MM/yyyy'
        )} `;

      case 'maxlength':
        return `Máximo: ${value.maxlength.requiredLength}, atual:${value.maxlength.actualLength}`;

      case 'minlength':
        return `Mínimo: ${value.minlength.requiredLength}, atual:${value.minlength.actualLength}`;

      case 'min':
        return `Valor mínimo: ${value.min.min}`;

      case 'cpf':
        return 'CPF inválido';

      case 'cnpj':
        return 'CNPJ inválido';

      case 'pattern':
        return `Campo inválido`;

      case 'dataConcomitante':
        return 'Datas concomitantes';

      case 'dataInvalida':
        return 'Data inválida';

      case 'dataInicioForaPeriodo':
        return 'Data início fora do periodo';

      case 'dataFimForaPeriodo':
        return 'Data fim fora do periodo';

      case 'required':
        return 'Campo obrigatório';

      case 'radio':
        return 'Selecione uma opção';

      case 'link':
        return 'Link inválido';

      case null:
        return null;
      default:
        return null;
    }
  }
}
