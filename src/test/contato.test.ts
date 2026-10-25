import { describe, expect, it } from "vitest";

import { buildOrcamentoMessage, buildWhatsAppLink } from "@/lib/contato";

describe("WhatsApp de agendamento", () => {
  it("abre o WhatsApp da Brilho Nobre (35) 99939-7252", () => {
    expect(buildWhatsAppLink("Oi")).toBe("https://wa.me/5535999397252?text=Oi");
  });

  it("inclui nome, serviço e veículo na mensagem de orçamento", () => {
    const msg = buildOrcamentoMessage({ nome: " Ana ", servico: "Polimento", veiculo: "Civic" });
    expect(msg).toContain("Meu nome é Ana.");
    expect(msg).toContain("Serviço de interesse: Polimento");
    expect(msg).toContain("Veículo: Civic");
    expect(msg).not.toContain("Bairro/Cidade");
  });
});
