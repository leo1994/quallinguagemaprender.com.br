// Write a code where I use the same information to do an astrology Birth Chart, exact time, date, and place of birth to choose Programming Language
const descriptions = [
  "Descubra a linguagem de programação que combina com a sua essência!<br> Informe sua data, hora e local de nascimento para encontrar a linguagem ideal no nosso site.",
  "Navegue pelos astros e descubra a linguagem de programação que os planetas reservaram para você.<br> Insira seus dados de nascimento e decifre o código cósmico!",
  "Sua jornada na programação começa nas estrelas!<br> Informe sua data de nascimento e deixe-nos revelar a linguagem de programação que se alinha com o seu destino.",
  "Astronomia encontra programação!<br> Conecte-se com a linguagem de programação perfeita para você, baseada em sua data de nascimento. O universo tem a resposta!",
  "Explore o universo da programação como nunca antes!<br> Descubra sua linguagem de nascimento com base em sua data e hora de nascimento. Pronto para decodificar seu destino?",
  "Encontre sua linguagem de programação astral!<br> Compartilhe sua data, hora e local de nascimento e descubra qual linguagem de codificação o cosmos escolheu para você.",
  "Os segredos do código cósmico revelados!<br> Insira seus dados de nascimento e desvende a linguagem de programação que o universo reservou para você.",
  "Sintonize-se com o código estelar da programação!<br> Descubra sua linguagem de destino com base em sua data de nascimento. Comece sua jornada cósmica na codificação!",
];

const languages = [
  "Python",
  "C",
  "C++",
  "Java",
  "C#",
  "JavaScript",
  "SQL",
  "Assembly language",
  "PHP",
  "R",
  "Go",
  "Visual Basic .NET",
  "Swift",
  "Delphi",
  "Ruby",
  "Perl",
  "Objective-C",
  "Rust",
  "MATLAB",
  "Kotlin",
  "Julia",
  "Lua",
  "Fortran",
  "COBOL",
  "Lisp",
  "Ada",
  "Dart",
  "Scala",
  "Prolog",
  "D",
  "Haskell",
  "TypeScript",
  "Vue.js",
  "Node.js",
  "Flutter",
  "Dart",
  "React Native",
  "OCaml",
  "WebAssembly",
  "Elixir",
  "Clojure",
  "Erlang",
];

// get the id 'description' and add a randomDescription
const descriptionElem = document.getElementById("description");

const randomDescription =
  descriptions[Math.floor(Math.random() * descriptions.length)];

descriptionElem.innerHTML = randomDescription;

const chooseLanguage = (form) => {
  const formData = new FormData(form);

  const date = formData.get("date");
  const time = formData.get("time");
  const place = formData
    .get("place")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  const hash = btoa(`${date}${time}${place}`);

  const index = parseInt(hash, 36) % languages.length;

  const language = languages[index];

  console.log(language);
  console.log(date, time, place);
  return language;
};
