
const translations = {
  en: { choose: "Choose Your Character", select: "Select" },
  tr: { choose: "Karakterini Seç", select: "Seç" },
  es: { choose: "Elige Tu Personaje", select: "Seleccionar" },
  it: { choose: "Scegli il tuo personaggio", select: "Seleziona" },
  pt: { choose: "Escolha seu personagem", select: "Selecionar" },
  th: { choose: "เลือกตัวละครของคุณ", select: "เลือก" }
};

function setLanguage(lang) {
  document.getElementById("language-select").style.display = "none";
  document.getElementById("character-select").style.display = "block";

  const texts = translations[lang];
  document.querySelector("h1[data-text='choose']").innerText = texts.choose;
  document.querySelectorAll("button[data-text='select']").forEach(btn => {
    btn.innerText = texts.select;
  });
}
