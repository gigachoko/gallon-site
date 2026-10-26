import React, { useState, useEffect } from "react";
import fuelProducts from "./fuel-prices.json";
import logoImg from "./assets/logo.png";
const z = fuelProducts;
var c = [{ name: "თბილისი", count: 4, stations: ["აეროპორტის ხიდის მიმდებარედ, ისანი-სამგორი", "შანდორ პეტეფის ქ. N34, ისანი-სამგორი", "დიდი ლილოს გადასახვევთან, ისანი-სამგორი", "გურამიშვილის გამზ. N154, გლდანი-ნაძალადევი"] }, { name: "კახეთი", count: 7, stations: ["თბილისი-ლაგოდეხის გზატკ. 49-ე კმ, საგარეჯო", "აღმაშენებლის ქ. 1ა, ახმეტა", "სოფ. კუწახტა, ახმეტის რაიონი", "თბილისის გზატკეცილი 39, თელავი", "სოფ. არხილოსკალო, დედოფლისწყაროს რაიონი", "სოფ. ოზაანი, დედოფლისწყაროს რაიონი", "ქალაქი ყვარელი"] }, { name: "ქვემო ქართლი", count: 2, stations: ["სოფ. ქესალო, გარდაბნის რაიონი", "სოფ. თელეთი, გარდაბნის რაიონი"] }, { name: "იმერეთი", count: 2, stations: ["ხრესილის ქ. #2, ტყიბული", "სოფ. კაცხი, ჭიათურა"] }, { name: "შიდა ქართლი", count: 1, stations: ["სოფ. ტყვიავი, გორი"] }], K = c.reduce((o, e) => o + e.count, 0), E = { თბილისი: [41.7151, 44.8271], კახეთი: [41.9166, 45.4736], "ქვემო ქართლი": [41.4519, 45.0967], იმერეთი: [42.2679, 42.718], "შიდა ქართლი": [41.9847, 44.1094] }, S = { "აეროპორტის ხიდის მიმდებარედ, ისანი-სამგორი": [41.6927077, 44.9577878], "შანდორ პეტეფის ქ. N34, ისანი-სამგორი": [41.696208166975474, 44.86056836827645], "დიდი ლილოს გადასახვევთან, ისანი-სამგორი": [41.69324769518418, 44.96015456886662], "გურამიშვილის გამზ. N154, გლდანი-ნაძალადევი": [41.78063354569385, 44.796512440208126], "თბილისი-ლაგოდეხის გზატკ. 49-ე კმ, საგარეჯო": [41.724645917511495, 45.326595643423104], "აღმაშენებლის ქ. 1ა, ახმეტა": [42.02680585635895, 45.2291356556858], "სოფ. კუწახტა, ახმეტის რაიონი": [42.124011302640625, 45.26653821796111], "თბილისის გზატკეცილი 39, თელავი": [41.921489429251935, 45.50875717661228], "სოფ. არხილოსკალო, დედოფლისწყაროს რაიონი": [41.40320135755982, 46.44673372030217], "სოფ. ოზაანი, დედოფლისწყაროს რაიონი": [41.53715323306866, 45.98690328703951], "ქალაქი ყვარელი": [41.930610960640465, 45.82386612395251], "სოფ. ქესალო, გარდაბნის რაიონი": [41.4420330577295, 45.104826213419514], "სოფ. თელეთი, გარდაბნის რაიონი": [41.64313600065319, 44.85257731764811], "ხრესილის ქ. #2, ტყიბული": [42.327766436618866, 42.96351701034333], "სოფ. კაცხი, ჭიათურა": [42.28571427544791, 43.264110581506934], "სოფ. ტყვიავი, გორი": [42.154194868530695, 44.06936361033644] }, I = { "აეროპორტის ხიდის მიმდებარედ, ისანი-სამგორი": "https://maps.app.goo.gl/hE5y3NMy9K4vTfGR6", "შანდორ პეტეფის ქ. N34, ისანი-სამგორი": "https://maps.app.goo.gl/j74R5aGXgqNSwxg69", "დიდი ლილოს გადასახვევთან, ისანი-სამგორი": "https://maps.app.goo.gl/oQH4HsuXcqdmoRC66", "გურამიშვილის გამზ. N154, გლდანი-ნაძალადევი": "https://maps.app.goo.gl/kvsxaYyzDEFyWp9g6", "თბილისი-ლაგოდეხის გზატკ. 49-ე კმ, საგარეჯო": "https://maps.app.goo.gl/12EQZrS6VF6J52NZ9", "აღმაშენებლის ქ. 1ა, ახმეტა": "https://maps.app.goo.gl/7VxFCwVYx4Kh2wqMA", "სოფ. კუწახტა, ახმეტის რაიონი": "https://maps.app.goo.gl/4Uavr7YhTkciW6HB9", "თბილისის გზატკეცილი 39, თელავი": "https://maps.app.goo.gl/9WMSCKvXMo1gx4sT8", "სოფ. არხილოსკალო, დედოფლისწყაროს რაიონი": "https://maps.app.goo.gl/VtRDVQTFyy1RUs2v6", "სოფ. ოზაანი, დედოფლისწყაროს რაიონი": "https://maps.app.goo.gl/PoTpWPUsWfSoHwN7A", "ქალაქი ყვარელი": "https://maps.app.goo.gl/BUTwyf6k138MbzkE8", "სოფ. ქესალო, გარდაბნის რაიონი": "https://maps.app.goo.gl/AENjAwpg1qQbfgER8", "სოფ. თელეთი, გარდაბნის რაიონი": "https://maps.app.goo.gl/TpKUeka5C1nRVaNC8", "ხრესილის ქ. #2, ტყიბული": "https://maps.app.goo.gl/NhUSU3egkTRQ3n1p8", "სოფ. კაცხი, ჭიათურა": "https://maps.app.goo.gl/Ce3ZtFqvBptYEwj5A", "სოფ. ტყვიავი, გორი": "https://maps.app.goo.gl/YG7fvZer4WDqqKBz6" };
function R(o, e) { return I[o] ? I[o] : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${o}, ${e}, საქართველო`)}`; }
function $(o, e) { return S[o] || E[e] || E.თბილისი; }
var _ = "meaqgekw", P = logoImg;
function m({ variant: o = "color", size: e = 40 }) { return o === "white" ? React.createElement("img", { src: P, alt: "Gallon", style: { width: e, height: e, objectFit: "contain", display: "block", filter: "brightness(0) invert(1)" } }) : React.createElement("img", { src: P, alt: "Gallon", style: { width: e, height: e, objectFit: "contain", display: "block" } }); }
function AA({ color: o = "#0f12f3" }) { return React.createElement("svg", { className: "gl-fuel-drop", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement("path", { d: "M20 4C20 4 8 18.5 8 26.2C8 32.7 13.4 36 20 36C26.6 36 32 32.7 32 26.2C32 18.5 20 4 20 4Z", fill: o, opacity: "0.12" }), React.createElement("path", { d: "M20 4C20 4 8 18.5 8 26.2C8 32.7 13.4 36 20 36C26.6 36 32 32.7 32 26.2C32 18.5 20 4 20 4Z", stroke: o, strokeWidth: "2" }), React.createElement("path", { d: "M14.5 24.5C14.5 27.9 17 30 20 30", stroke: o, strokeWidth: "2", strokeLinecap: "round" })); }
function B({ color: o, name: e, liters: n, code: i, rotate: t = 0, offsetTop: s = 0, offsetLeft: x = 0 }) { return React.createElement("div", { className: "gl-talon", style: { transform: `rotate(${t}deg)`, top: s, left: x } }, React.createElement("div", { className: "gl-talon-stub", style: { background: o } }), React.createElement("div", { className: "gl-talon-body", style: { borderColor: o } }, React.createElement("div", { className: "gl-talon-top" }, React.createElement(m, { size: 20 }), React.createElement("span", { className: "gl-talon-wordmark" }, "Gallon")), React.createElement("div", { className: "gl-talon-pill", style: { borderColor: o } }, React.createElement("b", { style: { color: o } }, e), " ", n, " ლიტრი"), React.createElement("div", { className: "gl-talon-bottom" }, React.createElement("span", { className: "gl-talon-code" }, i), React.createElement("span", { className: "gl-talon-barcode" })))); }
function eA({ onClose: o }) { let [e, n] = useState(z[0].name), [i, t] = useState(""), [s, x] = useState(""), [v, C] = useState(""), [b, k] = useState(""), [d, N] = useState(""), [u, r] = useState(!1), [w, h] = useState(!1), [p, l] = useState(""); return React.createElement("div", { className: "gl-modal-overlay", onClick: o }, React.createElement("div", { className: `gl-modal ${w ? "gl-modal-sm" : ""}`, onClick: a => a.stopPropagation() }, React.createElement("button", { className: "gl-modal-close", onClick: o, "aria-label": "დახურვა" }, "✕"), w ? React.createElement("div", { className: "gl-form-success" }, React.createElement("svg", { width: "52", height: "52", viewBox: "0 0 52 52", fill: "none" }, React.createElement("circle", { cx: "26", cy: "26", r: "25", stroke: "#0f12f3", strokeWidth: "2" }), React.createElement("path", { d: "M15 27L22.5 34.5L37 18", stroke: "#0f12f3", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })), React.createElement("h3", null, "მადლობა!"), React.createElement("p", null, "თქვენი მოთხოვნა მიღებულია. ჩვენ მალე დაგიკავშირდებით.")) : React.createElement(React.Fragment, null, React.createElement("p", { className: "gl-modal-eyebrow" }, "ტალონის შეკვეთა"), React.createElement("h3", null, "შეავსეთ ფორმა"), React.createElement("p", { className: "gl-modal-sub" }, "შეავსეთ მონაცემები და ჩვენი გუნდი მალე დაგიკავშირდებათ ტალონის გასაფორმებლად."), React.createElement("form", { className: "gl-form-grid", onSubmit: async (a) => { a.preventDefault(); let Q = a.target.elements._gotcha; if (Q && Q.value) {
        h(!0);
        return;
    } if (!s.trim() || !v.trim()) {
        l("გთხოვთ შეავსოთ სახელი და ტელეფონის ნომერი.");
        return;
    } l(""), r(!0); let g = new FormData; g.append("name", s), g.append("phone", v), b && g.append("email", b), g.append("fuel", e), g.append("liters", i), d && g.append("note", d), g.append("source", "gallon.ge — ტალონის შეკვეთა"); try {
        (await fetch(`https://formspree.io/f/${_}`, { method: "POST", headers: { Accept: "application/json" }, body: g })).ok ? h(!0) : l("რაღაც ვერ გამოვიდა, სცადეთ თავიდან ან მოგვწერეთ info@gallon.ge-ზე.");
    }
    catch {
        l("რაღაც ვერ გამოვიდა, სცადეთ თავიდან ან მოგვწერეთ info@gallon.ge-ზე.");
    }
    finally {
        r(!1);
    } } }, React.createElement("div", { "aria-hidden": "true", style: { position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" } }, React.createElement("label", null, "Leave this field empty", React.createElement("input", { type: "text", name: "_gotcha", tabIndex: -1, autoComplete: "off" }))), React.createElement("div", { className: "gl-form-row" }, React.createElement("div", { className: "gl-field" }, React.createElement("label", { htmlFor: "of-name" }, "სახელი გვარი"), React.createElement("input", { id: "of-name", name: "name", maxLength: 100, value: s, onChange: a => x(a.target.value), placeholder: "ბესო ბესოშვილი" })), React.createElement("div", { className: "gl-field" }, React.createElement("label", { htmlFor: "of-phone" }, "ტელეფონი"), React.createElement("input", { id: "of-phone", name: "phone", maxLength: 30, value: v, onChange: a => C(a.target.value), placeholder: "5XX XX XX XX" }))), React.createElement("div", { className: "gl-field" }, React.createElement("label", { htmlFor: "of-email" }, "ელფოსტა (არასავალდებულო)"), React.createElement("input", { id: "of-email", type: "email", name: "email", maxLength: 120, value: b, onChange: a => k(a.target.value), placeholder: "you@example.com" })), React.createElement("div", { className: "gl-form-row" }, React.createElement("div", { className: "gl-field" }, React.createElement("label", { htmlFor: "of-fuel" }, "საწვავის ტიპი"), React.createElement("select", { id: "of-fuel", name: "fuel", value: e, onChange: a => n(a.target.value) }, z.map(a => React.createElement("option", { key: a.name, value: a.name }, a.name)))), React.createElement("div", { className: "gl-field" }, React.createElement("label", { htmlFor: "of-liters" }, "მოცულობა"), React.createElement("div", { className: "gl-liters-input" }, React.createElement("input", { id: "of-liters", name: "liters", type: "number", min: "1", inputMode: "numeric", value: i, onChange: a => t(a.target.value), placeholder: "მაგ. 30" }), React.createElement("span", { className: "gl-liters-suffix" }, "ლიტრი")))), React.createElement("div", { className: "gl-field" }, React.createElement("label", { htmlFor: "of-note" }, "დამატებითი კომენტარი"), React.createElement("textarea", { id: "of-note", name: "note", maxLength: 1e3, value: d, onChange: a => N(a.target.value), placeholder: "მაგ: სასურველი ფილიალი, რაოდენობა და ა.შ." })), p && React.createElement("p", { className: "gl-form-note", style: { color: "#e0293e" } }, p), React.createElement("button", { type: "submit", className: "gl-form-submit", disabled: u }, u ? "იგზავნება..." : "გაგზავნა"), React.createElement("p", { className: "gl-form-note" }, "გაგზავნით თქვენ ეთანხმებით, რომ Gallon-ის გუნდი დაგიკავშირდებათ მითითებულ ნომერზე."))))); }
var oA = [{ title: "1. ვინ ვართ", body: ["Gallon არის ავტოგასამართი სადგურების ქსელი საქართველოში. ეს პოლიტიკა ეხება ვებგვერდს gallon.ge და განმარტავს, როგორ ვამუშავებთ თქვენს პერსონალურ მონაცემებს.", "დასაკავშირებლად: info@gallon.ge, თბილისი, ისანი-სამგორი, ივანე იუმაშევის N13ე."] }, { title: "2. რა მონაცემებს ვაგროვებთ", body: ["მონაცემებს ვაგროვებთ მხოლოდ მაშინ, როცა თავად შეავსებთ ტალონის შეკვეთის ფორმას:"], list: ["სახელი და გვარი", "ტელეფონის ნომერი", "ელფოსტა (არასავალდებულო)", "საწვავის ტიპი და სასურველი რაოდენობა", "დამატებითი კომენტარი, თუ მიუთითებთ"], after: "პირადი ნომერის, საბანკო ბარათის ან სხვა მგრძნობიარე მონაცემების მოწოდებას ფორმით არ გთხოვთ." }, { title: "3. რისთვის ვიყენებთ", body: ["თქვენს მონაცემებს ვიყენებთ მხოლოდ იმისთვის, რომ დაგიკავშირდეთ და დავამუშაოთ თქვენი ტალონის მოთხოვნა.", "სხვა მიზნით, მათ შორის პირდაპირი მარკეტინგისთვის, თქვენს მონაცემებს თქვენი ცალკე თანხმობის გარეშე არ გამოვიყენებთ."] }, { title: "4. სამართლებრივი საფუძველი", body: ["მონაცემებს ვამუშავებთ თქვენი თანხმობის საფუძველზე, რომელსაც ფორმის გაგზავნით გვაძლევთ, და იმისთვის, რომ თქვენი მოთხოვნით შევასრულოთ საჭირო ნაბიჯები ტალონის გასაფორმებლად."] }, { title: "5. ვის შეიძლება გადაეცეს", body: ["თქვენს მონაცემებზე წვდომა აქვთ მხოლოდ Gallon-ის უფლებამოსილ თანამშრომლებს.", "ფორმის გასაგზავნად ვიყენებთ მესამე მხარის სერვისს Formspree, რომლის სერვერებიც შეიძლება საქართველოს ფარგლებს გარეთ მდებარეობდეს.", "თქვენს მონაცემებს არ ვყიდით და მარკეტინგის მიზნით სხვა კომპანიებს არ გადავცემთ."] }, { title: "6. რამდენ ხანს ვინახავთ", body: ["მონაცემებს ვინახავთ მხოლოდ იმ ვადით, რაც საჭიროა თქვენი მოთხოვნის დასამუშავებლად და კანონით გათვალისწინებული ვალდებულებების შესასრულებლად. ამის შემდეგ მათ ვშლით."] }, { title: "7. Cookie-ები და გარე სერვისები", body: ["ჩვენი ვებგვერდი თავად არ იყენებს ანალიტიკურ ან სარეკლამო cookie-ებს.", "გვერდზე ჩაშენებული რუკა და შრიფტები იტვირთება Google-ის სერვერებიდან, ამიტომ Google-მა შეიძლება მიიღოს ტექნიკური ინფორმაცია, მაგალითად თქვენი IP მისამართი. ამას Google თავისი წესებით ამუშავებს."] }, { title: "8. უსაფრთხოება", body: ["ვებგვერდი დაცულია HTTPS კავშირით, ხოლო ფორმა სპამისგან და არასანქცირებული გაგზავნისგან დამატებითი ზომებით. ვიღებთ გონივრულ ტექნიკურ და ორგანიზაციულ ზომებს, რომ თქვენი მონაცემები დავიცვათ."] }, { title: "9. თქვენი უფლებები", body: ["კანონის საფუძველზე უფლება გაქვთ:"], list: ["მოითხოვოთ ინფორმაცია, რა მონაცემებს ვამუშავებთ თქვენზე", "მოითხოვოთ მონაცემების შესწორება ან წაშლა", "მოითხოვოთ დამუშავების შეწყვეტა ან შეზღუდვა", "ნებისმიერ დროს გააუქმოთ თქვენი თანხმობა"], after: "ამისთვის მოგვწერეთ info@gallon.ge-ზე. თუ ფიქრობთ, რომ თქვენი უფლებები დაირღვა, შეგიძლიათ მიმართოთ საქართველოს კანონმდებლობით განსაზღვრულ ზედამხედველ ორგანოს." }, { title: "10. ცვლილებები", body: ["ამ პოლიტიკას შეიძლება დროდადრო განვაახლოთ. მოქმედი ვერსია ყოველთვის ამ გვერდზე იქნება."] }];
function lA({ onClose: o }) { return React.createElement("div", { className: "gl-modal-overlay", onClick: o }, React.createElement("div", { className: "gl-modal gl-modal-wide", onClick: e => e.stopPropagation() }, React.createElement("button", { className: "gl-modal-close", onClick: o, "aria-label": "დახურვა" }, "✕"), React.createElement("div", { className: "gl-policy" }, React.createElement("p", { className: "gl-modal-eyebrow" }, "gallon.ge"), React.createElement("h3", null, "კონფიდენციალურობის პოლიტიკა"), React.createElement("p", { className: "gl-policy-date" }, "ბოლო განახლება: 2026 წლის 25 ოქტომბერი"), oA.map(e => React.createElement("div", { key: e.title }, React.createElement("h4", null, e.title), e.body.map((n, i) => React.createElement("p", { key: i }, n)), e.list && React.createElement("ul", null, e.list.map(n => React.createElement("li", { key: n }, n))), e.after && React.createElement("p", null, e.after)))))); }
function GallonSite() {
    let [o, e] = useState(!1), [n, i] = useState(c[0].name), [t, s] = useState(0), [x, v] = useState({}), [C, b] = useState(!1), [k, d] = useState(!1), [N, u] = useState(!1);
    useEffect(() => { let l = () => b(window.scrollY > 24); return window.addEventListener("scroll", l), () => window.removeEventListener("scroll", l); }, []);
    let r = c.find(l => l.name === n).stations[t], w = $(r, n), h = !!S[r], p = "gl-navlink";
    return React.createElement("div", { className: "gl-root" }, React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');

        .gl-root {
          --deep: #0f12f3;
          --mid: #3592fa;
          --aqua: #49cef7;
          --cyan: #5beafa;
          --ink: #171a2b;
          --paper: #f6f8fc;
          font-family: 'Noto Sans Georgian', 'Helvetica Neue', Arial, sans-serif;
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        .gl-root * { box-sizing: border-box; }

        /* ---------- Header ---------- */
        .gl-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 32px;
          transition: background .3s ease, box-shadow .3s ease, padding .3s ease;
        }
        .gl-header.scrolled {
          background: rgba(246, 248, 252, 0.85);
          backdrop-filter: blur(10px);
          box-shadow: 0 1px 0 rgba(15,18,243,0.08);
          padding: 12px 32px;
        }
        .gl-brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 20px; color: var(--deep); }
        .gl-nav { display: flex; align-items: center; gap: 34px; }
        .gl-navlink { color: var(--ink); text-decoration: none; font-weight: 500; font-size: 15px; opacity: .8; transition: opacity .2s; }
        .gl-navlink:hover { opacity: 1; }
        .gl-cta-small {
          background: var(--deep); color: #fff; border: none; border-radius: 999px;
          padding: 10px 20px; font-weight: 600; font-size: 14px; cursor: pointer;
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .gl-cta-small:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(15,18,243,0.28); }
        .gl-burger { display: none; padding: 4px; line-height: 0; }
        .gl-mobile-menu { display: none; }

        /* ---------- Hero ---------- */
        .gl-hero {
          position: relative;
          padding: 168px 32px 120px;
          display: flex; align-items: center; justify-content: space-between; gap: 48px;
          background: linear-gradient(180deg, #eef3ff 0%, var(--paper) 65%);
          overflow: hidden;
        }
        .gl-hero-copy { max-width: 560px; z-index: 2; }
        .gl-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 700; letter-spacing: .04em;
          color: var(--deep); background: rgba(15,18,243,0.08);
          padding: 6px 14px; border-radius: 999px; margin-bottom: 22px;
        }
        .gl-h1 {
          font-size: clamp(30px, 5.4vw, 56px); line-height: 1.06; font-weight: 800; letter-spacing: -0.02em;
          margin: 0 0 22px; color: var(--ink); white-space: nowrap;
        }
        .gl-h1 span { color: var(--deep); }
        .gl-lead { font-size: 18px; line-height: 1.55; color: #4b5170; margin: 0 0 36px; max-width: 460px; font-weight: 700; }
        .gl-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .gl-btn-primary {
          background: var(--deep); color: #fff; border: none; border-radius: 12px;
          padding: 16px 26px; font-weight: 800; font-size: 15px; cursor: pointer;
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .gl-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(15,18,243,0.3); }
        .gl-btn-ghost {
          background: transparent; color: var(--ink); border: 1.5px solid #cfd6ef; border-radius: 12px;
          padding: 16px 26px; font-weight: 800; font-size: 15px; cursor: pointer; transition: border-color .15s, background .15s;
        }
        .gl-btn-ghost:hover { border-color: var(--deep); background: rgba(15,18,243,0.05); }

        /* ripple signature mark */
        .gl-ripple-wrap { position: relative; width: 420px; height: 420px; flex-shrink: 0; z-index: 1; }
        .gl-ripple-wrap svg { width: 100%; height: 100%; }
        .gl-ring { transform-origin: 210px 210px; animation: gl-pulse 3.6s ease-out infinite; }
        .gl-ring2 { animation-delay: 1.2s; }
        .gl-ring3 { animation-delay: 2.4s; }
        @keyframes gl-pulse {
          0%   { opacity: .55; transform: scale(0.34); }
          70%  { opacity: 0; transform: scale(1); }
          100% { opacity: 0; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gl-ring { animation: none; opacity: .25; }
        }

        /* ---------- Stats strip ---------- */
        .gl-stats {
          display: flex; justify-content: center; gap: 0;
          max-width: 1080px; margin: -64px auto 0; position: relative; z-index: 3;
          background: #fff; border-radius: 20px; box-shadow: 0 24px 60px rgba(23,26,43,0.1);
          padding: 36px 24px;
        }
        .gl-stat { flex: 1 1 0; text-align: center; border-right: 1px solid #eceffa; }
        .gl-stat:last-child { border-right: none; }
        .gl-stat b { display: block; font-size: 34px; font-weight: 800; color: var(--deep); }
        .gl-stat span { font-size: 14px; color: #626a8a; font-weight: 700; }

        /* ---------- Section shell ---------- */
        .gl-section { max-width: 1080px; margin: 0 auto; padding: 110px 32px 0; }
        .gl-kicker { color: var(--mid); font-weight: 700; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; margin: 0 0 10px; }
        .gl-kicker-lg { font-size: 34px; color: var(--deep); font-weight: 800; letter-spacing: -0.01em; text-transform: none; }
        .gl-h2 { font-size: 34px; font-weight: 800; letter-spacing: -0.01em; margin: 0 0 14px; color: var(--deep); }
        .gl-red { color: #e0293e; }
        .gl-h2-lead { color: #626a8a; font-size: 16px; max-width: 560px; line-height: 1.6; margin: 0 0 48px; }

        /* ---------- Why cards ---------- */
        .gl-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        @media (max-width: 1080px) {
          .gl-cards { grid-template-columns: repeat(2, 1fr); }
        }
        .gl-card { background: #fff; border: 1px solid #eaeefb; border-radius: 18px; padding: 30px 26px; }
        .gl-card-icon {
          width: 46px; height: 46px; display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
        .gl-card h3 { font-size: 18px; font-weight: 700; margin: 0 0 10px; }
        .gl-card p { font-size: 14.5px; line-height: 1.6; color: #626a8a; margin: 0; }

        /* ---------- Fuel / prices ---------- */
        .gl-fuel-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .gl-fuel-card { perspective: 1200px; cursor: pointer; }
        .gl-fuel-inner {
          position: relative; width: 100%; height: 176px;
          transition: transform .6s cubic-bezier(.4,.2,.2,1);
          transform-style: preserve-3d;
        }
        .gl-fuel-card:hover .gl-fuel-inner,
        .gl-fuel-inner.is-flipped { transform: rotateY(180deg); }
        .gl-fuel-face {
          position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden;
          border-radius: 20px; overflow: hidden;
          background: #fff; border: 1px solid #eaeefb;
          padding: 26px 24px;
          transition: box-shadow .18s ease, border-color .18s ease;
        }
        .gl-fuel-card:hover .gl-fuel-face-front { box-shadow: 0 20px 40px rgba(23,26,43,0.09); border-color: transparent; }
        .gl-fuel-bar { position: absolute; top: 0; left: 0; right: 0; height: 5px; }
        .gl-fuel-drop { width: 36px; height: 36px; margin-bottom: 16px; }
        .gl-fuel-name { font-size: 17px; font-weight: 700; margin: 0 0 6px; color: var(--ink); }
        .gl-fuel-price-row { display: flex; align-items: baseline; gap: 6px; position: absolute; left: 24px; bottom: 22px; }
        .gl-fuel-price {
          font-family: 'Space Grotesk', 'Noto Sans Georgian', sans-serif; font-size: 24px; font-weight: 700; color: var(--ink);
          animation: gl-price-sparkle 8s ease-in-out infinite;
        }
        @keyframes gl-price-sparkle {
          0%, 62.5%, 67.5%, 72.5%, 77.5%, 100% { opacity: 1; }
          65%, 70%, 75% { opacity: 0; }
        }
        .gl-fuel-unit { font-size: 13px; color: #9aa1bd; font-weight: 600; }
        .gl-fuel-face-back {
          transform: rotateY(180deg);
          display: flex; align-items: center; justify-content: center; text-align: center;
          padding: 22px;
        }
        .gl-fuel-desc { font-size: 14px; line-height: 1.55; color: #fff; margin: 0; font-weight: 500; }
        @media (max-width: 900px) {
          .gl-fuel-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .gl-fuel-grid { grid-template-columns: 1fr; }
        }

        /* ---------- Talons ---------- */
        .gl-talon-subhead { font-size: 34px; font-weight: 800; letter-spacing: -0.01em; margin: 40px 0 26px; color: var(--deep); }
        .gl-talon-layout { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 160px; align-items: center; margin-bottom: 56px; }
        .gl-talon-steps { display: flex; flex-direction: column; gap: 26px; }
        .gl-talon-step { display: flex; gap: 18px; }
        .gl-talon-step-num {
          flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%;
          background: rgba(15,18,243,0.08); color: var(--deep); font-weight: 800; font-size: 16px;
          display: flex; align-items: center; justify-content: center;
        }
        .gl-talon-step h4 { margin: 4px 0 6px; font-size: 16.5px; font-weight: 700; }
        .gl-talon-step p { margin: 0; font-size: 14.5px; line-height: 1.6; color: #626a8a; }
        .gl-talon-order-text {
          font-size: 24.5px !important; color: #232323 !important; margin: 30px 0 0;
          white-space: nowrap; text-align: center; position: relative;
          left: 50%; transform: translateX(-50%); width: max-content; max-width: 96vw;
        }

        .gl-talon-showcase { position: relative; height: 340px; padding-left: 200px; padding-top: 40px; }
        .gl-talon {
          position: absolute; display: flex; width: 280px;
          border-radius: 16px; overflow: hidden; background: #fff;
          box-shadow: 0 24px 48px rgba(23,26,43,0.16);
        }
        .gl-talon-stub { width: 54px; flex-shrink: 0; position: relative; }
        .gl-talon-stub::before {
          content: ""; position: absolute; inset: 14px 8px;
          background-image: repeating-linear-gradient(90deg, rgba(255,255,255,.85) 0 2px, transparent 2px 6px);
        }
        .gl-talon-body {
          flex: 1; padding: 14px 16px; display: flex; flex-direction: column; gap: 10px;
          border: 2px dashed; border-left: none; border-radius: 0 16px 16px 0;
        }
        .gl-talon-top { display: flex; align-items: center; gap: 7px; }
        .gl-talon-wordmark { font-weight: 800; font-size: 15px; color: var(--ink); }
        .gl-talon-pill {
          border: 1.5px solid; border-radius: 10px; padding: 8px 10px;
          font-size: 12.5px; color: #4b5170; background: rgba(15,18,243,0.03);
        }
        .gl-talon-bottom { display: flex; align-items: center; justify-content: space-between; }
        .gl-talon-code { font-size: 10.5px; color: #9aa1bd; letter-spacing: .02em; }
        .gl-talon-barcode {
          width: 46px; height: 16px;
          background-image: repeating-linear-gradient(90deg, #232323 0 1.5px, transparent 1.5px 3.5px);
        }

        @media (max-width: 860px) {
          .gl-talon-layout { grid-template-columns: 1fr; gap: 40px; }
          .gl-talon-showcase { height: 260px; }
          .gl-talon-order-text {
            white-space: normal; text-align: left; position: static;
            transform: none; width: auto; max-width: none;
          }
        }

        /* ---------- Order form link + modal ---------- */
        .gl-link { color: var(--deep); font-weight: 700; text-decoration: none; border-bottom: 1.5px solid rgba(15,18,243,0.35); transition: border-color .15s, opacity .15s; }
        .gl-link:hover { border-color: var(--deep); }
        .gl-link-btn { background: none; border: none; padding: 0; font: inherit; cursor: pointer; }
        .gl-link-btn.gl-link { border-bottom: 1.5px solid rgba(15,18,243,0.35); }
        .gl-link.gl-red { color: #e0293e; border-bottom-color: rgba(224,41,62,0.35); }

        .gl-modal-overlay {
          position: fixed; inset: 0; background: rgba(15,18,32,0.55); backdrop-filter: blur(3px);
          display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 100;
        }
        .gl-modal {
          width: 100%; max-width: 640px; background: #fff; border-radius: 24px;
          padding: 44px 46px; position: relative; box-shadow: 0 30px 80px rgba(15,18,32,0.35);
          max-height: 90vh; overflow-y: auto;
          transition: max-width .25s ease;
        }
        .gl-modal-sm { max-width: 360px; padding: 40px 34px; }
        .gl-modal-close {
          position: absolute; top: 18px; right: 18px; width: 34px; height: 34px; border-radius: 50%;
          border: none; background: #f1f3fc; color: #626a8a; font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center; transition: background .15s;
        }
        .gl-modal-close:hover { background: #e6e9f7; }
        .gl-modal-eyebrow { color: var(--mid); font-weight: 700; font-size: 12.5px; letter-spacing: .06em; text-transform: uppercase; margin: 0 0 8px; }
        .gl-modal h3 { font-size: 22px; font-weight: 800; margin: 0 0 8px; color: var(--ink); }
        .gl-modal-sub { font-size: 14px; color: #626a8a; margin: 0 0 26px; line-height: 1.55; }
        .gl-form-grid { display: flex; flex-direction: column; gap: 16px; }
        .gl-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .gl-field { display: flex; flex-direction: column; gap: 6px; }
        .gl-field label { font-size: 13px; font-weight: 600; color: var(--ink); }
        .gl-field input, .gl-field select, .gl-field textarea {
          border: 1.5px solid #e4e8f7; border-radius: 12px; padding: 12px 14px; font-size: 14.5px;
          font-family: inherit; color: var(--ink); background: #f9faff; outline: none;
          transition: border-color .15s, background .15s;
        }
        .gl-field input:focus, .gl-field select:focus, .gl-field textarea:focus {
          border-color: var(--deep); background: #fff;
        }
        .gl-field textarea { resize: vertical; min-height: 70px; }
        .gl-liters-input { display: flex; align-items: center; gap: 10px; }
        .gl-liters-input input {
          flex: 1; border: 1.5px solid #e4e8f7; border-radius: 12px; padding: 12px 14px; font-size: 14.5px;
          font-family: inherit; color: var(--ink); background: #f9faff; outline: none;
          transition: border-color .15s, background .15s;
        }
        .gl-liters-input input:focus { border-color: var(--deep); background: #fff; }
        .gl-liters-suffix { font-size: 14.5px; font-weight: 600; color: #626a8a; flex-shrink: 0; }
        .gl-form-submit {
          margin-top: 6px; background: var(--deep); color: #fff; border: none; border-radius: 12px;
          padding: 15px 22px; font-weight: 700; font-size: 15px; cursor: pointer;
          transition: transform .15s ease, box-shadow .15s ease, opacity .15s;
        }
        .gl-form-submit:hover { transform: translateY(-1px); box-shadow: 0 14px 28px rgba(15,18,243,0.3); }
        .gl-form-submit:disabled { opacity: .6; cursor: default; transform: none; box-shadow: none; }
        .gl-form-note { font-size: 12px; color: #9aa1bd; margin: 4px 0 0; }
        .gl-form-success { text-align: center; padding: 20px 0; }
        .gl-form-success svg { margin: 0 auto 16px; display: block; }
        .gl-form-success h3 { margin-bottom: 8px; }
        .gl-form-success p { color: #626a8a; font-size: 14.5px; line-height: 1.6; }
        @media (max-width: 480px) {
          .gl-form-row { grid-template-columns: 1fr; }
        }

        /* ---------- Locations ---------- */
        .gl-loc-layout { display: grid; grid-template-columns: 260px 1fr 1fr; gap: 0; border: 1px solid #eaeefb; border-radius: 20px; overflow: hidden; background: #fff; }
        .gl-loc-tabs { border-right: 1px solid #eaeefb; }
        .gl-loc-tab {
          width: 100%; text-align: left; padding: 20px 24px; border: none; background: transparent; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between; font-size: 15px; font-weight: 600; color: var(--ink);
          border-bottom: 1px solid #f1f3fc; transition: background .15s;
        }
        .gl-loc-tab:hover { background: #f6f8fc; }
        .gl-loc-tab.active { background: rgba(15,18,243,0.06); color: var(--deep); }
        .gl-loc-count {
          font-size: 12px; font-weight: 700; color: var(--deep); background: rgba(15,18,243,0.1);
          border-radius: 999px; padding: 3px 10px;
        }
        .gl-loc-tab.active .gl-loc-count { background: var(--deep); color: #fff; }
        .gl-loc-list { padding: 24px 26px; border-right: 1px solid #eaeefb; max-height: 420px; overflow-y: auto; }
        .gl-loc-item { display: flex; gap: 14px; padding: 16px 10px; border-bottom: 1px dashed #eaeefb; cursor: pointer; border-radius: 10px; transition: background .15s; }
        .gl-loc-item:hover { background: #f6f8fc; }
        .gl-loc-item.active { background: rgba(15,18,243,0.06); }
        .gl-loc-item.active .gl-loc-dot { background: var(--deep); }
        .gl-loc-item:last-child { border-bottom: none; }
        .gl-loc-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--aqua); margin-top: 7px; flex-shrink: 0; }
        .gl-loc-addr { font-size: 15px; color: var(--ink); line-height: 1.5; }
        .gl-loc-map {
          min-height: 420px; display: flex; flex-direction: column;
        }
        .gl-loc-map-canvas { flex: 1; min-height: 300px; }
        .gl-gmap-iframe { width: 100%; height: 100%; min-height: 300px; border: 0; display: block; }
        .gl-loc-map-caption { padding: 18px 22px; text-align: center; border-top: 1px solid #eaeefb; }
        .gl-loc-map-addr { font-size: 15px; font-weight: 700; color: var(--ink); line-height: 1.5; margin: 0 0 4px; }
        .gl-loc-map-region { font-size: 13px; color: #9aa1bd; margin: 0 0 14px; }
        .gl-loc-map-btn {
          display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
          background: var(--deep); color: #fff; font-weight: 700; font-size: 14px;
          padding: 11px 20px; border-radius: 12px; transition: background .15s;
        }
        .gl-loc-map-btn:hover { background: var(--mid); }
        .gl-loc-note { font-size: 12.5px; color: #9aa1bd; margin: 14px 4px 0; text-align: center; }

        /* ---------- Privacy policy ---------- */
        .gl-modal-wide { max-width: 760px; }
        .gl-policy h3 { font-size: 24px; margin: 0 0 6px; }
        .gl-policy-date { font-size: 13px; color: #9aa1bd; margin: 0 0 8px; }
        .gl-policy h4 { font-size: 16px; font-weight: 800; color: var(--deep); margin: 24px 0 8px; }
        .gl-policy p { font-size: 14.5px; line-height: 1.7; color: #3d4260; margin: 0 0 8px; }
        .gl-policy ul { margin: 0 0 8px; padding-left: 20px; }
        .gl-policy li { font-size: 14.5px; line-height: 1.7; color: #3d4260; margin: 0 0 4px; }
        .gl-footer-link {
          background: none; border: none; padding: 0; font: inherit; font-size: 13px; color: #9098b8;
          text-decoration: underline; cursor: pointer; transition: color .15s;
        }
        .gl-footer-link:hover { color: var(--deep); }

        /* ---------- CTA band ---------- */
        .gl-band {
          margin: 130px 0 0; padding: 70px 32px; text-align: center;
          background: radial-gradient(120% 160% at 50% 0%, var(--mid) 0%, var(--deep) 65%);
          color: #fff; position: relative; overflow: hidden;
        }
        .gl-band h2 { font-size: 30px; font-weight: 800; margin: 0 0 14px; }
        .gl-band p { opacity: .85; max-width: 480px; margin: 0 auto 30px; font-size: 15.5px; }
        .gl-btn-onband {
          background: #fff; color: var(--deep); border: none; border-radius: 12px;
          padding: 16px 30px; font-weight: 700; font-size: 15px; cursor: pointer;
        }

        /* ---------- Footer ---------- */
        .gl-footer { padding: 56px 32px 32px; max-width: 1080px; margin: 0 auto; }
        .gl-footer-top { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 32px; padding-bottom: 32px; border-bottom: 1px solid #eaeefb; }
        .gl-footer-brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 18px; color: var(--deep); }
        .gl-footer-cols { display: flex; gap: 64px; flex-wrap: wrap; }
        .gl-footer-col h4 { font-size: 13px; letter-spacing: .05em; text-transform: uppercase; color: #9098b8; margin: 0 0 14px; }
        .gl-footer-col a, .gl-footer-col p { display: block; color: var(--ink); text-decoration: none; font-size: 14.5px; margin-bottom: 10px; opacity: .85; }
        .gl-footer-bottom { padding-top: 24px; display: flex; justify-content: space-between; color: #9098b8; font-size: 13px; flex-wrap: wrap; gap: 10px; }

        @media (max-width: 860px) {
          .gl-nav { display: none; }
          .gl-burger { display: block; background: none; border: none; cursor: pointer; }
          .gl-hero { flex-direction: column; padding-top: 140px; text-align: center; }
          .gl-hero-copy { max-width: 100%; }
          .gl-lead { margin-left: auto; margin-right: auto; }
          .gl-hero-actions { justify-content: center; }
          .gl-h1 { font-size: clamp(26px, 8vw, 38px); }
          .gl-ripple-wrap { width: 260px; height: 260px; }
          .gl-stats { flex-direction: column; gap: 18px; margin-top: 32px; }
          .gl-stat { border-right: none; border-bottom: 1px solid #eceffa; padding-bottom: 14px; }
          .gl-stat:last-child { border-bottom: none; padding-bottom: 0; }
          .gl-cards { grid-template-columns: 1fr; }
          .gl-loc-layout { grid-template-columns: 1fr; }
          .gl-loc-tabs { border-right: none; border-bottom: 1px solid #eaeefb; }
          .gl-loc-list { border-right: none; border-bottom: 1px solid #eaeefb; max-height: none; }
          .gl-section { padding-top: 70px; }
        }

        /* ---------- Mobile polish ---------- */
        .gl-root { max-width: 100vw; }
        .gl-root img, .gl-root svg, .gl-root iframe { max-width: 100%; }
        @media (max-width: 860px) {
          .gl-header, .gl-header.scrolled { padding: calc(12px + env(safe-area-inset-top, 0px)) 18px 12px; }
          .gl-mobile-menu {
            display: flex; flex-direction: column; position: absolute; top: 100%; left: 12px; right: 12px;
            background: #fff; border-radius: 16px; padding: 8px; box-shadow: 0 20px 50px rgba(23,26,43,0.18);
          }
          .gl-mobile-menu a { padding: 14px 16px; border-radius: 10px; color: var(--ink); text-decoration: none; font-weight: 600; font-size: 16px; }
          .gl-mobile-menu a:active { background: rgba(15,18,243,0.06); }
          .gl-hero { padding: 120px 20px 70px; gap: 28px; }
          .gl-lead { font-size: 16px; }
          .gl-stats { margin: 32px 20px 0; padding: 26px 20px; }
          .gl-section { padding-left: 20px; padding-right: 20px; }
          .gl-h2, .gl-kicker-lg, .gl-talon-subhead { font-size: 26px; }
          .gl-talon-subhead { margin: 28px 0 20px; }
          .gl-h2-lead { white-space: normal !important; max-width: none; margin-bottom: 32px; }
          .gl-talon-layout { grid-template-columns: minmax(0, 1fr); gap: 32px; margin-bottom: 24px; }
          .gl-talon-order-text { font-size: 18px !important; }
          .gl-talon-showcase { padding: 0; width: 420px; height: 240px; position: relative; left: 50%; margin-left: -210px; min-width: 0; }
          .gl-loc-layout { grid-template-columns: minmax(0, 1fr); }
          .gl-loc-note { text-align: left; }
          .gl-band { margin-top: 80px; padding: 50px 20px; }
          .gl-band h2 { font-size: 24px; }
          .gl-band h2 span { margin: 0 10px !important; }
          .gl-footer { padding: 44px 20px 24px; }
          .gl-footer-cols { gap: 36px; }
          .gl-modal-overlay { padding: 12px; }
          .gl-modal { padding: 32px 22px; border-radius: 20px; }
          .gl-field input, .gl-field select, .gl-field textarea, .gl-liters-input input { font-size: 16px; }
        }
        @media (max-width: 640px) {
          .gl-h1 { white-space: normal; font-size: clamp(28px, 8.4vw, 38px); line-height: 1.15; }
        }
        @media (max-width: 480px) {
          .gl-talon-showcase { transform: scale(0.8); transform-origin: top center; height: 190px; }
          .gl-talon-step h4 { font-size: 16px; }
          .gl-hero-actions { flex-direction: column; align-items: stretch; }
          .gl-btn-primary, .gl-btn-ghost { width: 100%; }
        }
        @media (max-width: 380px) {
          .gl-talon-showcase { transform: scale(0.66); height: 160px; }
        }
      `), React.createElement("header", { className: `gl-header ${C ? "scrolled" : ""}` }, React.createElement("div", { className: "gl-brand" }, React.createElement(m, { size: 34 }), "Gallon"), React.createElement("nav", { className: "gl-nav" }, React.createElement("a", { className: p, href: "#home" }, "მთავარი"), React.createElement("a", { className: p, href: "#about" }, "ჩვენს შესახებ"), React.createElement("a", { className: p, href: "#fuel" }, "პროდუქტები"), React.createElement("a", { className: p, href: "#talons" }, "ტალონები"), React.createElement("a", { className: p, href: "#locations" }, "ფილიალები"), React.createElement("a", { className: p, href: "#contact" }, "კონტაქტი")), React.createElement("button", { className: "gl-burger", "aria-label": "მენიუ", "aria-expanded": o, onClick: () => e(l => !l) }, React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "#0f12f3", strokeWidth: "2.2", strokeLinecap: "round" }, o ? React.createElement("path", { d: "M6 6l12 12M18 6L6 18" }) : React.createElement("path", { d: "M4 7h16M4 12h16M4 17h16" }))), o && React.createElement("nav", { className: "gl-mobile-menu" }, React.createElement("a", { href: "#home", onClick: () => e(!1) }, "მთავარი"), React.createElement("a", { href: "#about", onClick: () => e(!1) }, "ჩვენს შესახებ"), React.createElement("a", { href: "#fuel", onClick: () => e(!1) }, "პროდუქტები"), React.createElement("a", { href: "#talons", onClick: () => e(!1) }, "ტალონები"), React.createElement("a", { href: "#locations", onClick: () => e(!1) }, "ფილიალები"), React.createElement("a", { href: "#contact", onClick: () => e(!1) }, "კონტაქტი"))), React.createElement("section", { id: "home", className: "gl-hero" }, React.createElement("div", { className: "gl-hero-copy" }, React.createElement("div", { className: "gl-eyebrow" }, "⛽ 16 ფილიალი საქართველოში"), React.createElement("h1", { className: "gl-h1" }, "საწვავი, რომელსაც ", React.createElement("span", null, "ენდობით")), React.createElement("p", { className: "gl-lead" }, "Gallon - ავტოგასამართი სადგურების ქსელი, რომელიც სთავაზობს მძღოლებს მაღალი ხარისხის საწვავს თბილისსა და საქართველოს ხუთ რეგიონში"), React.createElement("div", { className: "gl-hero-actions" }, React.createElement("button", { className: "gl-btn-primary", onClick: () => document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" }) }, "იპოვე უახლოესი სადგური"), React.createElement("button", { className: "gl-btn-ghost", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) }, "ჩვენს შესახებ"))), React.createElement("div", { className: "gl-ripple-wrap", "aria-hidden": "true" }, React.createElement("svg", { viewBox: "0 0 420 420" }, React.createElement("circle", { className: "gl-ring gl-ring3", cx: "210", cy: "210", r: "180", fill: "none", stroke: "#5beafa", strokeWidth: "2" }), React.createElement("circle", { className: "gl-ring gl-ring2", cx: "210", cy: "210", r: "180", fill: "none", stroke: "#3592fa", strokeWidth: "2" }), React.createElement("circle", { className: "gl-ring", cx: "210", cy: "210", r: "180", fill: "none", stroke: "#0f12f3", strokeWidth: "2" })), React.createElement("img", { src: P, alt: "", style: { position: "absolute", top: "11%", left: "11%", width: "78%", height: "78%", objectFit: "contain" } }))), React.createElement("div", { className: "gl-stats" }, React.createElement("div", { className: "gl-stat" }, React.createElement("b", null, K), React.createElement("span", null, "ავტოგასამართი სადგური")), React.createElement("div", { className: "gl-stat" }, React.createElement("b", null, c.length), React.createElement("span", null, "რეგიონი საქართველოში"))), React.createElement("section", { id: "fuel", className: "gl-section" }, React.createElement("h2", { className: "gl-h2" }, "მიმდინარე ფასები"), React.createElement("p", { className: "gl-h2-lead", style: { fontWeight: 700 } }, "აირჩიეთ თქვენი ავტომობილისთვის შესაფერისი საწვავის ტიპი"), React.createElement("div", { className: "gl-fuel-grid" }, z.map(l => React.createElement("div", { className: "gl-fuel-card", key: l.name, onClick: () => v(f => ({ ...f, [l.name]: !f[l.name] })) }, React.createElement("div", { className: `gl-fuel-inner ${x[l.name] ? "is-flipped" : ""}` }, React.createElement("div", { className: "gl-fuel-face gl-fuel-face-front" }, React.createElement("div", { className: "gl-fuel-bar", style: { background: l.color } }), React.createElement(AA, { color: l.color }), React.createElement("h3", { className: "gl-fuel-name" }, l.name), React.createElement("div", { className: "gl-fuel-price-row" }, React.createElement("span", { className: "gl-fuel-price", style: { color: l.color } }, l.price), React.createElement("span", { className: "gl-fuel-unit" }, "₾ / ლ"))), React.createElement("div", { className: "gl-fuel-face gl-fuel-face-back", style: { background: l.color } }, React.createElement("p", { className: "gl-fuel-desc" }, l.desc))))))), React.createElement("section", { id: "about", className: "gl-section" }, React.createElement("h2", { className: "gl-h2" }, "რატომ Gallon"), React.createElement("div", { className: "gl-cards" }, React.createElement("div", { className: "gl-card" }, React.createElement("div", { className: "gl-card-icon" }, React.createElement(m, { size: 28 })), React.createElement("h3", null, "ხარისხის კონტროლი"), React.createElement("p", null, "ხშირი მონიტორინგი და ერთიანი ხარისხის სტანდარტი ყველა ფილიალზე - ეს არის ლაბორატორიულად შემოწმებული საწვავი თქვენი ავტომობილებისთვის.")), React.createElement("div", { className: "gl-card" }, React.createElement("div", { className: "gl-card-icon" }, React.createElement(m, { size: 28 })), React.createElement("h3", null, "ხელმისაწვდომი ფასები"), React.createElement("p", null, "უმაღლესი ხარისხის საწვავი ხელმისაწვდომ ფასად - ხარისხზე კომპრომისის გარეშე.")), React.createElement("div", { className: "gl-card" }, React.createElement("div", { className: "gl-card-icon" }, React.createElement(m, { size: 28 })), React.createElement("h3", null, "ევროპული სტანდარტი"), React.createElement("p", null, "Gallon-ის სადგურებზე წარმოდგენილია ევროპული სტანდარტის საწვავი, რომელიც აკმაყოფილებს მაღალ ხარისხობრივ მოთხოვნებს.")), React.createElement("div", { className: "gl-card" }, React.createElement("div", { className: "gl-card-icon" }, React.createElement(m, { size: 28 })), React.createElement("h3", null, "საიმედო პარტნიორობა"), React.createElement("p", null, "პერსონალური მიდგომა ჩვენს ყველა მომხმარებელთან. ჩვენთან მიიღებთ სწრაფი და კომფორტულ მომსახურებას Gallon-ის სრულ ქსელში.")))), React.createElement("section", { id: "talons", className: "gl-section" }, React.createElement("p", { className: "gl-kicker gl-kicker-lg" }, "ტალონების სისტემა"), React.createElement("h2", { className: "gl-h2", style: { color: "#171a2b", fontSize: 26 } }, "შეიძინეთ ტალონი ", React.createElement("span", { className: "gl-red", style: { textDecoration: "underline" } }, "ფასდაკლებით"), ", გამოიყენეთ ნებისმიერ დროს"), React.createElement("p", { className: "gl-h2-lead" }, "ნებისმიერ ფიზიკურ თუ იურიდიულ პირს შესაძლებლობა აქვს წინასწარ შეიძინოს საწვავი Gallon-ის ქსელში ტალონების სისტემის დახმარებით"), React.createElement("h3", { className: "gl-talon-subhead" }, "როგორ მუშაობს სატალონე სისტემა?"), React.createElement("div", { className: "gl-talon-layout" }, React.createElement("div", { className: "gl-talon-steps" }, React.createElement("div", { className: "gl-talon-step" }, React.createElement("div", { className: "gl-talon-step-num" }, "1"), React.createElement("div", null, React.createElement("h4", null, "შეუკვეთეთ"), React.createElement("p", null, "შეავსეთ", " ", React.createElement("button", { type: "button", className: "gl-link gl-link-btn gl-red", style: { fontWeight: 700 }, onClick: () => d(!0) }, "ფორმა"), " ", "ან დაგვიკავშირდით და შეარჩიეთ თქვენთვის სასურველი ტიპის და რაოდენობის საწვავი."))), React.createElement("div", { className: "gl-talon-step" }, React.createElement("div", { className: "gl-talon-step-num" }, "2"), React.createElement("div", null, React.createElement("h4", null, "მიიღეთ ტალონი"), React.createElement("p", null, "ტრანზაქციის დადასტურების შემდეგ, Gallon-ის თქვენთვის ხელსაყრელი ფილიალიდან ან სათავო ოფისიდან, მიიღებთ თქვენი სურვილისამებრ ნომინირებულ ტალონებს."))), React.createElement("div", { className: "gl-talon-step" }, React.createElement("div", { className: "gl-talon-step-num" }, "3"), React.createElement("div", null, React.createElement("h4", null, "გამოიყენეთ ნებისმიერ დროს"), React.createElement("p", null, "ტალონის საშუალებით საწვავის ჩასხმა შესაძლებელია ნებისმიერ Gallon-ის ფილიალში, თქვენთვის მოსახერხებელ დროს.")))), React.createElement("div", { className: "gl-talon-showcase" }, React.createElement(B, { color: "#5beafa", name: "ევრო დიზელი", liters: 20, code: "D0000001", rotate: -9, offsetTop: 60, offsetLeft: 0 }), React.createElement(B, { color: "#49cef7", name: "ევრო დიზელი - MAX -", liters: 50, code: "ED0000001", rotate: 0, offsetTop: 20, offsetLeft: 70 }), React.createElement(B, { color: "#0f12f3", name: "პრემიუმი", liters: 20, code: "P0000001", rotate: 9, offsetTop: 60, offsetLeft: 140 }))), React.createElement("p", { className: "gl-talon-order-text", style: { fontWeight: 700, maxWidth: "none" } }, "ტალონის შესაკვეთად შეავსეთ", " ", React.createElement("button", { type: "button", className: "gl-link gl-link-btn gl-red", onClick: () => d(!0) }, "ფორმა"), " ", "ან მოგვწერეთ ელ-ფოსტაზე: ", React.createElement("a", { href: "mailto:info@gallon.ge", className: "gl-link", style: { color: "var(--deep)", borderBottom: "none" } }, "info@gallon.ge"))), React.createElement("section", { id: "locations", className: "gl-section" }, React.createElement("h2", { className: "gl-h2" }, "სად გვიპოვით"), React.createElement("p", { className: "gl-h2-lead", style: { fontWeight: 700, maxWidth: "none", whiteSpace: "nowrap" } }, "აირჩიეთ რეგიონი და ნახეთ Gallon-ის ფილიალების მისამართები"), React.createElement("div", { className: "gl-loc-layout" }, React.createElement("div", { className: "gl-loc-tabs" }, c.map(l => React.createElement("button", { key: l.name, className: `gl-loc-tab ${n === l.name ? "active" : ""}`, onClick: () => { i(l.name), s(0); } }, l.name, React.createElement("span", { className: "gl-loc-count" }, l.count)))), React.createElement("div", { className: "gl-loc-list" }, c.find(l => l.name === n).stations.map((l, f) => React.createElement("div", { className: `gl-loc-item ${t === f ? "active" : ""}`, key: f, onClick: () => s(f) }, React.createElement("span", { className: "gl-loc-dot" }), React.createElement("span", { className: "gl-loc-addr" }, l)))), React.createElement("div", { className: "gl-loc-map" }, React.createElement("div", { className: "gl-loc-map-canvas" }, React.createElement("iframe", { key: r, title: "gallon-station-map", className: "gl-gmap-iframe", src: h ? `https://www.google.com/maps?q=${w[0]},${w[1]}&z=16&output=embed` : `https://www.google.com/maps?q=${encodeURIComponent(`${r}, ${n}, საქართველო`)}&output=embed`, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" })), React.createElement("div", { className: "gl-loc-map-caption" }, React.createElement("p", { className: "gl-loc-map-addr" }, r), React.createElement("p", { className: "gl-loc-map-region" }, n, !h && " · მიახლოებით"), React.createElement("a", { className: "gl-loc-map-btn", href: R(r, n), target: "_blank", rel: "noopener noreferrer" }, "გახსენით Google Maps-ზე →"))))), React.createElement("div", { className: "gl-band" }, React.createElement("h2", null, "GALLON", React.createElement("span", { style: { margin: "0 22px", opacity: 1, color: "#fff", fontSize: "1.3em" } }, "•"), "გალონი")), React.createElement("footer", { id: "contact", className: "gl-footer" }, React.createElement("div", { className: "gl-footer-top" }, React.createElement("div", { className: "gl-footer-brand" }, React.createElement(m, { size: 30 }), " Gallon"), React.createElement("div", { className: "gl-footer-cols" }, React.createElement("div", { className: "gl-footer-col" }, React.createElement("h4", null, "ნავიგაცია"), React.createElement("a", { href: "#home" }, "მთავარი"), React.createElement("a", { href: "#about" }, "ჩვენს შესახებ"), React.createElement("a", { href: "#locations" }, "ფილიალები")), React.createElement("div", { className: "gl-footer-col" }, React.createElement("h4", null, "კონტაქტი"), React.createElement("p", null, "info@gallon.ge"), React.createElement("p", null, "თბილისი, საქართველო,", React.createElement("br", null), "ისანი-სამგორი, ივანე იუმაშევის N13ე")))), React.createElement("div", { className: "gl-footer-bottom" }, React.createElement("span", null, "© ", new Date().getFullYear(), " Gallon. ყველა უფლება დაცულია."), React.createElement("button", { type: "button", className: "gl-footer-link", onClick: () => u(!0) }, "კონფიდენციალურობის პოლიტიკა"), React.createElement("span", null, "gallon.ge"))), k && React.createElement(eA, { onClose: () => d(!1) }), N && React.createElement(lA, { onClose: () => u(!1) }));
}
export default GallonSite;
