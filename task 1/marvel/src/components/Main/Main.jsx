import React from "react";
import HeroCard from "../HeroCard/HeroCard.jsx";

function Main(props) {
  const heros = [
    {
      image:
        "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
      name: "Железный человек",
      universe: "Marvel Comics",
      alter: "Тони Старк",
      occupation: "гений, миллиардер, плейбой, филантроп",
      friends: "Мстители",
      superpower:
        "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
      more: "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. <br><br> Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. <br><br> Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна.",
    },
    {
      image:
        "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
      name: "Спайдер-мен/Человек-паук",
      universe: "Marvel Comics",
      alter: "Питер Паркер",
      occupation: "борец за справедливость, студент, фотограф",
      friends: "Мстители, Фантастическая четверка, Люди Икс",
      superpower:
        "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
      more: "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:) <br><br> Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». <br><br> Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание.",
    },
    {
      image:
        "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
      name: "Капитан Америка",
      universe: "Marvel Comics",
      alter: "Стивен Роджерс",
      occupation: "супер-солдат",
      friends: "Мстители",
      superpower:
        "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
      more: "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. <br><br> Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. <br><br> По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)",
    },
    {
      image:
        "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
      name: "Тор",
      universe: "Marvel Comics",
      alter: "нет; полное имя — Тор Одинсон",
      occupation: "борец за справедливость, скандинавский бог",
      friends: "Мстители",
      superpower: "все, что может бог, плюс молот Мьелнир",
      more: "персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. <br><br> Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии. ",
    },
    {
      image:
        "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
      name: "Халк",
      universe: "Marvel Comics",
      alter: "Брюс Беннер",
      occupation: "супергерой, борец за справедливость, ученый-биохимик",
      friends: "Мстители",
      superpower: "сверхчеловеческая сила и скорость, выносливость, полет",
      more: "идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев. <br><br> Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках.",
    },
    {
      image:
        "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
      name: "Черная вдова",
      universe: "Marvel Comics",
      alter: "Наташа Романофф",
      occupation: "супергероиня, шпионка",
      friends: "Мстители",
      superpower:
        " пик человеческого физического потенциала, замедленное старение, знание многих языков",
      more: "супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. <br><br> Там же ей вживили сыворотку Суперсолдата — как у Капитана Америки, но в советском варианте. Благодаря ей Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка дает эффект замедленного старения. По мнению фанатов, самое главное преимущество Черной Вдовы — то, что ее сыграла красотка Скарлетт Йоханссон :)",
    },
    {
      image:
        "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg",
      name: "Дэдпул",
      universe: "Marvel Comics",
      alter: "Уэйд Уинстон Уилсон",
      occupation: "антигерой, наемник",
      friends: "частично Мстители, Человек-паук, Росомаха",
      superpower:
        "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
      more: "как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. <br><br> Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, черное чувство юмора: за него Дэдпула прозвали «Болтливым наемником».",
    },
  ];

  return (
    <main>
      {heros.map((heros) => (
        <HeroCard
          name={heros.name}
          image={heros.image}
          universe={heros.universe}
          alter={heros.alter}
          occupation={heros.occupation}
          friends={heros.friends}
          superpower={heros.superpower}
          more={heros.more}
        />
      ))}
    </main>
  );
}

export default Main;
