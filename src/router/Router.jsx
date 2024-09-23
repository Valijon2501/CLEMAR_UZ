import { Route, Routes } from "react-router-dom";
import Header from "../clemar/Header";
import Swipers from "../clemar/Swipers";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/swiper" element={<Swipers />} />
      </Routes>
    </>
  );
};
export default Router;






// 1. Javascriptda qanday ma'lumotlar turlari mavjud?
// JavaScriptda quyidagi ma'lumot turlari mavjud:
// 1. **Number (Son)**: Butun sonlar va o'nli kasr sonlarni ifodalaydi. Masalan: `42`, `3.14`.
// 2. **String (Matn)**: Matnli qiymatlar yoki belgilar ketma-ketligini ifodalaydi. Masalan: `"Salom"`, `'Hello'`.
// 3. **Boolean (Mantiqiy)**: Ikkita qiymatdan birini oladi: `true` (rost) yoki `false` (yolg‘on).
// 4. **Undefined (Aniqlanmagan)**: O'zgaruvchiga qiymat tayinlanmaganligini bildiradi.
// 5. **Null (Bo'sh)**: Bu qiymat ob'ekt yoki ma'lumot yo‘qligini ifodalaydi.
// 6. **Object (Ob'ekt)**: Kalit-qiymat juftliklarini saqlaydigan ma'lumot turi. Masalan: `{ism: "Valijon", yosh: 25}`.
// 7. **Array (Massiv)**: Bir nechta qiymatlarni tartibli ravishda saqlaydi. Masalan: `[1, 2, 3]`, `["Olma", "Nok"]`.
// 8. **Symbol (Simvol)**: Noyob va o'zgarmas qiymat, asosan ob'ekt xususiyatlarini nomlash uchun ishlatiladi.
// 9. **BigInt (Katta Sonlar)**: Juda katta sonlarni saqlash uchun ishlatiladi. Masalan: `12345678901234567890n`.
// Bu ma'lumot turlari JavaScriptda ma'lumotlarni saqlash va ishlatishda asosiy rol o'ynaydi.


// 2. Javascriptda Hoistingni tushuntiring.
// 3. Nima uchun javascriptda “debugger” so‘zini ishlatamiz?
// 4. “ == “ va “ === “ operatorlari orasidagi farq.
// 5. Javascriptdagi var va let kalit so'zlari orasidagi farq.
// 6. Javascriptda Implicit Type Coercionni tushuntiring.
// 7. Javascript statik yoki dinamik terilgan tilmi?
// 8. JavaScript-da NaN xossasi nima?
// 9. Qiymat bo'yicha o'tgan va mos yozuvlar bo'yicha o'tganlarni tushuntiring.
// 10. JavaScript-da darhol chaqiriladigan funksiya nima?