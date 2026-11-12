
const formAgendamento = document.getElementById("formAgendamento");

if (formAgendamento) {
    formAgendamento.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const pet = document.getElementById("pet").value;
        const servico = document.getElementById("servico").value;
        const data = document.getElementById("data").value;
        const observacoes = document.getElementById("observacoes").value;

        const telefone = "5521970674266";

        const mensagem =
            `Olá! Gostaria de agendar um atendimento na Pet Vida.\n\n` +
            `Responsável: ${nome}\n` +
            `Pet: ${pet}\n` +
            `Serviço: ${servico}\n` +
            `Data desejada: ${data}\n` +
            `Observações: ${observacoes || "Nenhuma"}`;

        const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(link, "_blank");
    });
}
