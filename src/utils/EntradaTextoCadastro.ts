const secoes = [
    {
      id:1,
      titulo:'insira alguns dados básicos',
      checkbox:[],
      entradaTexto: [
        {
          id:1,
          label: 'nome',
          placeholder:'digite seu nome completo'
        },
        {
          id:2,
          label: 'Email',
          placeholder:'digite seu nome completo'
        },
        {
          id:3,
          label: 'Crie sua senha',
          placeholder:'digite sua senha'
        },
        {
          id:4,
          label: 'Repita sua senha',
          placeholder:'redigite sua nova senha'
        }
        
      ]
    },
    {
      id:2,
      titulo:'Agora, mais alguns dados sobre você:',
      checkbox:[],
      entradaTexto: [
        {
          id:1,
          label: 'CEP',
          placeholder:'digite seu CEP'
        },
        {
          id:2,
          label: 'Endereço',
          placeholder:'Insira seu endereço'
        },
        {
          id:3,
          label: 'Numero',
          placeholder:'Insira número da sua residência'
        },
        {
          id:4,
          label: 'Telefone',
          placeholder:'(XX) XXXXX-XXXX'
        },
      ]
    }
  ]

  export {secoes};