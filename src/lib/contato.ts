export const WHATSAPP_NUMBER = "5535999397252";
export const WHATSAPP_DISPLAY = "(35) 99939-7252";

export const SOCIAL = {
  instagram: "https://www.instagram.com/brilhonobre.oficiall/",
  instagramHandle: "@brilhonobre.oficiall",
  tiktok: "https://www.tiktok.com/@brilhonobre.oficial",
  facebook: "https://www.facebook.com/brilhonobre.oficial",
  youtube: "https://www.youtube.com/@brilhonobre.oficial",
  linktree: "https://linktr.ee/brilhonobre",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Oi! Gostaria de saber sobre os serviços da Brilho Nobre!";

export function buildWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface OrcamentoInput {
  nome: string;
  veiculo?: string;
  servico?: string;
  local?: string;
  mensagem?: string;
}

export function buildOrcamentoMessage(input: OrcamentoInput): string {
  const lines = [`Olá, Brilho Nobre! Meu nome é ${input.nome.trim()}.`];
  if (input.servico?.trim()) lines.push(`Serviço de interesse: ${input.servico.trim()}`);
  if (input.veiculo?.trim()) lines.push(`Veículo: ${input.veiculo.trim()}`);
  if (input.local?.trim()) lines.push(`Bairro/Cidade: ${input.local.trim()}`);
  if (input.mensagem?.trim()) lines.push(`Mensagem: ${input.mensagem.trim()}`);
  lines.push("Gostaria de um orçamento, por favor.");
  return lines.join("\n");
}
