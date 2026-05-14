import { CardOption } from '../../../components/card-option';
import { Headline } from '../../../components/headline';
import { PageAnimation } from '../../../components/page-animation';

export const CheckIn = () => {
    return (
        <PageAnimation>
            <Headline
                title="Bem-vindo(a)👋"
                subtitle="Selecione uma das opções abaixo para continuar seu atendimento."
            />

            <CardOption
                description=" Ao chegar na clínica, confirme sua presença para informar à recepção que você já está aguardando atendimento."
                title="Confirme sua chegada"
                to="/app/cpf"
            />
        </PageAnimation>
    );
};
