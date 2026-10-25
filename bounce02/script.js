const themeBtn = document.getElementById("theme-btn");

// User clicks -> "click" event fires -> this callback runs -> CSS class changes
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Translation dictionary: one object per language, same keys in both
const translations = {
  en: {
    page_title: "Omar | Portfolio",
    logo: "Omar",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_hobbies: "Hobbies",
    nav_contact: "Contact",
    theme_btn: "Switch theme",
    hero_title: "Hi, I'm Omar",
    hero_sub: "Student developer at 42 Irbid, learning by building real projects.",
    about_title: "About Me",
    about_alt: "Portrait of Omar",
    about_p1: "I'm a student at 42 Irbid, a peer-to-peer, project-based engineering school in Jordan.",
    about_p2: "I enjoy solving problems, working on Linux, and turning ideas into working web pages.",
    skills_title: "Skills",
    projects_title: "Projects",
    proj0_title: "Project 00: Linux, Git & GitHub",
    proj0_desc: "Terminal basics, version control, and my first repositories on GitHub.",
    proj1_title: "Project 01: HTML",
    proj1_desc: "Structuring web pages with clean, semantic HTML elements.",
    proj2_title: "Project 02: CSS & Visual Presentation",
    proj2_desc: "Flexbox, positioning, CSS shapes, colors and opacity, and the box model.",
    proj3_title: "Project 03: JavaScript",
    proj3_desc: "Variables, functions, DOM manipulation, events, and an interactive task manager.",
    hobbies_title: "Hobbies",
    hob_minecraft: "Playing Minecraft",
    hob_got: "Game of Thrones lore",
    hob_fashion: "Fashion and outfits",
    hob_tech: "Tech troubleshooting",
    contact_title: "Contact",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send",
    form_empty: "Please fill in all fields.",
    form_ok: "Thanks {name}, your message was received!",
    footer: "© 2026 Omar. Built with HTML, CSS and JavaScript."
  },
  ar: {
    page_title: "عمر | الملف الشخصي",
    logo: "عمر",
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_hobbies: "الهوايات",
    nav_contact: "تواصل معي",
    theme_btn: "تغيير المظهر",
    hero_title: "مرحباً، أنا عمر",
    hero_sub: "طالب مطوّر في 42 إربد، أتعلم من خلال بناء مشاريع حقيقية.",
    about_title: "نبذة عني",
    about_alt: "صورة عمر الشخصية",
    about_p1: "أنا طالب في 42 إربد، مدرسة هندسة تعتمد على المشاريع والتعلم بين الأقران في الأردن.",
    about_p2: "أحب حل المشكلات والعمل على لينكس وتحويل الأفكار إلى صفحات ويب تعمل.",
    skills_title: "المهارات",
    projects_title: "المشاريع",
    proj0_title: "المشروع 00: لينكس و Git و GitHub",
    proj0_desc: "أساسيات الطرفية والتحكم بالإصدارات ومستودعاتي الأولى على GitHub.",
    proj1_title: "المشروع 01: HTML",
    proj1_desc: "تنظيم صفحات الويب بعناصر HTML نظيفة ودلالية.",
    proj2_title: "المشروع 02: CSS والعرض البصري",
    proj2_desc: "Flexbox والتموضع وأشكال CSS والألوان والشفافية ونموذج الصندوق.",
    proj3_title: "المشروع 03: JavaScript",
    proj3_desc: "المتغيرات والدوال والتعامل مع DOM والأحداث، ومدير مهام تفاعلي.",
    hobbies_title: "الهوايات",
    hob_minecraft: "لعب ماين كرافت",
    hob_got: "عالم صراع العروش",
    hob_fashion: "الأزياء وتنسيق الملابس",
    hob_tech: "حل مشاكل التقنية",
    contact_title: "تواصل معي",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "الرسالة",
    form_send: "إرسال",
    form_empty: "الرجاء تعبئة جميع الحقول.",
    form_ok: "شكراً {name}، وصلتنا رسالتك!",
    footer: "© 2026 عمر. مبني باستخدام HTML و CSS و JavaScript."
  }
};

const langBtn = document.getElementById("lang-btn");
const status = document.getElementById("form-status");
const form = document.getElementById("contact-form");

let currentLang = "en";
let lastName = null; // remembers the name after sending, so the thank-you can be re-translated

function applyLanguage(lang) {
  const dict = translations[lang];
  currentLang = lang;

  // Direction and language of the whole document
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dict.page_title;

  // Every element with data-i18n gets its text from the dictionary
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = dict[el.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    el.alt = dict[el.dataset.i18nAlt];
  });

  // The button shows the language you can switch TO
  langBtn.textContent = lang === "ar" ? "English" : "العربية";

  if (lastName !== null) {
    status.textContent = dict.form_ok.replace("{name}", lastName);
  }
}

langBtn.addEventListener("click", function () {
  applyLanguage(currentLang === "en" ? "ar" : "en");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    status.textContent = translations[currentLang].form_empty;
    return;
  }

  lastName = name;
  status.textContent = translations[currentLang].form_ok.replace("{name}", name);
  form.reset();
});
