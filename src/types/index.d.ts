interface Appointment {
    idAgenda: number;
    dataMarcada: string;
    horaMarcada: string;
    horaChegada: null | string;
    nomePaciente: string;
    nomePacienteCadastro: null | string;
    idProntuario: number;
    nomeMedico: string;
    especialidade: string;
    Convenio: string;
    c_tipo: number;
    localAtendimento: string;
    TipoAtendimento: string;
    idMedico: null | number;
    idConvenio: null | number;
    idLocal: null | number;
    idRegistro: null | number;
    idEspecialidade: null | number;
    idServico: null | number;
    descricaoServico: null | string;
    cpf: null | string;
}
