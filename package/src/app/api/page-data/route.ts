import { NextResponse } from "next/server";
// import { title } from "process";


const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "hello@imsruthi.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:hello@imsruthi.com"
    },
    {
      type: "phone",
      label: "+901 5588 2500",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+90155882500"
    },
    {
      type: "website",
      label: "www.mywebsite.com",
      icon: "/images/icon/web-icon.svg",
      link: "https://www.mywebsite.com"
    }
  ],
  // socialItems: [
  //   {
  //     platform: "dribbble",
  //     icon: "/images/icon/dribble-icon.svg",
  //     link: "https://dribbble.com"
  //   },
  //   {
  //     platform: "linkedin",
  //     icon: "/images/icon/linkedin-icon.svg",
  //     link: "https://linkedin.com"
  //   },
  //   {
  //     platform: "facebook",
  //     icon: "/images/icon/facebook-icon.svg",
  //     link: "https://facebook.com"
  //   }
  // ]
};


const educationData = {
  education: [
    {
      title: "Подтверждённые запасы",
      description: "Документы по запросу (NDA). Запасы подтверждены, проект готов к масштабу."
    },
    {
      title: "Паспорта качества",
      description: "Премиальный D/DГ с устойчивыми показателями. Премия к рынку держится."
    },
    {
      title: "Инфраструктура и логистика",
      description: "Две фабрики и своя ж/д. Отгрузка — сегодня, маршруты согласованы."
    }
  ],
  skills: [
    {
      name: "Марка D/DГ",
      icon: "/images/home/education-skill/Group 7252.jpg",
      rating: 5
    },
    {
      name: "Лаборатория",
      icon: "/images/home/education-skill/Group 7253.jpg",
      rating: 5
    },
    {
      name: "УСО",
      icon: "/images/home/education-skill/Group 7254.jpg",
      rating: 4
    },
    {
      name: "Станция",
      icon: "/images/home/education-skill/Group 7255.jpg",
      rating: 4
    },
    {
      name: "Экспорт",
      icon: "/images/home/education-skill/Group 7256.jpg",
      rating: 5
    },
    {
      name: "Карьер",
      icon: "/images/home/education-skill/Group 7257.jpg",
      rating: 3
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Dribble",
      href: "/"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "LinkedIn",
      href: "/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "hello@imsruthi.com",
      link: "mailto:hello@imsruthi.com"
    },
    {
      type: "phone",
      label: "+901 5588 2500",
      link: "tel:+90155882500"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
