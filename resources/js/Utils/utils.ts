import { createNumberMask } from "text-mask-addons";

export const brlMask = createNumberMask({
    prefix: "R$ ",
    thousandsSeparatorSymbol: ".",
    decimalSymbol: ",",
    requireDecimal: true,
});
