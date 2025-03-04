import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit {

  contatoForm = this.fb.group({
    nome: ["", [
      Validators.minLength(6),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(10),
      Validators.maxLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["",[
      Validators.minLength(30),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {

  }

  enviarContato() {
    alert('Contato enviado com sucesso!');
    this.contatoForm.reset();
  }

}
