const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const navBar=document.querySelectorAll("a");
navBar[0].className="italic"
navBar[1].className="italic"
navBar[2].className="italic"
navBar[3].className="italic"
navBar[4].className="italic"
navBar[5].className="italic"

navBar[0].textContent=siteContent.nav["nav-item-1"];
navBar[1].textContent=siteContent.nav["nav-item-2"];
navBar[2].textContent=siteContent.nav["nav-item-3"];
navBar[3].textContent=siteContent.nav["nav-item-4"];
navBar[4].textContent=siteContent.nav["nav-item-5"];
navBar[5].textContent=siteContent.nav["nav-item-6"];


const customImg = document.querySelector('.logo');
customImg.src =siteContent.images["logo-img"];

const customImg2 = document.getElementById('cta-img');
customImg2.src =siteContent.images["cta-img"];

document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector("button").textContent=siteContent.cta.button;

const section=document.querySelectorAll(".main-content h4");
section[0].textContent=siteContent["ana-içerik"]["özellikler-h4"];
section[1].textContent=siteContent["ana-içerik"]["hakkımızda-h4"];
section[2].textContent=siteContent["ana-içerik"]["servisler-h4"];
section[3].textContent=siteContent["ana-içerik"]["ürünler-h4"];
section[4].textContent=siteContent["ana-içerik"]["vizyon-h4"];

const customImg3 = document.getElementById('middle-img');
customImg3.src =siteContent.images["accent-img"];

const sectionP=document.querySelectorAll(".main-content p")
sectionP[0].textContent=siteContent["ana-içerik"]["özellikler-içerik"];
sectionP[1].textContent=siteContent["ana-içerik"]["hakkımızda-içerik"];
sectionP[2].textContent=siteContent["ana-içerik"]["servisler-içeriği"];
sectionP[3].textContent=siteContent["ana-içerik"]["ürünler-içeriği"];
sectionP[4].textContent=siteContent["ana-içerik"]["vizyon-içeriği"];

const sectContact=document.querySelector(".contact h4")
sectContact.textContent=siteContent.iletisim["iletişim-h4"]

const sectContactP=document.querySelectorAll(".contact p")
sectContactP[0].textContent=siteContent.iletisim.adres
sectContactP[1].textContent=siteContent.iletisim.telefon
sectContactP[2].textContent=siteContent.iletisim.email

const foot=document.querySelector("footer a")
foot.textContent=siteContent.footer.copyright
foot.className="bold"