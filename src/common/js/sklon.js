export default function(qty, f1 = 'товар', f2 = 'товара', f3 = 'товаров') {
  const m1 = qty % 10;
  const m2 = qty % 100;
  if (m2 >= 5 && m2 <= 20) return f3;
  if (m1 === 1) return f1;
  if (m1 >= 2 && m1 <= 4) return f2;
  return f3;
}