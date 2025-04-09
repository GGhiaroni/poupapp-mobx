export const formatarValorMonetario = (valor) => {
  const numero = Number(String(valor).replace(/\D/g, ""));

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(numero / 100);
};
